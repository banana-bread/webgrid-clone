import { useState } from "react";

const SIXTY_SECONDS = 60;

const useCalculations = (gridSize: number) => {
  const [netCorrectTargetsClicked, setNetCorrectTargetsClicked] = useState(0);

  const correctTargetClicked = () => {
    setNetCorrectTargetsClicked((prevVal) => prevVal + 1);
  };

  const incorrectTargetClicked = () => {
    setNetCorrectTargetsClicked((prevVal) => prevVal - 1);
  };

  const calculateBitsPerSecond = () => {
    if (netCorrectTargetsClicked < 0) {
      return 0;
    }

    const bitsPerSecond =
      (netCorrectTargetsClicked / SIXTY_SECONDS) * Math.log2(gridSize);

    return parseFloat(bitsPerSecond.toFixed(2));
  };

  return {
    netCorrectTargetsClicked,
    correctTargetClicked,
    incorrectTargetClicked,
    calculateBitsPerSecond,
  };
};

export default useCalculations;
