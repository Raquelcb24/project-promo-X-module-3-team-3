
import { Link } from 'react-router-dom';
import Card from './Card';
import cardsData from '../services/cardsData.json';
import '../styles/Landing.scss';
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [cards, setCards] = useState(cardsData);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <main className="main">
      {cards.map((cardData, index) => (
        <Card key={index} formData={cardData} />
      ))}
      <Link className='link' to="/main"> <button className='button--large'>Ir a la página principal</button></Link>
    </main>
  );
};

export default LandingPage;
