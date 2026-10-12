import { Link } from "react-router-dom";
import style from "./Footer.module.scss";

import LogoIcon from "../../assets/Icons/Logo.svg?react";

import InstagramIcon from "../../assets/Icons/Instagram.svg?react";
import FacebookIcon from "../../assets/Icons/Facebook.svg?react";
import LinkedinIcon from "../../assets/Icons/Linkedin.svg?react";

const Footer = () => {
  return (
    <footer className={style.container}>
      <div className={style.content}>
        <div className={style.companyInfo}>
          <span className={style.logo} aria-label="Econverse Logo">
            <LogoIcon />
          </span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={style.socialIcons} aria-label="Redes Sociais">
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <h2 className="visually-hidden">Mais links sobre a empresa</h2>
        <nav className={style.links} aria-label="Navegação Institucional">
          <div className={style.linkColumn}>
            <h3>Institucional</h3>
            <ul>
              <li>
                <Link to="/">Sobre nós</Link>
              </li>
              <li>
                <Link to="/">Movimento</Link>
              </li>
              <li>
                <Link to="/">Trabalhe conosco</Link>
              </li>
            </ul>
          </div>

          <div className={style.linkColumn}>
            <h3>Ajuda</h3>
            <ul>
              <li>
                <Link to="/">Suporte</Link>
              </li>
              <li>
                <Link to="/">Fale Conosco</Link>
              </li>
              <li>
                <Link to="/">Perguntas Frequentes</Link>
              </li>
            </ul>
          </div>

          <div className={style.linkColumn}>
            <h3>Termos</h3>
            <ul>
              <li>
                <Link to="/">Termos e Condições</Link>
              </li>
              <li>
                <Link to="/">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/">Troca e Devolução</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className={style.bottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
