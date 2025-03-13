import React, { useReducer, useRef } from "react";
import WordInput from "./components/WordInput";
import Flashcard from "./components/Flashcard";
import ButtonsNavigation from "./components/ButtonsNavigation";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "BUSCA_PALAVRA_SUCESSO":
          return {
            ...state,
            loading: false,
            flashcards: [...state.flashcards, action.payload],
          };
        case "CARD_ANTERIOR":
          return {
            ...state,
            currentIndex: Math.max(state.currentIndex - 1, 0),
            showAnswer: false,
          };
        case "PROXIMO_CARD":
          return {
            ...state,
            currentIndex: Math.min(
              state.currentIndex + 1,
              state.flashcards.length - 1
            ),
            showAnswer: false,
          };
        case "MOSTRA_RESPOSTA":
          return { ...state, showAnswer: !state.showAnswer };
        default:
          return state;
      }
    },
    {
      flashcards: [],
      currentIndex: 0,
      showAnswer: false,
    }
  );
  const inputRef = useRef(null);

  const fetchWord = async (palavra) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${palavra}`
      );
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const data = await response.json();
      const flashcard = {
        palavra: data[0].word,
        definicao:
          data[0]?.meanings[0]?.definitions[0]?.definition ||
          "Definition not available",
        exemplo:
          data[0]?.meanings[0]?.definitions[0]?.example ||
          "Example not available",
        pronuncia: data[0]?.phonetics[0]?.text || "Pronunciation not available",
      };
      dispatch({ type: "BUSCA_PALAVRA_SUCESSO", payload: flashcard });
    } catch (error) {
      console.error("Erro na busca", error);
    }
  };

  const handleAdd = () => {
    const palavra = inputRef.current.value.trim();
    if (palavra) {
      fetchWord(palavra);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const { flashcards, currentIndex, showAnswer } = state;
  const currentFlashcard = flashcards[currentIndex];

  return (
    <div>
      <h1>English Flash Cards</h1>
      <WordInput referencia={inputRef} onClique={handleAdd} />

      {flashcards.length > 0 && currentFlashcard && (
        <Flashcard
          flashcard={currentFlashcard}
          mostraResposta={showAnswer}
          onMostraResposta={() => dispatch({ type: "MOSTRA_RESPOSTA" })}
        />
      )}

      {flashcards.length > 0 && (
        <ButtonsNavigation
          onAnterior={() => dispatch({ type: "CARD_ANTERIOR" })}
          onProximo={() => dispatch({ type: "PROXIMO_CARD" })}
          disableAnterior={currentIndex === 0}
          disableProximo={currentIndex === state.flashcards.length - 1}
        />
      )}
    </div>
  );
}

export default App;
