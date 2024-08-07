import GameBoard from "./Components/GameBoard";
import { Player } from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-Name-1" symbol="X"></Player>
          <Player initialName="Player-Name-2" symbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
