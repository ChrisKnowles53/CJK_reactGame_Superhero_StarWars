


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


/*
import useState, useReducer
Wait for user to select superhero before this function fires
fetch api by id number
generate random number as the id
display name, image, stats


function RandomSuperhero({id}) {
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
  
    return (
      <section>

        {randomSuperhero && ( // if superhero is truthy, render the following
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
  */