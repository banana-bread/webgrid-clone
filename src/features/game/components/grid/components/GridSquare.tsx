import { useEffect, useState } from "react";

interface GridSquareProps {
  isActive: boolean;
  onClick: () => void;
}

function GridSquare({ isActive, onClick }: GridSquareProps) {
  const [colorClass, setColorClass] = useState("");
  useEffect(() => {
    setColorClass(isActive ? "active" : "");
  }, [isActive]);

  const handleClick = () => {
    if (!isActive) {
      setColorClass("error");
      setTimeout(() => setColorClass(""), 200);
    }
    onClick();
  };

  return (
    <div className={`grid-square ${colorClass}`} onClick={handleClick}></div>
  );
}

export default GridSquare;
