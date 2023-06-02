import React from "react";
import { animated, useSpring, useTrail } from "react-spring";

const numOfPoints = 10;

const points = Array.from({ length: numOfPoints }, (_, i) => i);

const UndulatingBorder = ({ children }) => {
  const trail = useTrail(points.length, {
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        for (let i = 0; i < points.length; i++) {
          await next({ y: i * 10 });
        }
        for (let i = points.length - 1; i >= 0; i--) {
          await next({ y: i * 10 });
        }
      }
    },
  });

  return (
    <div style={{ position: "relative" }}>
      {trail.map(({ y }, index) => (
        <animated.div
          key={index}
          style={{
            position: "absolute",
            top: y.to((y) => `${y}%`),
            bottom: index % 2 === 0 ? 0 : "100%",
            borderRight: "10px solid red",
            height: "5%",
            width: "15px",
          }}
        />
      ))}
      {/* <div>{children}</div> */}
    </div>
  );
};

export default UndulatingBorder;
