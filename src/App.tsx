import Game from "./features/game/Game";
import ToggleDarkModeButton from "./ToggleDarkModeButton";

function App() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white flex w-full px-4">
      <Game />
      {/* <ToggleDarkModeButton /> */}
    </div>
  );
}

export default App;
