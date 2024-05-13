import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Points from "../../components/Points/Points";

import { flattenSVG } from "flatten-svg";
import enviromentMap from '../../public/hdr_maps/studio_small_06_1k.hdr'
import MyText from "../../components/MyText";
import IconCreater from "../../components/IconCreater";
import RFModel from "../../components/RFModel";
import { Environment, useEnvironment } from "@react-three/drei";
import { useSelector } from "react-redux";
const Scene = ({
  // selectedShape,
  shapes,
  showPoints,
  logId,
  iconFile,
  modelUrl,
}) => {
  const { gl: renderer, scene, camera } = useThree();
  const modelsUrls = useSelector((state) => state.models.modelUrls);
  const selectedShape = useSelector((state) => state.shapes.selectedShape);
  const positions = shapes[selectedShape];
  const hdrMap = useEnvironment({
    files: enviromentMap,
  });
  useEffect(() => {
    camera.position.set(0, 0, 5); // replace x, y, z with your desired position
    camera.lookAt(0, 0, 0); // adjust this as needed
  }, []);
  useEffect(() => {
    if (logId) {
      createMP4FromScene();
    }

    return () => {};
  }, [logId]);

  const createImageFromScene = () => {
    // Manually render a frame
    renderer.render(scene, camera);

    const dataURL = renderer.domElement.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = dataURL;
    link.click();
  };

  const createMP4FromScene = () => {
    let chunks = [];
    let recorder;

    const startRecording = () => {
      let stream = renderer.domElement.captureStream(60); // 25 FPS
      recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (event) => chunks.push(event.data);
      recorder.start();
    };

    const stopRecording = () => {
      recorder.onstop = (event) => {
        let blob = new Blob(chunks, { type: "video/mp4" });
        let url = URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = url;
        link.download = "output.mp4";
        link.click();
      };
      recorder.stop();
    };

    startRecording();

    // Stop recording after 5 seconds
    setTimeout(stopRecording, 5000);
  };
  
  const Models = ({
    urls
  }) => {
    return (
      <group>
        {urls.map((url, index) => (
          <RFModel key={index} scene={scene} modelUrl={url} index={index}/>
        ))}
      </group>
    );
  }
  return (
    <>
      {/* <Button onClick={handleClick} /> */}
      {/* <MyText scene={scene} /> */}
      <IconCreater scene={scene}  />
      <Models urls={modelsUrls} />
      {/* {modelUrl && <RFModel scene={scene} modelUrl={modelUrl} />} */}
      <Environment map={hdrMap} />
      {positions && (
        <Points
          selectedShape={selectedShape}
          positions={shapes[selectedShape]}
          // targetPositions={shapes[selectedShape]}
        />
      )}
    </>
  );
};

export default Scene;
