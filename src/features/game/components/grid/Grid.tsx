import { useEffect } from "react";
import "./grid.css";
import useGridState from "./hooks/useGridState";
import GridSquare from "./components/GridSquare";

interface GridProps {
  size: number;
  onCorrectTargetClicked: () => void;
  onIncorrectTargetClicked: () => void;
}

function Grid({
  size,
  onCorrectTargetClicked,
  onIncorrectTargetClicked,
}: GridProps) {
  const { squaresArray, selectRandomTarget } = useGridState(size);

  const handleSquareClick = (index: number) => {
    if (squaresArray[index]) {
      selectRandomTarget();
      onCorrectTargetClicked();
    } else {
      onIncorrectTargetClicked();
    }
  };

  useEffect(() => {
    selectRandomTarget();
  }, []);

  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${Math.sqrt(size)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(size)}, 1fr)`,
      }}
    >
      {squaresArray.map((isActive: boolean, index: number) => (
        <GridSquare
          key={index}
          isActive={isActive}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Grid;
