import Card from './Card';

function Preview({formData}) {

  return (
    <div>
    <section className="hero">
      <h2 className="title">Proyectos molones</h2>
      <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
      <a className="button--link" href="./">Ver proyectos</a>
    </section>
        <Card formData={formData} />
    </div>
  )
}

export default Preview