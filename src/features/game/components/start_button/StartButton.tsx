import "./start_button.css";

interface StartButtonProps {
  onClick: () => void;
  children: string;
}
function StartButton({ onClick, children }: StartButtonProps) {
  return (
    <button className="px-6 py-2 text-xl" onClick={onClick}>
      {children}
    </button>
  );
}

export default StartButton;
