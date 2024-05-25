

import logoSponsor from '../images/logo-wedding.png';

function Header() {
  return (
    <header className="header">
          <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
       
            <h1 className="header__title">Ada_Moon_Wedding</h1>
          </a>
          <img className="logoSponsor" src={logoSponsor} alt="Logo"/>
    </header>
  )
}

export default Header