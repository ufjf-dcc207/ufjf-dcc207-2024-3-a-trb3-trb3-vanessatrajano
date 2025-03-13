import "./App.css";
import Flashcard from "./components/Flashcard";
import WordInput from "./components/WordInput";

function App() {
  return (
    <>
      <h1>English Flash Cards</h1>
      <WordInput />
      <Flashcard
        word="aaaaaa"
        definition="aaaaaaaa"
        example="aaaaaaaaaaa"
        pronunciation="aaaaaaaaa"
      />

      <div>
        <button>Previous Flashcard</button>
        <button>Next Flashcard</button>
      </div>
    </>
  );
}

export default App;
