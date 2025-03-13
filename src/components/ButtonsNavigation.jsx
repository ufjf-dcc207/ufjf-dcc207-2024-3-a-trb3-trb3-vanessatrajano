import React from "react";

function ButtonsNavigation({
  onAnterior,
  onProximo,
  disableAnterior,
  disableProximo,
}) {
  return (
    <div>
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
