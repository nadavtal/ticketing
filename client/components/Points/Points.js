import React, { useRef, useCallback, useMemo, useEffect } from "react";
import * as THREE from "three";
// import * as dat from "dat.gui";
// import { MyParticlesMaterial } from "./Shaders/MyParticlesMaterial";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import circle from "./circle.png";
// import { colors } from "./Tube";
// import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { calculateCirclePositions, calculateSquarePositions } from "./paths";
import { colors } from "./colors";
import { MyParticlesMaterial } from "../../materials/MyParticlesMaterial";
// import { arrayToVector3Array } from "../utils/utils3d";
// import { easing } from "maath";

export default function Points({ device, positions, selectedShape }) {
  // console.log(positions)
  // const selectedMenuItem = useSelector((state) => state.menu.selectedMenuItem);
  // const introFinished = useSelector((state) => state.tubes.introFinished);
  // const currentMapType = useSelector((state) => state.menu.currentMapType);
  // const imgTex = useLoader(THREE.TextureLoader, circle);
  const bufferRef = useRef();
  const targetBufferRef = useRef();
  const meshRef = useRef();
  const materialRef = useRef();
  const waveCenterPosition = useRef(new THREE.Vector3(0, 0, 0.5));
  const totalElapsedTimeRef = useRef(0);
  const gui = useRef();
  const direction = useRef(-1);
  const waveTypes = useRef(["and", "or"]);
  const { mouse, viewport } = useThree();
  const { contextSafe } = useGSAP({ scope: meshRef });
  let targetWidth = 0.3;
  const inititalMin = (-1 - targetWidth) * direction.current;
  // const initialPosition = [0, -0.4, -.3];
  const colorChangeInterval = 5; // Change color every 5 seconds
  let lastColorChangeTime = 0;
  let duration = 1;
  let colorIndex = 0;
  let targetMinX = inititalMin;
  let targetMaxX = targetMinX + targetWidth;
  let targetMinZ = inititalMin;
  let targetMaxZ = targetMinZ + targetWidth;
  // console.log(positions)
  let targetColor = colors[colorIndex];
  let targetColor2 = new THREE.Color(1, 0, 0);
  let frameCount = 0;
  const count = device == "desktop" ? 100 : 50;
  const sep = device == "desktop" ? 3 : 6;
  useEffect(() => {
    // if (meshRef.current && !gui.current) {
    //   gui.current = new dat.GUI();
    //   gui.current.add(meshRef.current.position, "x").step(0.01);
    //   gui.current.add(meshRef.current.position, "y").step(0.01);
    //   gui.current.add(meshRef.current.position, "z").step(0.01);
    //   gui.current.add(meshRef.current.rotation, "x").step(0.01);
    //   gui.current.add(meshRef.current.rotation, "y").step(0.01);
    //   gui.current.add(meshRef.current.rotation, "z").step(0.01);
    //   gui.current.add(meshRef.current.scale, "x").step(0.01);
    //   gui.current.add(meshRef.current.scale, "y").step(0.01);
    //   gui.current.add(meshRef.current.scale, "z").step(0.01);
    // }
    return () => {
      // meshRef.current && meshRef.current.dispose();
      materialRef.current && materialRef.current.dispose();
      meshRef.current = null;
      materialRef.current = null;
    };
  });
  // useEffect(() => {
  //   if (meshRef.current) {
  //     onSelectedMenuChange();
  //   }

  //   return () => {};
  // }, [selectedMenuItem.name]);
  // useEffect(() => {
  //   if (meshRef.current && selectedMenuItem.name == "Maps") {
  //     onShapeChange(currentMapType == "Cesium" ? "circle" : "square");
  //   }

  //   return () => {};
  // }, [currentMapType]);
  useEffect(() => {
    if (meshRef.current) {
      onShapeChange(selectedShape);
    }

    return () => {};
  }, [selectedShape]);
  let t = 0;
  let f = 0.001;
  let a = 0.01;
  const graph = useCallback(
    (x, z, factor) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a * factor;
    },
    [t, f, a]
  );

  // const allPositions = useMemo(() => {
  //   return {
  //     circle: calculateCirclePositions(count, sep),
  //     square: calculateSquarePositions(count, sep),
  //   };
  // }, []);

  const randomWaveType = () => {
    return waveTypes.current[
      Math.floor(Math.random() * waveTypes.current.length)
    ];
  };
  // const onSelectedMapType = contextSafe(() => {
  //   gsap.to(meshRef.current.position, {
  //     x: selectedMenuItem.points.position[0],
  //     y: selectedMenuItem.points.position[1],
  //     z: selectedMenuItem.points.position[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   gsap.to(meshRef.current.rotation, {
  //     x: selectedMenuItem.points.rotation[0],
  //     y: selectedMenuItem.points.rotation[1],
  //     z: selectedMenuItem.points.rotation[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   gsap.to(meshRef.current.scale, {
  //     x: selectedMenuItem.points.scale[0],
  //     y: selectedMenuItem.points.scale[1],
  //     z: selectedMenuItem.points.scale[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   // }
  //   waveTypes.current = randomWaveType();
  //   direction.current = -direction.current;
  //   targetMinX = (-1 - targetWidth) * direction.current;
  //   targetMaxX = targetMinX + targetWidth;
  //   targetMinZ = (-1 - targetWidth) * direction.current;
  //   targetMaxZ = targetMinZ + targetWidth;
  // });
  // const onSelectedMenuChange = contextSafe(() => {
  //   // targetMinX = -1;
  //   // if (!materialRef.current) return
  //   // console.log(materialRef.current)
  //   // console.log(meshRef.current)
  //   // const geometry = meshRef.current.geometry;
  //   // const positionsArray = allPositions[selectedMenuItem.points.shape];
  //   // const positionsAttribute = new THREE.Float32BufferAttribute(positionsArray, 3);
  //   // // console.log(positionsAttribute)
  //   // // geometry.setAttribute('targetPoint', positionsAttribute);
  //   // console.log(geometry)
  //   // if (selectedMenuItem.name === "Maps") {
  //   //   gsap.to(meshRef.current.position, {
  //   //     x: -1,
  //   //     y: -0.4,
  //   //     z: 0,
  //   //     duration:animationDuration,
  //   //     ease: "power2.out",
  //   //   });
  //   //   gsap.to(meshRef.current.rotation, {
  //   //     x: 0,
  //   //     y: 0,
  //   //     z: -1.57,
  //   //     duration:animationDuration,
  //   //     ease: "power2.out",
  //   //   });
  //   // } else {
  //   gsap.to(meshRef.current.position, {
  //     x: selectedMenuItem.points.position[0],
  //     y: selectedMenuItem.points.position[1],
  //     z: selectedMenuItem.points.position[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   gsap.to(meshRef.current.rotation, {
  //     x: selectedMenuItem.points.rotation[0],
  //     y: selectedMenuItem.points.rotation[1],
  //     z: selectedMenuItem.points.rotation[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   gsap.to(meshRef.current.scale, {
  //     x: selectedMenuItem.points.scale[0],
  //     y: selectedMenuItem.points.scale[1],
  //     z: selectedMenuItem.points.scale[2],
  //     duration: animationDuration,
  //     ease: "power2.out",
  //   });
  //   // }
  //   waveTypes.current = randomWaveType();
  //   direction.current = -direction.current;
  //   targetMinX = (-1 - targetWidth) * direction.current;
  //   targetMaxX = targetMinX + targetWidth;
  //   targetMinZ = (-1 - targetWidth) * direction.current;
  //   targetMaxZ = targetMinZ + targetWidth;
  // });
  function lerp(a, b, t) {
    return a * (1 - t) + b * t;
  }
  let transition = 0;
  let targetTransition = 0;
  let intervalId;
  const onShapeChange = contextSafe((shape) => {
    
    bufferRef.current.array = positions;
    bufferRef.current.needsUpdate = true;
  });
  const animationDuration = 2;
  // useFrame((state, delta) => {
  //   if (!materialRef.current) return;
  //   t += 15;

  //   const positions = targetBufferRef.current.array;

  //   // Convert mouse coordinates from NDC to your coordinate system.
  //   const mouseX = (mouse.x * sep * count) / 2;
  //   const mouseY = (-mouse.y * sep * count) / 2 - 150;

  //   let i = 0;
  //   let factor = 0;
  //   for (let xi = 0; xi < count; xi++) {
  //     for (let zi = 0; zi < count; zi++) {
  //       let x = sep * (xi - count / 2);
  //       let z = sep * (zi - count / 2);
  //       // Calculate the distance from the point to the mouse.
  //       let dx = x - mouseX;
  //       let dy = z - mouseY;
  //       let distance = Math.sqrt(dx * dx + dy * dy);

  //       // Calculate the target y position.
  //       let targetY;

  //       let currentX = positions[i];
  //       let currentZ = Math.abs(positions[i + 2]);
  //       let factorOffset = 0.005;

  //       const inXRange =
  //         currentX > targetMinX && currentX < targetMinX + targetWidth;
  //       const inZRange =
  //         currentZ > targetMinZ && currentZ < targetMinZ + targetWidth;
  //       if (selectedMenuItem.name === "Home") {
  //         const distanceFromWaveCenter = Math.sqrt(
  //           (currentX - waveCenterPosition.current.x) ** 2 +
  //             (currentZ - waveCenterPosition.current.z) ** 2
  //         );
  //         factorOffset = distanceFromWaveCenter;
  //       }
  //       let distanceFromCenter;
  //       if (distance < 30) {
  //         factor = (30 - distance) * 0.1;
  //         targetY = graph(x, z, factor);
  //       } else if (inXRange) {
  //         const centerX = targetMinX + targetWidth * 0.5;
  //         distanceFromCenter = Math.abs(currentX - centerX);
  //         factor = (30 - distanceFromCenter) * frameCount * factorOffset;
  //         targetY = positions[i + 1] = graph(x, z, factor);
  //       } else if (inZRange) {
  //         const centerZ = targetMinZ + targetWidth * 0.5;
  //         distanceFromCenter = Math.abs(currentZ - centerZ);
  //         factor = (30 - distanceFromCenter) * frameCount * factorOffset;
  //         targetY = positions[i + 1] = graph(x, z, factor);
  //       } else {
  //         factor = Math.sin(frameCount * 0.01);
  //         targetY = graph(x, z, factor);
  //       }

  //       // // factor = (distanceFromCenter) * 0.1;
  //       // targetY = positions[i + 1] = graph(x, z, distanceFromWaveCenter);
  //       // Interpolate the current y position towards the target y position.
  //       if (!introFinished) {
  //         targetY = targetY - 1;
  //       }
  //       let currentY = positions[i + 1];
  //       let newY = THREE.MathUtils.lerp(currentY, targetY, 0.1);
  //       positions[i + 1] = newY;
  //       i += 3;
  //     }
  //   }

  //   targetBufferRef.current.needsUpdate = true;

  //   materialRef.current.uniforms.pointer.value = new THREE.Vector3(
  //     (mouse.x * viewport.width) / 2,
  //     (mouse.y * viewport.height) / 2,
  //     0
  //   );
  //   const elapsedTime = totalElapsedTimeRef.current - lastColorChangeTime;
  //   if (elapsedTime > colorChangeInterval) {
  //     colorIndex++;
  //     targetColor = colors[colorIndex % colors.length];
  //     // targetColor2 = new THREE.Color(1, 0, 0);
  //     lastColorChangeTime = totalElapsedTimeRef.current; // Update the time of the last color change
  //   }

  //   materialRef.current.uniforms.minX.value = targetMinX;
  //   materialRef.current.uniforms.maxX.value = targetMaxX;
  //   materialRef.current.uniforms.minZ.value = targetMinZ;
  //   materialRef.current.uniforms.maxZ.value = targetMaxZ;

  //   // targetMinX = Math.sin(frameCount * 0.01) * (1 - targetWidth * 0.5) + -targetWidth * 0.5;
  //   // targetMaxX = targetMinX + targetWidth;
  //   // targetMinZ = Math.abs(Math.sin(frameCount * 0.01)) * (1 - targetWidth * 0.5) + -targetWidth * 0.5;
  //   // targetMaxZ = targetMinZ + targetWidth;
  //   targetMinX += frameCount * 0.001 * direction.current;
  //   targetMaxX = targetMinX + targetWidth;
  //   targetMinZ += frameCount * 0.001 * direction.current;
  //   targetMaxZ = targetMinZ + targetWidth;

  //   if (frameCount * 0.01 <= 1) {
  //     materialRef.current.uniforms.time.value = frameCount * 0.01;
  //   }

  //   materialRef.current.uniforms.color.value.lerpHSL(targetColor, 0.01);
  //   materialRef.current.uniforms.targetColor.value.lerpHSL(targetColor2, 0.01);
  //   // if (frameCount * 0.01 >= duration) {
  //   //   frameCount = 0;
  //   //   targetMinX = inititalMin;
  //   //   targetMaxX = targetMinX + targetWidth;
  //   //   targetMinZ = inititalMin;
  //   //   targetMaxZ = targetMinZ + targetWidth;
  //   // }
  //   if (meshRef.current && selectedMenuItem.points.shape === "circle") {
  //     easing.damp3(
  //       meshRef.current.rotation,
  //       [
  //         selectedMenuItem.points.rotation[0],
  //         selectedMenuItem.points.rotation[1] + state.pointer.x * 0.1,
  //         selectedMenuItem.points.rotation[2],
  //       ],
  //       1,
  //       delta
  //     );
  //   }
  //   frameCount++;
  // });
  // console.log(positions)

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[1, 1, 1]}
    >
      <points>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            ref={bufferRef}
            // attachObject={['attributes', 'position']}
            attach={"attributes-position"}
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
          {/* <bufferAttribute
        ref={targetBufferRef}
        // attachObject={['attributes', 'position']}
        attach={"attributes-targetPoint"}
        array={targetPositions}
        count={targetPositions.length / 3}
        itemSize={3}
      /> */}
        </bufferGeometry>
        <myParticlesMaterial
          key={MyParticlesMaterial.key}
          ref={materialRef}
          side={THREE.DoubleSide}
          size={0.1}
          transparent={true}
          depthtest={false}
          depthwrite={false}
          blending={THREE.AdditiveBlending}
          color={new THREE.Color(0.5, 0.5, 0.5)}
          pointSize={2.0}
        />
        {/* <pointsMaterial
attach="material"
map={imgTex}
color={0x00aaff}
size={0.1}
sizeAttenuation
transparent={false}
alphaTest={0.5}
opacity={1.0}
/> */}
      </points>
    </mesh>
  );
}
