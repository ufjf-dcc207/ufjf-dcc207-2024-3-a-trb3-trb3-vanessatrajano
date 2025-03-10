import "./App.css";
import Flashcard from "./components/Flashcard";

function App() {
  return (
    <>
      <h1>English Flash Cards</h1>
      <div>
        <input type="text" placeholder="Digite uma palavra em inglês" />
        <button>Adicionar Palavra</button>
      </div>
      <Flashcard
        word="aaaaaa"
        definition="aaaaaaaa"
        example="aaaaaaaaaaa"
        pronunciation="aaaaaaaaa"
      />

      <div>
        <button>Flashcard Anterior</button>
        <button>Próximo Flashcard</button>
      </div>
    </>
  );
}

export default App;
