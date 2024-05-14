import Form from './Form';
import Preview from './Preview';
import {useState} from 'react';
import GetAvatar from "./GetAvatar";

function Page() {

  const [data, setData] = useState({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});
  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  // const changeForm. Debe recibir como parametro id y value del input para que dentro se haga el setForm. Se ejecuta en Form, cuando ocurra el evento en los inputs. Dentro de handleInputChange se ejecuta changeForm

  const changeForm = (id, value) =>{
    

    //Función que sustituye a todos los if. Llamamos a la función setForm porque es la que renderiza el valor recogido de los input, por eso tiene paréntesis, dentro de paréntesis metemos el objeto entre llaves, que en este caso es form, los ... lo que hacen es copiar en lugar de reescribir. Le indicamos la propiedad que queremos cambiar, que es lo que está entre corchetes, en este caso es id, porque los id coinciden con los nombres de las propiedades, y se le pone tras los : el valor a introducir, que lo tenemos recodigo en la variable value. 
    setData({...data, [id]:value});

  
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
    <main className="main">
    <Preview formData={data} />
    <Form form={changeForm}/>
    <GetAvatar avatar={avatar} updateAvatar={updateAvatar}/>
  </main>
  )
}

export default Page