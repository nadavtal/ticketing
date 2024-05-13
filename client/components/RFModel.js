import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Box3, MeshBasicMaterial, Vector3, Mesh, Group } from "three";
import Points from "./Points/Points";
import { getMinMax, normalize } from "../utils/utils3d";
const RFModel = forwardRef(
  (
    {
      modelUrl,
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      onClick,
      onPointerDown,
      onPointerUp,
      visible = true,
      viewedProductTitle,
    },
    ref
  ) => {
    const { nodes, materials } = useGLTF(modelUrl);
    console.log(nodes);

    const material = new MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.1,
    });

    const createPointsFromNodes = (nodes) => {
      console.log("createPointsFromNodes", nodes)
      let points = [];
      for (const name in nodes) {

        const node = nodes[name];

        if (node instanceof Mesh) {
          // console.log(node)
          points = [...points, ...node.geometry.attributes.position.array]
        }
      }
      const { min, max } = getMinMax(points);
      const normalized = normalize(points, min, max);
      console.log("points", points.length)
      return new Float32Array(normalized);
    }
    createPointsFromNodes(nodes)
    const autoScalModel = (nodesObject, maxSize) => {
      // Create an empty bounding box
      const bbox = new Box3();
      // Calculate the bounding box for each node
      for (const name in nodesObject) {
        const node = nodesObject[name];
        if (node instanceof Mesh) {
          // bbox.expandByObject(node);
          node.geometry.attributes.position.array = normalize(
            node.geometry.attributes.position.array
          );
        }
        // if (node instanceof Group) {
        //   for (const name in node.children) {
        //     const childNode = nodes[name];
        //     if (childNode instanceof Mesh) {
        //       bbox.expandByObject(childNode);
        //     }
        //     // if (childNode instanceof Group) {
        //     //   bbox.expandByObject(childNode);
        //     // }
        //   }
        // }
      }

      // const size = bbox.getSize(new Vector3());
      // const maxDimension = Math.max(size.x, size.y, size.z);
      // const scaleFactor = maxSize / maxDimension;
      // return scaleFactor;
      return nodesObject
    };
    // autoScalModel()
    // const scaleFactor = autoScalModel(nodes, 1);
    const scaleFactor = 1;
    // console.log("scaleFactor", scaleFactor)
    return (
      <group
        ref={ref}
        onClick={onClick}
        onPointerDown={onPointerDown}
        // onPointerUp={onPointerUp}
        dispose={null}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
        position={position}
        rotation={rotation}
        visible={visible}
      >
        {Object.keys(autoScalModel(nodes)).map((key, index) => {
          const node = nodes[key];
          if (!node.name.includes("bbox"))
            return (
              <mesh
                key={index}
                // onClick={(e) => console.log(node)}
                // onPointerOver={() => console.log(node.userData)}
                geometry={node.geometry}
                material={node.material}
                castShadow
                receiveShadow
                // visible={false}
              />
            );
        })}
        <Points
          positions={createPointsFromNodes(nodes)}
          // targetPositions={shapes[selectedShape]}
        />
      </group>
    );
  }
);

export default RFModel;
