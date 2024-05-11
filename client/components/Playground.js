import {Canvas} from '@react-three/fiber';
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
import Points from './Points/Points';

const ThreeWorld = () => {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}

export default ThreeWorld;

function Scene({

}) {

  return (
    <>
      <Points />
    </>
  );
}