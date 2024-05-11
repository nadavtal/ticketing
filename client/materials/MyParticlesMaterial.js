import { Color, Vector3, Vector2 } from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

// Tutorial: https://www.youtube.com/watch?v=f4s1h2YETNY
const MyParticlesMaterial = shaderMaterial(
  {  
    color: new Color(0.1, 0.5, 0.6),
    targetColor: new Color(1., 0.5, 0.6),
    targetPoint: new Vector3(0,1,1),
    pointer: new Vector2(),
    pointSize: 1.0,
    minX: 0,
    maxX: 0,
    minY: 0,
    maxY: 0,
    minZ: 0,
    maxZ: 0,
    time: 0.0,
    f: 0.001,
    a: 0.01,

  },
  // vertex shader
  /*glsl*/ ` 
        varying vec2 vUv;
        uniform float time;
        varying float vProgress;
        varying vec3 vPosition;
        attribute vec3 targetPoint;
        uniform float animationProgress;
        uniform float pointSize;
        uniform float maxX;
        uniform float maxZ;
        uniform float maxY;
        uniform float minX;
        uniform float minZ;
        uniform float minY;
        uniform vec3 pointer;
        uniform float f;
        uniform float a;

        float graph(float x, float z, float factor) {
          return sin(f * (pow(x, 2.0) + pow(z, 2.0) + time)) * a * factor;
        }
        void main() {
          vUv = uv;   
          vPosition = position;
          bool isInXRange = (vPosition.x >= minX && vPosition.x <= maxX);
          float centerX = (maxX + minX) * 0.5;
          vec3 displacedPosition;
          if (time == 0.0) {
            displacedPosition = vPosition;
          } else if (time == 1.0) {
            displacedPosition = targetPoint;
          } else if (time < 1.0 && time > 0.0) {
            displacedPosition = mix(vPosition, targetPoint, time);
          }
          float targetY = vPosition.y;
          float distanceFromCenterX = abs(centerX - vPosition.x);
          if (isInXRange) {
            targetY = (maxX - centerX - distanceFromCenterX) * 0.2;
            // float factor = ((maxX - minX) - distanceFromCenterX) * 0.1;
            displacedPosition = vec3(vPosition.x, targetY, vPosition.z);
          } 
          gl_PointSize = pointSize;
          // gl_PointSize = pointSize + abs(displacedPosition.x * 3.);
          // if (vPosition.x > centerX - 0.01 && vPosition.x < centerX + 0.01) {
          //   gl_PointSize = pointSize * 10.;
          // }
          // gl_PointSize = pointSize;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
          
          
        }
      `,
  // fragment shader
  /*glsl*/ `
        uniform float time;
        varying float vProgress;
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec3 color;
        uniform vec3 targetColor;
        uniform vec3 pointer;
        uniform float maxX;
        uniform float maxZ;
        uniform float maxY;
        uniform float minX;
        uniform float minZ;
        uniform float minY;


        void main() {
          float disc = length(gl_PointCoord.xy - vec2(0.5));
          float opacity = 0.8*smoothstep(0.5, 0.4, disc);
          // vec3 finalColor = color;
          // vec3 finalColor = vec3(color.x * abs(vPosition.z), color.y, color.z);
          vec3 finalColor = mix(color, color*0.5, vProgress);
          if (abs(vPosition.z) >= minZ && abs(vPosition.z) <= maxZ ||
           vPosition.x >= minX && vPosition.x <= maxX){
            finalColor = mix(color, targetColor, abs(vPosition.x));
          }
          gl_FragColor.rgba = vec4(vec3(finalColor), 1.);
          gl_FragColor.rgba = vec4(finalColor.x + (pointer.x * 1.) , finalColor.y , finalColor.z + (pointer.y * 1.), opacity );
        }
      `
);

extend({ MyParticlesMaterial });

export { MyParticlesMaterial };
