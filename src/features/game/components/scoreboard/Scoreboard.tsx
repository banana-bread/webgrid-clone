import CountdownTimer from "./components/CountdownTimer";

interface ScoreboardProps {
  netCorrectTargetsClicked: number;
  calculateBitsPerSecond: () => number;
  onCountdownFinish: () => void;
}

function Scoreboard({
  netCorrectTargetsClicked,
  calculateBitsPerSecond,
  onCountdownFinish,
}: ScoreboardProps) {
  return (
    <div className="flex flex-col items-center tracking-tighter whitespace-nowrap">
      <CountdownTimer
        className="text-6xl font-bold mb-5"
        timeInSeconds={70}
        format="mm:ss"
        onCountdownFinish={onCountdownFinish}
      />
      <div className="text-6xl">{calculateBitsPerSecond().toFixed(2)} BPS</div>
      <div className="text-4xl text-gray-400">
        NTPM: {netCorrectTargetsClicked}
      </div>
    </div>
  );
}

export default Scoreboard;
