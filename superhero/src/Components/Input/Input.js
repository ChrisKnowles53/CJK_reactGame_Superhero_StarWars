import { useState } from "react";


export default function Input({ setInputtedName }) {
  const [superheroName, setSuperheroName] = useState("");

  function handleNameChange(event) {
    //superheroName = event.target.value;
    let name = event.target.value;
    let capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);
    setSuperheroName(capitalisedName);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setInputtedName(superheroName);
    // clear the input box
    setSuperheroName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter superhero name"
        value={superheroName}
        onChange={handleNameChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
