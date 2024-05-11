import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Points from "../../components/Points/Points";

import {flattenSVG} from 'flatten-svg';

import MyText from "../../components/MyText";
import IconCreater from "../../components/IconCreater";



const Scene = ({ selectedShape, shapes, showPoints, logId, iconFile }) => {
  const { gl: renderer, scene, camera } = useThree();

  
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
        let blob = new Blob(chunks, { type: 'video/mp4' });
        let url = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = url;
        link.download = 'output.mp4';
        link.click();
      };
      recorder.stop();
    };
    
    startRecording();
    
    // Stop recording after 5 seconds
    setTimeout(stopRecording, 5000);

  };
//   console.log(positions)
  return (
    <>
      {/* <Button onClick={handleClick} /> */}
      {/* <MyText scene={scene} /> */}
    <IconCreater file={iconFile} scene={scene} url={iconFile}/>
      {/* {positions && (
        <Points
          selectedShape={selectedShape}
          positions={positions}
          // targetPositions={shapes[selectedShape]}
        />
      )} */}
    </>
  );
};

export default Scene;
