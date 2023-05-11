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

function GameLogic({ superhero, randomSuperhero }) {
  let userIntelligence = 0;
  let randomIntelligence = 0;
  // compare intelligence
  if (superhero && superhero.powerstats && superhero.powerstats.intelligence) {
    userIntelligence = parseInt(superhero.powerstats.intelligence);
  }
  // superhero && (userIntelligence = superhero.powerstats.intelligence);

  if (
    randomSuperhero &&
    randomSuperhero.powerstats &&
    randomSuperhero.powerstats.intelligence
  ) {
    randomIntelligence = parseInt(randomSuperhero.powerstats.intelligence);
  }
  console.log(randomIntelligence + "randomIntelligence");
  console.log(userIntelligence);
  // randomSuperhero &&
  //   (randomIntelligence = randomSuperhero.powerstats.intelligence);

  let resultAnswer = "";
  if (userIntelligence > randomIntelligence) {
    resultAnswer = "user wins";
  } else {
    resultAnswer = "computer wins";
  }

  return (
    <section>
      <h2>{resultAnswer}</h2>
    </section>
  );
}

export default GameLogic;
