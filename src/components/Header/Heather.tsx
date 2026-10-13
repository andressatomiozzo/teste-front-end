import React from "react";
import { Link } from "react-router-dom";
import SiteFeatures from "./SiteFeatures";
import style from "./Heather.module.scss";
import useMedia from "../../Hooks/useMedia";

import CheckIcon from "../../assets/icons/header/shieldCheck.svg?react";
import TruckIcon from "../../assets/icons/header/truck.svg?react";
import CreditCardIcon from "../../assets/icons/header/CreditCard.svg?react";
import LogoIcon from "../../assets/icons/logo.svg?react";
import SearchIcon from "../../assets/icons/header/search.svg?react";
import TrackingIcon from "../../assets/icons/header/tracking.svg?react";
import FavIcon from "../../assets/icons/header/heart.svg?react";
import UserIcon from "../../assets/icons/header/userCircle.svg?react";
import ShoppingIcon from "../../assets/icons/header/shoppingCart.svg?react";
import CrownIcon from "../../assets/icons/header/crownSimple.svg?react";

const Heather = () => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const media765 = useMedia("(max-width: 765px)");

  return (
    <header>
      <ul className={style.topBar}>
        <SiteFeatures icon={<CheckIcon />} textBefore="Compra " textHighlighted="100% segura" />
        <SiteFeatures icon={<TruckIcon />} textHighlighted="Frete Grátis " textAfter="acima de R$ 200" />
        <SiteFeatures icon={<CreditCardIcon />} textBefore="Parcele " textHighlighted="suas compras" />
      </ul>
      <div className={style.mainBar}>
        <Link to="/" className={style.logo}>
          <LogoIcon />
        </Link>
        {media765 ? (
          <button className={style.formButton} aria-label="Buscar produtos">
            <SearchIcon />
          </button>
        ) : (
          <form className={style.form}>
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
            <button aria-label="Buscar produtos" onClick={(e) => e.preventDefault()}>
              <SearchIcon />
            </button>
          </form>
        )}
        {/* prettier-ignore */}
        <nav aria-label="Atalhos da conta">
          <ul className={style.mainBarIcons}>
            <li><Link to="rastreio" aria-label="Rastreio"><TrackingIcon /></Link></li>
            <li><Link to="favoritos" aria-label="Itens favoritos"><FavIcon /></Link></li>
            <li><Link to="usuario" aria-label="Minha conta"><UserIcon /></Link></li>
            <li><Link to="carrinho" aria-label="Rastreio"><ShoppingIcon /></Link></li>
          </ul>
        </nav>
      </div>
      <nav aria-label="Principais categorias de produtos">
        {/* prettier-ignore */}
        <ul className={style.sectionsNavBar}>
          <li><Link to="produtos/todasCategorias">Todas categorias</Link></li>
          <li><Link to="produtos/supermercado">Supermercado</Link></li>
          <li><Link to="produtos/livros">Livros</Link></li>
          <li><Link to="produtos/moda">Moda</Link></li>
          <li><Link to="produtos/lancamentos">Lançamentos</Link></li>
          <li><Link to="/" className={style.active}>Ofertas do dia</Link></li>
          <li><Link to="assinatura"><CrownIcon />Assinatura</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Heather;
