import { useState } from "react";

const useGridState = (gridSize: number) => {
  const [squaresArray, setSquaresArray] = useState(Array(gridSize).fill(false));
  const [activeSquareIndex, setActiveSquareIndex] = useState(0);

  const selectRandomTarget = () => {
    const randomIndex = Math.floor(Math.random() * gridSize);
    const squaresArrayCopy = [...squaresArray];

    // activate new target
    squaresArrayCopy[randomIndex] = true;

    // deactivate old target
    squaresArrayCopy[activeSquareIndex] = false;

    // state updates
    setActiveSquareIndex(randomIndex);
    setSquaresArray(squaresArrayCopy);
  };

  return {
    squaresArray,
    selectRandomTarget,
  };
};

export default useGridState;
