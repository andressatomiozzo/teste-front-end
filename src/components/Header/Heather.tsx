import React from "react";
import { Link } from "react-router-dom";
import SiteFeatures from "./SiteFeatures";
import style from "./Heather.module.scss";

import CheckIcon from "../../assets/Icons/ShieldCheck.svg?react";
import TruckIcon from "../../assets/Icons/Truck.svg?react";
import CreditCardIcon from "../../assets/Icons/CreditCard.svg?react";
import LogoIcon from "../../assets/Icons/Logo.svg?react";
import SearchIcon from "../../assets/Icons/MagnifyingGlass.svg?react";
import TrackingIcon from "../../assets/Icons/Tracking.svg?react";
import FavIcon from "../../assets/Icons/Heart.svg?react";
import UserIcon from "../../assets/Icons/UserCircle.svg?react";
import ShoppingIcon from "../../assets/Icons/ShoppingCart.svg?react";

const Heather = () => {
  const [inputValue, setInputValue] = React.useState<string>("");

  return (
    <header>
      <ul className={style.topBar}>
        <SiteFeatures icon={<CheckIcon />} textBefore="Compra " textHighlighted="100% segura" />
        <SiteFeatures icon={<TruckIcon />} textHighlighted="Frete Grátis " textAfter="acima de R$ 200" />
        <SiteFeatures icon={<CreditCardIcon />} textBefore="Parcele " textHighlighted="suas compras" />
      </ul>
      <div className={style.mainBar}>
        <LogoIcon />
        <form className={style.input}>
          <label htmlFor="search" className="visually-hidden">
            Buscar produtos
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="O que você está buscando?"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
          <button>
            <SearchIcon />
          </button>
        </form>
        {/* prettier-ignore */}
        <nav>
          <ul className={style.mainBarIcons}>
            <li><Link to="/"><TrackingIcon /></Link></li>
            <li><Link to="/"><FavIcon /></Link></li>
            <li><Link to="/"><UserIcon /></Link></li>
            <li><Link to="/"><ShoppingIcon /></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Heather;
