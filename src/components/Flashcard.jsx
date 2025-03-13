import "./Flashcard.css";

function Flashcard({ flashcard }) {
  return (
    <>
      <h2>{flashcard.palavra}</h2>
      <div>
        <p>
          <strong>Definição:</strong> {flashcard.definicao}
        </p>
        <p>
          <strong>Exemplo:</strong> {flashcard.exemplo}
        </p>
        <p>
          <strong>Pronúncia:</strong> {flashcard.pronuncia}
        </p>
      </div>
    </>
  );
}

export default Flashcard;
