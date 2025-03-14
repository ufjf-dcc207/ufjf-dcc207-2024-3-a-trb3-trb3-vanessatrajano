import "./WordInput.css";

function WordInput({ referencia, onClique }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClique();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type a word in english"
        ref={referencia}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onClique}>Add word</button>
    </div>
  );
}
export default WordInput;
