import { useState } from "react";
import "./App.css";
import ButtonsNavigation from "./components/ButtonsNavigation";
import Flashcard from "./components/Flashcard";
import WordInput from "./components/WordInput";

function App() {
  const [palavra, setPalavra] = useState("");
  const [resultado, setResultado] = useState();

  const fetchWord = async () => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`
      );
      const data = await response.json();
      setResultado(data);
    } catch (error) {
      console.error("Erro na busca", error);
    }
  };

  return (
    <>
      <h1>English Flash Cards</h1>
      <WordInput
        valor={palavra}
        onMudanca={(e) => setPalavra(e.target.value)}
        onClique={fetchWord}
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
