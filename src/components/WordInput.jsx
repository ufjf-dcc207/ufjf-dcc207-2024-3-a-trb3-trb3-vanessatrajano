import React from "react";

function WordInput({ valor, onMudanca }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type a word in english"
        value={valor}
        onChange={onMudanca}
      />
      <button>Add word</button>
    </div>
  );
}
export default WordInput;
