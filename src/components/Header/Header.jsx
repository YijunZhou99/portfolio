import React, { useState } from "react";
import "./Header.css";
import LOGO from "../../assets/img/logo.png";

function Header(){
  const [theme, setTheme] = useState("light");
  // const [lang, setLang] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
      { href: '#home', iconClass: 'uil uil-estate nav__icon', i18nKey: 'home', label: 'Home' },
      { href: '#about', iconClass: 'uil uil-user nav__icon', i18nKey: 'about', label: 'About' },
      { href: '#skills', iconClass: 'uil uil-file-alt nav__icon', i18nKey: 'skills', label: 'Skills' },
      // { href: '#portfolio', iconClass: 'uißl uil-scenery nav__icon', i18nKey: 'portfolio', label: 'Portfolio' },
      { href: '#contact', iconClass: 'uil uil-message nav__icon', i18nKey: 'contact', label: 'Contact me' }
      // ,{ href: '#resume', iconClass: 'uil uil-file-download-alt nav__icon', i18nKey: 'resume', label: 'Resume' }
    ]
  
  const handleTheme = (e) => {
    e.preventDefault();
    if (theme === "light") {
      setTheme("dark");
      // change the icon to sun
      e.target.classList.remove("uil-moon");
      e.target.classList.add("uil-sun");

      // change the theme to dark
      document.body.classList.add("dark-theme");
    } else {
      setTheme("light");
      // change the icon to moon
      e.target.classList.remove("uil-sun");
      e.target.classList.add("uil-moon");

      // change the theme to light
      document.body.classList.remove("dark-theme");
    }
    
  }

    const handleItemClick = (e) => {
      setShowMenu(false);
    }

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={LOGO} alt="" style = {{width: "2em", height: "2em", verticalAlign: "middle", marginRight: "0.5em"}}/>
           Yijun Zhou
        </a>

        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"} id="nav-menu">
          <ul className="nav__list grid">
            {navItems.map((item, index) => (
              <li className="nav__item" key={index} onClick={handleItemClick}>
                <a href={item.href} className="nav__link">
                  <i className={item.iconClass}></i>
                  <p i18n={item.i18nKey}>{item.label}</p>
                </a>
              </li>
            ))}
            
            {/* for translation */}
            {/* <li className="nav__item">
              <div className="nav__link" id="translate" value="en">
                <svg className="icon nav__icon-svg" aria-hidden="true">
                  <use xlinkHref="#icon-translate"></use>
                </svg>
                <a className="=nav__link" id="nav__translate">Translate</a>
              </div>
            </li> */}

          </ul>
          <i className="uil uil-times nav__close" id="nav-close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"
            onClick={(e) => handleTheme(e) }
          ></i>
          <div className="nav__toggle" id="nav-toggle"
            onClick={() => setShowMenu(!showMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>        

      </nav>
    </header>
  );
}

export default Header;