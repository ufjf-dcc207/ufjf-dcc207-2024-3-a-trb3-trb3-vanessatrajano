import { useState } from "react";
import "./App.css";
import ButtonsNavigation from "./components/ButtonsNavigation";
import Flashcard from "./components/Flashcard";
import WordInput from "./components/WordInput";

function App() {
  const [palavra, setPalavra] = useState("");
  
  return (
    <>
      <h1>English Flash Cards</h1>
      <WordInput
        valor={palavra}
        onMudanca={(e) => setPalavra(e.target.value)}
      />
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
