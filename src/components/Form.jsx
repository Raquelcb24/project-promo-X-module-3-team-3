import Button from "./Button";


function Form({form}) {
  
    const handleInputChange =(event)=>{
      const id = event.target.id;
      const value = event.target.value;
      form(id, value);
    }


  return (
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
        <Button htmlFor= "image" className="button" labelText="Subir foto del proyecto" classNameInput="addForm__hidden" type="file" name="image" id="image"/>
        <Button htmlFor= "photo" className="button" labelText="Subir foto de la autora" classNameInput="addForm__hidden" type="file" name="photo" id="photo"/>
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
      
    </form>
  )
}

export default Form