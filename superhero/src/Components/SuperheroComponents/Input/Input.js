import { useState } from "react";


export default function Input({ setInputtedName }) {
  const [superheroName, setSuperheroName] = useState("");

  function handleNameChange(event) {
    let name = event.target.value;
    let capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
    setSuperheroName(capitalisedName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputtedName(superheroName);
    setSuperheroName("");
  }

  return (
    <div className = "input">
       <input
        type="text"
        placeholder="Enter superhero name"
        value={superheroName}
        onChange={handleNameChange}
        />
      <button onClick={handleSubmit}>KAPOW!</button>
    </div>
  );
}
