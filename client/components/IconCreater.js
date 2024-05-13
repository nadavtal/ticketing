import { useEffect, useRef, useState } from "react";
import Points from "./Points/Points";
import SVGPathCommander from "svg-path-commander";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { useSelector, useDispatch } from "react-redux";
import { parse } from "svg-parser";
import {
  DoubleSide,
  Group,
  Mesh,
  MeshBasicMaterial,
  ShapeGeometry,
} from "three";
import { getMinMax, normalize } from "../utils/utils3d";
const IconCreater = ({
  scene,
  // url = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
}) => {
  const [positions, setPositions] = useState();
  const groupRef = useRef();
  const positionsArrays = useRef([]);
  const iconsUrls = useSelector((state) => state.shapes.iconsUrls);
  //   const font = useLoader(FontLoader, './public/fonts/Montserrat Black_Italic.json');
  // useEffect(() => {
  //   if (url) {
  //       fetch(url)
  //       .then(response => response.text())
  //       .then(svgString => {
  //           const parsedSvg = parse(svgString);
  //           // Now you can work with the parsed SVG
  //           // console.log(parsedSvg)
  //           const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');

  //           setPositions(createFloat32ArrayPositionsSvgPaths(paths))
  //       });

  //   }

  //   return () => {

  //   }
  // }, [url])
  // useEffect(() => {
  //   console.log(file)
  //   const reader = new FileReader();

  //   reader.onloadend = () => {

  //   const parsedSvg = parse(reader.result);
  //   console.log(parsedSvg)
  //   const paths = parsedSvg.children[0].children.filter(child => child.tagName === 'path');
  //   console.log(paths);
  //   setPositions(createFloat32ArrayPositionsSvgPaths(paths))
  //   };

  //   if (file) {
  //    reader.readAsText(file);
  //   }

  //   return () => {

  //   }
  // }, [file])
  useEffect(() => {
    console.log(iconsUrls);
    if (iconsUrls.length > 0) loadIcon(iconsUrls[0]);
    else setPositions(null);
  }, [iconsUrls]);

  function mergeFloat32Arrays(arrays) {
    let totalLength = arrays.reduce((acc, val) => acc + val.length, 0);
    let result = new Float32Array(totalLength);
    let offset = 0;
    for (let array of arrays) {
      result.set(array, offset);
      offset += array.length;
    }
    return result;
  }
  const loadIcon = (iconUrl) => {
    const loader = new SVGLoader();

    loader.load(
      // resource URL
      iconUrl,
      // called when the resource is loaded
      function (data) {
        const paths = data.paths;

        console.log({ paths });
        createPointsFromPaths(paths);

        createModelFromPaths(paths);
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened", error);
      }
    );
  };
  const createFloat32ArrayPositionsSvgPaths = (paths) => {
    // console.log(paths)
    // console.log(shapes[selectedShape])
    const pointsArray = [];
    paths.forEach((path) => {
      const p = path.properties.d;
      // console.log(p)
      const normalizedPath = SVGPathCommander.normalizePath(p);
      //remove first element of array

      // console.log(normalizedPath)
      normalizedPath.forEach((stroke) => {
        stroke.shift();
        // console.log(stroke)
        for (let index = 0; index < stroke.length; index++) {
          pointsArray.push(stroke[index]);
          if (index % 2 !== 0) {
            pointsArray.push(0);
          }
        }
      });
      // const transform = {
      //     translate: [15, 15, 15], // `[15, 15]` would apply a 2D translation, and only `15` for X axis translation
      //     rotate: [15, 15, 15], // or only "15" for 2D rotation on Z axis
      //     scale: [0.7, 0.75, 0.8], // or only "0.7" for 2D scale on all X, Y, Z axis
      //     skew: [15, 15], // or only "15" for the X axis
      //     origin: [15, 15, 15] // full `transform-origin` for a typical 3D transformation
      // }
      // const transformed3DPathString = new SVGPathCommander(normalizedPath).transform(transform);
      // console.log(transformed3DPathString)
    });
    // console.log(pointsArray)
    const normalizedArray = normalize(pointsArray);
    const float32Array = new Float32Array(normalizedArray);
    return float32Array;
  };

  const createPointsFromShape = (shape) => {
    if (shape.curves.length > 0) {
      positionsArrays.current.push(createPointsFromCurves(shape.curves, 30));
    }
    if (shape.holes.length > 0) {
      shape.holes.forEach((hole, index) => {
        positionsArrays.current.push(createPointsFromCurves(hole.curves, 30));
      });
    }
  };
  const createModelFromPaths = (paths) => {
    const group = new Group();

    // console.log(positionsArrays.current);

    scene.add(group);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      const material = new MeshBasicMaterial({
        color: path.color,
        side: DoubleSide,
        depthWrite: false,
      });

      const shapes = SVGLoader.createShapes(path);
      // console.log({ shapes });
      for (let j = 0; j < shapes.length; j++) {
        const shape = shapes[j];
        // createPointsFromShape(shape);
        const geometry = new ShapeGeometry(shape);
        const { min, max } = getMinMax(geometry.attributes.position.array);
        geometry.attributes.position.array = normalize(
          geometry.attributes.position.array,
          min,
          max
        );
        // positionsArrays.current.push(geometry.attributes.position.array)
        const mesh = new Mesh(geometry, material);

        group.add(mesh);
      }
    }
    group.position.x = 2
    groupRef.current = group;
  };
  const createPointsFromPaths = (paths) => {
    console.log({ paths });
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      positionsArrays.current.push(
        createPointsFromCurves(path.currentPath.curves, 30)
      );
      path.subPaths.forEach((subPath) => {
        positionsArrays.current.push(
          createPointsFromCurves(subPath.curves, 30)
        );
      });
    }
    const merged = mergeFloat32Arrays(positionsArrays.current);
    const { min, max } = getMinMax(merged);
    const normalizedArray = normalize(merged, min, max);
    // console.log(merged)
    setPositions(normalizedArray);
  };

  const createPointsFromCurves = (curves, divisions) => {
    const points = [];
    curves.forEach((curve) => {
      const pointsFromCurve = createPointsFromCurve(curve, divisions);
      points.push(...pointsFromCurve);
    });
    return points;
  };

  const createPointsFromCurve = (curve, divisions = 10) => {
    const points = [];
    for (let i = 0; i < divisions; i++) {
      const point = curve.getPoint(i / divisions);
      points.push(point.x, point.y, 0);
    }
    return points;
  };

  // console.log(positions)
  return (
    <>
      {positions && (
        <Points
          positions={positions}
          // targetPositions={shapes[selectedShape]}
        />
      )}
    </>
  );
};

export default IconCreater;
