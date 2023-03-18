import { PresentationControls } from "@react-three/drei";
import { config } from "@react-spring/three";

import Lights from "./Lights";

export default function Scene() {
  const animationConfig = {
    ...config.gentle,
    duration: 2000,
  };
  return (
    <>
      <Lights />
      {/* <PivotControls> */}
      <PresentationControls
        speed={2}
        rotation={[0, 0.2, 0]}
        polar={[-Infinity, Infinity]}
        config={{ mass: 1, tension: 100, friction: 15 }}
      ></PresentationControls>
      {/* </PivotControls> */}
    </>
  );
}
