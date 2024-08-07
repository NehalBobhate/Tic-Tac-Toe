import { Player } from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Nehal" symbol="X"></Player>
          <Player name="Mrunal" symbol="O"></Player>
        </ol>
      </div>
    </main>
  );
}

export default App;
