import { useEffect, useRef, useState } from "react";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { useLoader } from "@react-three/fiber";
import { Mesh, MeshBasicMaterial } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import Points from "./Points/Points";

const MyText = ({ text = "Hello", position, scene }) => {
  const [points, setPoints] = useState([]);
  const loader = useRef();

  useEffect(() => {
    if (!loader.current) {
      loader.current = new FontLoader();
    }
    loader.current.load(
      "/fonts/Montserrat Black_Italic.json",
      (font) => {
        const textGeometry = new TextGeometry(text, {
          font: font,
          size: 1,
          height: 0.2,
        });
        console.log(textGeometry)

        const material = new MeshBasicMaterial({
          color: 0xffff00, // yellow
        });
  
        const mesh = new Mesh(textGeometry, material);
        // scene.add(mesh);
        setPoints(textGeometry.attributes.position.array)
      },
      // onProgress callback
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      // onError callback
      (error) => {
        console.log('An error happened', error);
      }
    );
  }, [text]);
  return <>{points.length > 0 && <Points positions={points} />}</>;
};
export default MyText;
