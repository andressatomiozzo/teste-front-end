import { Link } from "react-router-dom";
import style from "./OtherBrands.module.scss"
import LogoIcon from "../../assets/icons/logo.svg?react";

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
