import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  return (
    <>
      <h1>English Flash Cards</h1>
      <div>
        <input type="text" placeholder="Type a word in english" />
        <button>Add word</button>
      </div>
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
