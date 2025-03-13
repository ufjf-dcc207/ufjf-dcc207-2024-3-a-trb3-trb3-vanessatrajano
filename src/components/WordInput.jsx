import React from "react";

function WordInput({ referencia, onClique }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a word in english"
        ref={referencia}
      />
      <button onClick={onClique}>Add word</button>
    </div>
  );
}
export default WordInput;
