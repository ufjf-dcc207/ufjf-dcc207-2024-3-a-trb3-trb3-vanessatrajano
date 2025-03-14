import "./ButtonsNavigation.css";

function ButtonsNavigation({
  onAnterior,
  onProximo,
  disableAnterior,
  disableProximo,
}) {
  return (
    <div className="buttons-container">
      <button onClick={onAnterior} disabled={disableAnterior}>
        Previous Flashcard
      </button>
      <button onClick={onProximo} disabled={disableProximo}>
        Next Flashcard
      </button>
    </div>
  );
}
export default ButtonsNavigation;
