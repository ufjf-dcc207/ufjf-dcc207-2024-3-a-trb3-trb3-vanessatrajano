import "./Flashcard.css";

function Flashcard({word, definition, example, pronunciation}) {
  return (
    <>
      <h2>{word}</h2>
      <div>
        <p>
          <strong>Definition:</strong> {definition}
        </p>
        <p>
          <strong>Example:</strong> {example}
        </p>
        <p>
          <strong>Pronunciation:</strong> {pronunciation}
        </p>
      </div>
    </>
  );
}

export default Flashcard;
