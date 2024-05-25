import { Link } from "react-router-dom";
import Card from "./Card";
import exampleDog from '../images/perretes1.jpeg';
import '../styles/Landing.scss';

const LandingPage = () => {
  const cardsData = [
    {
      image: {exampleDog},
      photo: "path/to/photo1.jpg",
      job: "Developer",
      autor: "Author 1",
      name: "Project 1",
      slogan: "Slogan 1",
      desc: "Description 1",
      technologies: "Tech 1",
      demo: "Demo link 1",
      repo: "Repo link 1"
    },
    {
      image: "path/to/image2.jpg",
      photo: "path/to/photo2.jpg",
      job: "Designer",
      autor: "Author 2",
      name: "Project 2",
      slogan: "Slogan 2",
      desc: "Description 2",
      technologies: "Tech 2",
      demo: "Demo link 2",
      repo: "Repo link 2"
    }
    // Puedes agregar más objetos de datos según sea necesario
  ];
  return (
    <>
      <main className="main">
        {cardsData.map((cardData, index) => (
            <Card key={index} formData={cardData} />
          ))}

      </main>
      <Link to="/main">Crea tu propia invitación de boda</Link>
  
    </>
   
  );
};

export default LandingPage;
