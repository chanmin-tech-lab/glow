import { useEffect, useRef } from "react";

type Props = {};

const PointerTrail = (props: Props) => {
  const containerRef = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", () => {
      const box = document.createElement("div");
      console.log("hi");
      containerRef.current.appendChild(box);
    });
  }, []);
  return (
    <div className="container" ref={containerRef}>
      <div></div>
    </div>
  );
};

export default PointerTrail;
