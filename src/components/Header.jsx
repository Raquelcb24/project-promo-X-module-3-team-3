

import logoSponsor from '/images/logo-wedding.png';

function Header() {
  return (
    <header className="header">
          <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
       
            <a className="header__title" href="/">Ada_Moon_Wedding</a>
          </a>
          <a href="/"><img className="logoSponsor" src={logoSponsor} alt="Logo"/></a>
    </header>
  )
}

export default Header