import { useState } from "react";

const useGridState = (gridSize: number) => {
  const [squaresArray, setSquaresArray] = useState(Array(gridSize).fill(false));
  const [activeSquareIndex, setActiveSquareIndex] = useState(0);

  const selectRandomTarget = () => {
    let randomIndex = Math.floor(Math.random() * gridSize);

    if (randomIndex === activeSquareIndex) {
      return selectRandomTarget();
    }

    const squaresArrayCopy = [...squaresArray];

    squaresArrayCopy[randomIndex] = true;
    squaresArrayCopy[activeSquareIndex] = false;

    setActiveSquareIndex(randomIndex);
    setSquaresArray(squaresArrayCopy);
  };

  return {
    squaresArray,
    selectRandomTarget,
  };
};

export default useGridState;
