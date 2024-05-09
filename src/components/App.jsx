import '../styles/App.scss';
import companyLogo from '../images/laptop-code-solid.svg';
import logoSponsor from '../images/adalab.png';
import {useState} from 'react';

function App() {
  const [form, setForm] = useState({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});
  const handleInputChange = (event) =>{
    const id = event.target.id;
    const value = event.target.value;

    //Función que sustituye a todos los if. Llamamos a la función setForm porque es la que renderiza el valor recogido de los input, por eso tiene paréntesis, dentro de paréntesis metemos el objeto entre llaves, que en este caso es form, los ... lo que hacen es copiar en lugar de reescribir. Le indicamos la propiedad que queremos cambiar, que es lo que está entre corchetes, en este caso es id, porque los id coinciden con los nombres de las propiedades, y se le pone tras los : el valor a introducir, que lo tenemos recodigo en la variable value. 
    setForm({...form, [id]:value});

  
 /*    if(id === "name"){
      setForm({...form, name: value})
    }else if(id === "slogan"){
      setForm({...form, slogan: value})
    }else if(id === "technologies"){
      setForm({...form, technologies: value})
    }else if(id === "repo"){
      setForm({...form, repo: value})
    }else if(id === "demo"){
      setForm({...form, demo: value})
    }else if(id === "desc"){
      setForm({...form, desc: value})
    }else if(id === "autor"){
      setForm({...form, autor: value})
    }else if(id === "job"){
      setForm({...form, job: value})
    } */
  };

  return (
   
      <div className="container">


        <header className="header">
          <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
            <img className="header__companyLogo" src={companyLogo} alt="Logo proyectos molones"/>
            <h1 className="header__title">Proyectos molones</h1>
          </a>
          <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
        </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <a className="button--link" href="./">Ver proyectos</a>
        </section>

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">{form.job || "Full stack Developer"}</p>
              <h3 className="card__name">{form.autor || "Emmelie Bjôrklund"}</h3>
            </div>
        
            <div className="card__project">            
              <h3 className="card__name">{form.name || "Elegant Workspace"}</h3>
              <p className="card__slogan">{form.slogan || "Diseños Exclusivos"}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{form.desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"} </p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{form.technologies || "React JS - HTML - CSS"}</p>
            
                <a className="icon icon__www" href="#" title="Haz click para ver el proyecto online">{form.demo || "Web link"}</a>
                <a className="icon icon__github" href="#" title="Haz click para ver el código del proyecto">{form.repo || "GitHub link"}</a>
              </div>
            </div>
          </article>
        </section>
        <form className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onChange={handleInputChange}/>
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onChange={handleInputChange}/>
            <div className="addForm__2col">
              <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio" onChange={handleInputChange}/>
              <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo" onChange={handleInputChange}/>
            </div>         
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías" onChange={handleInputChange}/>
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onChange={handleInputChange}></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onChange={handleInputChange}/>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo" onChange={handleInputChange}/>
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label htmlFor="image" className="button">Subir foto del proyecto</label>
            <input className="addForm__hidden" type="file" name="image" id="image"/>
            <label htmlFor="photo" className="button">Subir foto de la autora</label>
            <input className="addForm__hidden" type="file" name="photo" id="photo"/>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>
          
        </form>
      </main>

      <footer className="footer">
        <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
      </footer>

     </div>
   
  )
}

export default App
