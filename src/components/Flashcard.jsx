import "./Flashcard.css";

function Flashcard({ flashcard, mostraResposta, onMostraResposta }) {
  return (
    <>
      <h2>{flashcard.palavra}</h2>
      {mostraResposta && (
        <div>
          <p>
            <strong>Definition:</strong> {flashcard.definicao}
          </p>
          <p>
            <strong>Example:</strong> {flashcard.exemplo}
          </p>
          <p>
            <strong>Pronunciation:</strong> {flashcard.pronuncia}
          </p>
        </div>
      )}
      <button onClick={onMostraResposta}>
        {mostraResposta ? "Hide answer" : "Show answer"}
      </button>
    </>
  );
}

export default Flashcard;
