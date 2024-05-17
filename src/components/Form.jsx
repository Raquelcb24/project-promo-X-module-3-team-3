import Button from "./Button";


function Form({form, updateAvatar, formData}) {
  
    const handleInputChange =(event)=>{
      const id = event.target.id;
      const value = event.target.value;
      form(id, value);
    }


  return (
    <form className="addForm">
      <h2 className="title">¡Te invitamos a nuestra boda!</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Te contamos sobre el encuentro</legend>
        <input className="addForm__input" type="text" value={formData.name} name="name" id="name" placeholder="Nombre de los invitados" onChange={handleInputChange}/>
        <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Fecha del enlace" value={formData.slogan} onChange={handleInputChange}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Comparte la url de la ubicación del evento" onChange={handleInputChange}/> {/* url de lista de regalo, google maps */}
          <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Indica la url lista de regalos" onChange={handleInputChange}/>
        </div>         
        <input className="addForm__input" type="text" value={formData.technologies} name="technologies" id="technologies" placeholder="Escribe aquí la ubicación." onChange={handleInputChange}/> {/* podría ser un select de si necesitas bus o no */}
        <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Dedica unas palabras a tus invitados" value={formData.desc} rows="5" onChange={handleInputChange}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el enlace</legend>
        <input className="addForm__input" type="text" value={formData.autor} name="autor" id="autor" placeholder="Vuestros nombres" onChange={handleInputChange}/>
        <input className="addForm__input" type="text" value={formData.job} name="job" id="job" placeholder="Una frase que os represente. Ej: ¡Hasta el infinito y más alla!" onChange={handleInputChange}/>
      </fieldset>

      <fieldset className="addForm__group--upload">
        <Button  labelText="Subir foto del proyecto"   id="image"updateAvatar={updateAvatar}/>
        <Button  labelText="Subir foto de la autora"   id="photo" updateAvatar={updateAvatar}/>
        <button className="button--large">Guardar proyecto</button>
      </fieldset>
      
    </form>
  )
}

export default Form