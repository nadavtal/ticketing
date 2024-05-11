import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  useTexture,
  Environment,
  useGLTF,
  SoftShadows,
  Html,
  CameraControls,
  useEnvironment,
  MeshTransmissionMaterial,
  MeshReflectorMaterial,
  Text,
  Text3D,
} from "@react-three/drei";
import Points from "../../components/Points/Points";
import Shapes from "../../components/Shapes";
import {
  calculateCirclePositions,
  calculateSquarePositions,
  createBrainPositions,
  paths,
} from "../../components/Points/paths";
import { useEffect, useMemo, useState, useRef } from "react";
import PointsSettings from "../../components/PointsSettings";
import Scene from "./Scene";

// const shapes = Object.keys(paths)

const Playground = () => {
  const device = "desktop";
  const [selectedShape, setSelectedShape] = useState("circle");
  const [showPoints, setShowPoints] = useState(true);
  const [imageSrc, setImageSrc] = useState(null);
  const [iconFile, setIconFile] = useState(null);
  const [logId, setLogId] = useState();
  const prevPropRef = useRef("circle");
  const wrapperRef = useRef();
  const count = device == "desktop" ? 100 : 50;
  const sep = device == "desktop" ? 3 : 6;
  const shapes = {
    circle: calculateCirclePositions(count, sep),
    square: calculateSquarePositions(count, sep),
    brain: createBrainPositions(),
  };
  // console.log(shapes)
  useEffect(() => {
    if (shapes[selectedShape.length] !== shapes[prevPropRef.current].length) {
      setShowPoints(false);
      setTimeout(() => {
        setShowPoints(true);
      }, 100);
    }

    return () => {};
  }, [selectedShape]);

  // console.log(selectedShape)

  return (
    <>
      <Shapes
        shapes={Object.keys(shapes)}
        onClick={(shape) => setSelectedShape(shape)}
      />

      {/* <PointsSettings /> */}
      <div
        ref={wrapperRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Canvas>
          <Scene
            shapes={shapes}
            showPoints={showPoints}
            selectedShape={selectedShape}
            positions={shapes[selectedShape]}
            targetPositions={shapes[selectedShape]}
            logId={logId}
            iconFile={iconFile}
          />
          <OrbitControls />
        </Canvas>
        <div
          className="buttons"
          style={{
            position: "absolute",
            top: "20rem",
          }}
        >
          <button onClick={() => setLogId(Date.now())}>Create Image</button>
          <input
            type="file"
            onChange={(event) => {
              console.log(event)
              const file = event.target.files[0];
              setIconFile(file);
              const reader = new FileReader();

              reader.onloadend = () => {
                setImageSrc(reader.result);
              };

              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
          {imageSrc && <img src={imageSrc} alt="Uploaded SVG" style={{
            backgroundColor: "white"
          }}/>}
        </div>
      </div>
    </>
  );
};

export default Playground;
