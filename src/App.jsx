import { useState } from "react";
import "./App.css";
import ButtonsNavigation from "./components/ButtonsNavigation";
import Flashcard from "./components/Flashcard";
import WordInput from "./components/WordInput";

function App() {
  const [palavra, setPalavra] = useState("");
  const [resultado, setResultado] = useState(null);

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
      {resultado && (
        <Flashcard
          word={resultado[0]?.word || "No word"}
          definition={
            resultado[0]?.meanings[0]?.definitions[0]?.definition ||
            "No definition"
          }
          example="aaaaaaaaaaa"
          pronunciation="aaaaaaaaa"
        />
      )}
      <ButtonsNavigation />
    </>
  );
}

export default App;
