import SuperheroViewer from "../SuperheroViewer";
import "./SuperheroGame.css";
import Input from "../Input/Input";
import { useState, useEffect } from "react";
import RandomSuperhero from "../RandomSuperhero/Main";

function SuperheroGame() {
  const [inputtedName, setInputtedName] = useState("");
  const [id, setId] = useState();
  const [superhero, setSuperhero] = useState({});
  const [randomSuperhero, setRandomSuperhero] = useState({});
  

  useEffect(() => {
    async function getSuperhero() {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10101936834886394/search/${inputtedName}`
      );
      const data = await response.json();
      setSuperhero(data.results[0]);
    }
    if (inputtedName !== "") {
      getSuperhero();
    }
  }, [inputtedName]);


  useEffect(() => {
    async function getRandomSuperhero() {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10101936834886394/${id}`
        
      );
      const data = await response.json();
      setRandomSuperhero(data);
    }
    getRandomSuperhero();
  }, [id]);
  

  function randomise() {
    const randomNumber = Math.floor(Math.random() * 732);
    setId(randomNumber);
  }

  return (
    <div className="App">
      <header className="App-header">Superheroes Assemble 💪🏻</header>
      <Input setInputtedName={setInputtedName} />
      {superhero.name && (
      <>
      <p>
        If you need any superhero names, here is a{" "}
        <a href="https://superheroapi.com/ids.html" target="_blank">
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
              <SuperheroViewer superhero ={superhero} />
            </td>

            <td>
              <RandomSuperhero randomSuperhero = {randomSuperhero} />
            </td>
          </tr>
        </tbody>
      </table>
      </>
      )}
    </div>
  );
}

export default SuperheroGame;

