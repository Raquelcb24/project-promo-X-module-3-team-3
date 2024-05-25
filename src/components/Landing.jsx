import '../styles/App.scss';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
        <Header/>
        
        <Card />

        <Footer/>
    </>
   
  );
};

export default LandingPage;
