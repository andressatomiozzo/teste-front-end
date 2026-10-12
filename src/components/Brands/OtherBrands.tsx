import { Link } from "react-router-dom";
import LogoIcon from "../../assets/Icons/Logo.svg?react";
import style from "./OtherBrands.module.scss"

const OtherBrands = () => {
  return (
    <section>
      <h2 className="title">Navegue por marcas</h2>
      <nav aria-label="Marcas parceiras">
        <ul className={style.container}>
          <li><Link to="/" aria-label="econverse" className={style.logo}><LogoIcon/></Link></li>
          <li><Link to="/" aria-label="econverse" className={style.logo}><LogoIcon/></Link></li>
          <li><Link to="/" aria-label="econverse" className={style.logo}><LogoIcon/></Link></li>
          <li><Link to="/" aria-label="econverse" className={style.logo}><LogoIcon/></Link></li>
          <li><Link to="/" aria-label="econverse" className={style.logo}><LogoIcon/></Link></li>
        </ul>
      </nav>
    </section>
  );
};

export default OtherBrands;
