import SuperheroViewer from "../SuperheroViewer";
import "./App.css";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import RandomSuperhero from "../RandomSuperhero/Main";

function App() {
  const [inputtedName, setInputtedName] = useState("");
  const [id, setId] = useState();
  const [randomSuperhero, setRandomSuperhero] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10101936834886394/${id}`
      );
      const data = await response.json();
      setRandomSuperhero(data);
    }
    fetchData();
  }, [id]);

  function randomise() {
    const randomNumber = Math.floor(Math.random() * 732);
    setId(randomNumber);
  }
  const [superhero, setSuperhero] = useState("");

  useEffect(() => {
    async function getSuperhero() {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10101936834886394/search/${inputtedName}`
      );
      const data = await response.json();
      setSuperhero(data.results[0]);
    }
    getSuperhero();
  }, [inputtedName]);

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
              <SuperheroViewer superhero={superhero} />
            </td>

            <td>
              <RandomSuperhero randomSuperhero={randomSuperhero} />
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
