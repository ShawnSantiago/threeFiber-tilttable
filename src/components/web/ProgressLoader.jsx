import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
export default function ProgressLoader({ loaded, isLoaded, progress }) {
  const [containerStyles, api] = useSpring(() => ({
    opacity: 1,
    display: "block",
    config: { duration: 250 },
    onRest: () => {
      api.set({ display: "none" });
    },
  }));

  const progressBar = useSpring({
    from: {
      backgroundImage: `linear-gradient(60deg,rgba(225, 193, 110, 1) 0% 0%, rgba(225, 193, 110, 0.2) 0% 100%)`,
    },
    to: {
      backgroundImage: `linear-gradient(60deg, rgba(225, 193, 110, 1) 0% ${progress}%, rgba(225, 193, 110, 0.2) ${progress}% 100%)`,
    },
    config: {
      duration: 1000,
    },
    onRest: () => {
      isLoaded(true);
      api.start({ to: { opacity: 0 } });
    },
  });

  return (
    <animated.div className="progress-container" style={containerStyles}>
      <div>
        <animated.div className="inner-container" style={progressBar}>
          <h1>Parkdale Brass</h1>
        </animated.div>
      </div>
    </animated.div>
  );
}
