import '../styles/App.scss';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
        <body className="container">
      {/* <header className="header">
        <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
          <img className="header__companyLogo" src="./src/images/logo.png" alt="Logo proyectos molones"/>
          <h1 className="header__title">Ada_Moon_Wedding</h1>
        </a>
        <img className="logoSponsor" src="./src/images/logo-wedding.jpeg" alt="Logo Adalab"/>
    </header> */}
    <main className="main">
      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>
  
          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <p className="card__job"></p>
            <h3 className="card__name"></h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name"></h3>
            <p className="card__slogan"></p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione </p>
  
            <div className="card__technicalInfo">
              <p className="card__technologies"></p>
          
              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online"></a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto"></a>
            </div>
          </div>
        </article>
      </section>
      <section className="preview">
        <div className="projectImage"></div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>
  
          <div className="card__author">
            <div className="card__authorPhoto">
   
            </div>
            <p className="card__job"></p>
            <h3 className="card__name"></h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name"></h3>
            <p className="card__slogan"></p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione </p>
  
            <div className="card__technicalInfo">
              <p className="card__technologies"></p>
          
              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online"><i className="fa-solid fa-location-dot"></i></a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto"></a>
            </div>
          </div>
        </article>
      </section>
      <section className="preview">
        <div className="projectImage">
      
        </div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>
  
          <div className="card__author">
            <div className="card__authorPhoto">
   
            </div>
            <p className="card__job"></p>
            <h3 className="card__name"></h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name"></h3>
            <p className="card__slogan"></p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione </p>
  
            <div className="card__technicalInfo">
              <p className="card__technologies"></p>
          
              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online"></a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto"></a>
            </div>
          </div>
        </article>
      </section>
      <section className="preview">
        <div className="projectImage">
      
        </div>
        <article className="card">
          <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>
  
          <div className="card__author">
            <div className="card__authorPhoto">
   
            </div>
            <p className="card__job"></p>
            <h3 className="card__name"></h3>
          </div>
      
          <div className="card__project">            
            <h3 className="card__name"></h3>
            <p className="card__slogan"></p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione </p>
  
            <div className="card__technicalInfo">
              <p className="card__technologies"></p>
          
              <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online"></a>
              <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto"></a>
            </div>
          </div>
        </article>
      </section>
    </main>
  {/*   <footer className="footer">
      <img className="logoSponsor" src="./src/images/logo-wedding.jpeg" alt="Logo Adalab"/>
    </footer> */}
</body>
    </>
   
  );
};

export default LandingPage;
