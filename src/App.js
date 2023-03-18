import "./App.scss";
import { Suspense, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, SoftShadows } from "@react-three/drei";
import { useProgress } from "@react-three/drei";

import Scene from "./components/scene/Scene";
import ProgressLoader from "./components/web/ProgressLoader";
import Nav from "./components/web/Navigation";

function Camera() {
  const camera = useThree(({ camera }) => {
    camera.fov = 45;
    camera.position.set(0, 0, 3);
  });
  return camera;
}
export default function App() {
  const [loaded, isLoaded] = useState(false);
  const progress = useProgress((state) => state.progress);

  return (
    <>
      <ProgressLoader loaded={loaded} isLoaded={isLoaded} progress={progress} />
      <Nav />
      <Canvas shadows={true}>
        <Suspense fallback={null}>
          <Environment files={"outdoors.hdr"} />
          <SoftShadows
            frustum={3.75}
            size={0.005}
            near={9.5}
            samples={17}
            rings={11}
          />
          <Camera />
        </Suspense>

        {loaded ? <Scene /> : null}
      </Canvas>
    </>
  );
}
