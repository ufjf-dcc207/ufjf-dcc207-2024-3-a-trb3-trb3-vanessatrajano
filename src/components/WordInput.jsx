import "./WordInput.css";

function WordInput({ referencia, onClique }) {
  return (
    <div className="input-container">
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
