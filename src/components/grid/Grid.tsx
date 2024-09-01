import { useEffect } from "react";
import "./grid.css";
import useGridState from "./useGridState";
import GridSquare from "./GridSquare";
import useCalculations from "./useCalculations";
import CountdownTimer from "../CountdownTimer";

const GRID_SIZE = 900;

function Grid() {
  const { squaresArray, selectRandomTarget } = useGridState(GRID_SIZE);
  const {
    netCorrectTargetsClicked,
    correctTargetClicked,
    incorrectTargetClicked,
    calculateBitsPerSecond,
  } = useCalculations(GRID_SIZE);

  const handleSquareClick = (index: number) => {
    if (squaresArray[index]) {
      selectRandomTarget();
      correctTargetClicked();
    } else {
      incorrectTargetClicked();
    }
  };

  useEffect(() => {
    selectRandomTarget();
  }, []);

  return (
    <>
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${Math.sqrt(GRID_SIZE)}, 1fr)`,
          gridTemplateRows: `repeat(${Math.sqrt(GRID_SIZE)}, 1fr)`,
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
      <div>
        <h4>NTMP: {netCorrectTargetsClicked}</h4>
        <h4>BPS: {calculateBitsPerSecond()}</h4>
        <CountdownTimer
          style={{ fontSize: "4rem", fontWeight: "500" }}
          timeInSeconds={70}
          format="mm:ss"
          onTimerFinish={() => console.log("game ova")}
        />
      </div>
    </>
  );
}

export default Grid;
