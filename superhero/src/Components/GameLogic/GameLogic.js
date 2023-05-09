// this is where we will set up the rules and game to show who wins

// the api pulls this data
// image
// Intelligence: 81
// Strength: 40
// Speed: 29
// Durability: 55
// Power: 63
// Combat: 90

// rules are to compare 1 stat if a draw move to next stat if 3 draw declare a draw

function GameLogic ({superhero, randomSuperhero}) {

 // compare intelligence
 const userIntelligence = superhero.powerstats.intelligence;
 const randomIntelligence = randomSuperhero.powerstats.intelligence;

 if (userIntelligence > randomIntelligence) {
   console.log("user wins");
 }

 return (
   <section>
     <h2>Game Logic</h2> 
   </section>)
}

export default GameLogic;