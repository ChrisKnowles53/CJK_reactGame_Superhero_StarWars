import { useEffect, useState } from "react";

// import stuff (useEffect and useState)
// create a function component called SuperheroViewer
// create a state variable called superhero and a function to set it
// call the superhero API with the superhero name: https://www.superheroapi.com/api.php/10101936834886394/search/${name}
// export the component

function SuperheroViewer({inputtedName}) {
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
    <section>
      {superhero && ( // if superhero is truthy, render the following
        <div className="Powerstats">
          <h1>{superhero.name}</h1>
          <img src={superhero.image.url} alt={superhero.name} />
          <p>Intelligence: {superhero.powerstats.intelligence}</p>
          <p>Strength: {superhero.powerstats.strength}</p>
          <p>Speed: {superhero.powerstats.speed}</p>
          <p>Durability: {superhero.powerstats.durability}</p>
          <p>Power: {superhero.powerstats.power}</p>
          <p>Combat: {superhero.powerstats.combat}</p>
        </div>
      )}
    </section>
  );
}

export default SuperheroViewer;
