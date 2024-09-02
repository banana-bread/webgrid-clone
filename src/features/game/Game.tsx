import { useState } from "react";
import Grid from "./components/grid/Grid";
import Scoreboard from "./components/scoreboard/Scoreboard";
import useBitsPerSecond from "./components/grid/hooks/useBitsPerSecond";

const GRID_SIZE = 900; // 30x30
// const GRID_SIZE = 144; // 12x12

function Game() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const {
    netCorrectTargetsClicked,
    correctTargetClicked,
    incorrectTargetClicked,
    resetNetCorrectTargetsClicked,
    calculateBitsPerSecond,
  } = useBitsPerSecond(GRID_SIZE);

  const onStart = () => {
    setHasStarted(true);
    setHasFinished(false);
    resetNetCorrectTargetsClicked();
  };

  return (
    <div className="w-full flex justify-center">
      {!hasStarted && (
        <button
          onClick={onStart}
          className="inline-flex h-12 items-center justify-center rounded-full py-2 px-6 font-medium text-white bg-[#0a84ff] shadow-lg shadow-neutral-400/20 transition active:scale-95"
        >
          Start
        </button>
      )}
      {hasStarted && (
        <div className="w-full flex gap-12 max-w-screen-xl justify-center">
          <div className="flex flex-col justify-center">
            {hasFinished && (
              <div className="flex flex-col">
                <h1 className="text-4xl mb-4">Your peak score:</h1>
                <div className="text-6xl">
                  <span>{calculateBitsPerSecond().toFixed(2)} BPS</span>&nbsp;
                  <span className="text-gray-400">
                    ({netCorrectTargetsClicked} NTPM)
                  </span>
                </div>
              </div>
            )}
          </div>
          {!hasFinished && (
            <div className="w-full flex justify-center items-center gap-20">
              <Scoreboard
                netCorrectTargetsClicked={netCorrectTargetsClicked}
                calculateBitsPerSecond={calculateBitsPerSecond}
                onCountdownFinish={() => setHasFinished(true)}
              />
              <Grid
                size={GRID_SIZE}
                onCorrectTargetClicked={correctTargetClicked}
                onIncorrectTargetClicked={incorrectTargetClicked}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Game;
