import { useState } from "react";
import Grid from "./components/grid/Grid";
import Scoreboard from "./components/scoreboard/Scoreboard";
import useBitsPerSecond from "./components/grid/hooks/useBitsPerSecond";
import StartButton from "./components/start_button/StartButton";

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
      {!hasStarted && <StartButton onClick={onStart}>Start Game</StartButton>}
      {hasStarted && (
        <div className="w-full flex gap-12 max-w-screen-xl justify-center">
          <div className="flex flex-col justify-center">
            {hasFinished && (
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl">Your peak score:</h1>
                <div className="text-6xl">
                  <span>{calculateBitsPerSecond().toFixed(2)} BPS</span>&nbsp;
                  <span className="text-gray-400">
                    ({netCorrectTargetsClicked} NTPM)
                  </span>
                </div>
                <div className="self-end mt-6">
                  <StartButton onClick={onStart}>Play Again</StartButton>
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
