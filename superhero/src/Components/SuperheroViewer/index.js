import { useEffect, useState } from "react";

function SuperheroViewer({ superhero }) {
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
          <p>id: {superhero.id}</p>
        </div>
      )}
    </section>
  );
}

export default SuperheroViewer;
