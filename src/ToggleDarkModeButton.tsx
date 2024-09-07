import { useState, useEffect } from "react";
// import SunSvg from "./assets/sun.svg";
// import MoonSvg from "./assets/moon.svg";

const ToggleDarkModeButton = () => {
  const [appearance, setAppearance] = useState("light");

  const getModeToggle = () => {
    return appearance === "light" ? "dark" : "light";
  };

  const handleClick = () => {
    const newMode = getModeToggle();
    localStorage.setItem("appearance", newMode);
    setAppearance(newMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("appearance");
    if (!savedMode) return;
    setAppearance(savedMode);
  }, []);

  useEffect(() => {
    if (appearance === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [appearance]);

  return (
    <>
      <button onClick={handleClick}>enable {getModeToggle()} mode</button>
    </>
  );
};

export default ToggleDarkModeButton;
