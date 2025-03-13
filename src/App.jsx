import "./App.css";
import ButtonsNavigation from "./components/ButtonsNavigation";
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
      <ButtonsNavigation />
    </>
  );
}

export default App;
