import {useState, useReducer, useEffect} from 'react' 

function RandomSuperhero({randomSuperhero}) {
        
    return (
      <section>
        {randomSuperhero.name && ( // if superhero is truthy, render the following
          <div className="Powerstats">
            <h1>{randomSuperhero.name}</h1>
            <img src={randomSuperhero.image.url} alt={randomSuperhero.name} />
            <p>Intelligence: {randomSuperhero.powerstats.intelligence}</p>
            <p>Strength: {randomSuperhero.powerstats.strength}</p>
            <p>Speed: {randomSuperhero.powerstats.speed}</p>
            <p>Durability: {randomSuperhero.powerstats.durability}</p>
            <p>Power: {randomSuperhero.powerstats.power}</p>
            <p>Combat: {randomSuperhero.powerstats.combat}</p>
          </div>
        )}
      </section>
    );
  }
  export default RandomSuperhero;
