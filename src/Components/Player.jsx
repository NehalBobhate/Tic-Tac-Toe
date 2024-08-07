import { useState } from "react";

export function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  //Function and variable to change Edit--><--- Save
  //State-Variable
  const [isEditing, setIsEditing] = useState(false);
  //Function
  /*setIsEditing((editing) => !editing); because if 
  we pass direct true or false it goes in scheduling 
  and this is bad practice so when we have to pass 
  the opposite state we should pass as function*/
  function handleEditClick() {
    setIsEditing((editing) => !editing); //
  }
  //This is to display span if player is not editing and input if player is editing
  let editPlayerName = <span className="player-name">{playerName}</span>;
  isEditing
    ? (editPlayerName = (
        <input type="text" value={playerName} onChange={handleChange} />
      ))
    : (editPlayerName = <span className="player-name">{playerName}</span>);

  //Function and variable to get player-name
  //State-Variable
  //const [playerName, setPlayerName] = useState(initialName);cant declare here bcz of we cannot access above so it is decalred at top
  //Function\
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
