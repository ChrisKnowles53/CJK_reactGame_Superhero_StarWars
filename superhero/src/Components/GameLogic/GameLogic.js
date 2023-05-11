// Rule - add up all stats and compare them to each other. The highest score wins. If there is a draw, then it is a draw.
//If its a draw return a message saying its a draw and to get another random superhero

function GameLogic({ superhero, randomSuperhero }) {
  const superheroStats = superhero?.powerstats;
  const randomStats = randomSuperhero?.powerstats;

  // Calculate total scores
  const superheroTotal = calculateTotal(superheroStats);
  const randomTotal = calculateTotal(randomStats);

  // Compare total scores
  let resultAnswer = "";
  if (superheroTotal > randomTotal) {
    resultAnswer = "User wins";
  } else if (randomTotal > superheroTotal) {
    resultAnswer = "Computer wins";
  } else {
    resultAnswer = "It's a draw. Get another random superhero.";
  }

  // Function to calculate total score
  function calculateTotal(stats) {
    if (stats) {
      const { intelligence, strength, speed, durability, power, combat } =
        stats;
      const total = [
        parseInt(intelligence),
        parseInt(strength),
        parseInt(speed),
        parseInt(durability),
        parseInt(power),
        parseInt(combat),
      ]
        .filter((score) => !isNaN(score))
        .reduce((sum, score) => sum + score, 0);
      return total;
    }
    return 0;
  }

  return (
    <section>
      <p>Total score for user: {superheroTotal}</p>
      <p>Total score for computer: {randomTotal}</p>
      <h2>{resultAnswer}</h2>
    </section>
  );
}

export default GameLogic;

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

// function GameLogic({ superhero, randomSuperhero }) {
//   let userIntelligence = 0;
//   let randomIntelligence = 0;
//   // compare intelligence
//   if (superhero && superhero.powerstats && superhero.powerstats.intelligence) {
//     userIntelligence = parseInt(superhero.powerstats.intelligence);
//   }
//   // superhero && (userIntelligence = superhero.powerstats.intelligence);

//   if (
//     randomSuperhero &&
//     randomSuperhero.powerstats &&
//     randomSuperhero.powerstats.intelligence
//   ) {
//     randomIntelligence = parseInt(randomSuperhero.powerstats.intelligence);
//   }
//   console.log(randomIntelligence + "randomIntelligence");
//   console.log(userIntelligence);
//   // randomSuperhero &&
//   //   (randomIntelligence = randomSuperhero.powerstats.intelligence);

//   let resultAnswer = "";
//   if (userIntelligence > randomIntelligence) {
//     resultAnswer = "user wins";
//   } else {
//     resultAnswer = "computer wins";
//   }

//   return (
//     <section>
//       <h2>{resultAnswer}</h2>
//     </section>
//   );
// }

// export default GameLogic;
