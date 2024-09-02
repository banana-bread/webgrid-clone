import { useState } from "react";

const SIXTY_SECONDS = 60;

const useBitsPerSecond = (gridSize: number) => {
  const [netCorrectTargetsClicked, setNetCorrectTargetsClicked] = useState(0);

  const correctTargetClicked = () => {
    setNetCorrectTargetsClicked((prevVal) => prevVal + 1);
  };

  const incorrectTargetClicked = () => {
    setNetCorrectTargetsClicked((prevVal) => prevVal - 1);
  };

  const resetNetCorrectTargetsClicked = () => {
    setNetCorrectTargetsClicked(0);
  };

  const calculateBitsPerSecond = () => {
    if (netCorrectTargetsClicked < 0) {
      return 0;
    }

    const bitsPerSecond =
      (netCorrectTargetsClicked / SIXTY_SECONDS) * Math.log2(gridSize);

    return bitsPerSecond;
  };

  return {
    netCorrectTargetsClicked,
    correctTargetClicked,
    incorrectTargetClicked,
    resetNetCorrectTargetsClicked,
    calculateBitsPerSecond,
  };
};

export default useBitsPerSecond;
