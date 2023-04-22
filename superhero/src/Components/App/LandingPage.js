import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function LandingPage() {
  const history = useHistory();

  const handleSuperheroClick = () => {
    history.push('/SuperheroComponents/SuperheroGame');
  };

  const handleStarWarsClick = () => {
    history.push('/starwars');
  };

  

  return (
    <div>
      <h1>Welcome to our game selection page!</h1>
      <p>Please select the game you want to play:</p>
      <Button variant="primary" size="lg" block onClick={handleSuperheroClick}>
        Superhero
      </Button>
      <Button variant="secondary" size="lg" block onClick={handleStarWarsClick}>
        Star Wars
      </Button>
    </div>
  );
}

export default LandingPage;