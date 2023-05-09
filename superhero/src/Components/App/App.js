import SuperheroViewer from "../SuperheroViewer";
import "./App.css";
import Input from "../Input/Input";
import { useState } from "react";
import RandomSuperhero from "../RandomSuperhero/Main";

function App() {
  const [inputtedName, setInputtedName] = useState("");
  const [id, setId] = useState();

  function randomise() {
    const randomNumber = Math.floor(Math.random() * 732);
    setId(randomNumber);
  }

  return (
    <div className="App">
      <header className="App-header">Superheroes Assemble 💪🏻</header>
      <Input setInputtedName={setInputtedName} />
      <p>
        If you need any superhero names, here is a
        <a href="https://superheroapi.com/ids.html" target="_blank">
          {" "}
          list
        </a>
      </p>
      <button onClick={randomise}>Get Random superhero </button>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Computer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SuperheroViewer inputtedName={inputtedName} />
            </td>

            <td>
              <RandomSuperhero id={id} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;

/* 
overview plan
✅ use the superhero api --   https://superheroapi.com/api/access-token
✅ access token is 10101936834886394
id 1 to 731

MVP
get user to type the superhero name they want to choose
    include link to list below input box
✅ render superhero with name, image and powerstats

Stretch target
  get computer to choose a random superhero
      render superhero with name, image and powerstats

  Then battle like rock paper scissors based on one stat

*/
