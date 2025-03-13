import React from "react";

function WordInput({ valor, onMudanca, onClique }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a word in english"
        value={valor}
        onChange={onMudanca}
      />
      <button onClick={onClique}>Add word</button>
    </div>
  );
}
export default WordInput;
