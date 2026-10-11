import style from "./AllProductCategories.module.scss"
import ProductCategory from "./ProductCategory";


import TecnologyIcon from "../../assets/Icons/Technology.svg?react";
import SupermarketIcon from "../../assets/Icons/Supermarket.svg?react";
import DrinkIcon from "../../assets/Icons/Whiskey.svg?react";
import ToolsIcon from "../../assets/Icons/Tools.svg?react";
import HealthIcon from "../../assets/Icons/HealthCare.svg?react";
import SportsIcon from "../../assets/Icons/Run.svg?react";
import ModaIcon from "../../assets/Icons/Moda.svg?react";

const AllProductCategories = () => {
  return (
    <section>
      <nav aria-label="compre por categoria">
        <ul className={style.content}>
          <ProductCategory url="produtos/tecnologia" icon={<TecnologyIcon />} category="Tecnologia" className={style.active}/>
          <ProductCategory url="produtos/supermercado" icon={<SupermarketIcon />} category="Supermercado" />
          <ProductCategory url="produtos/bebidas" icon={<DrinkIcon />} category="Bebidas" />
          <ProductCategory url="produtos/ferramentas" icon={<ToolsIcon />} category="Ferramentas" />
          <ProductCategory url="produtos/saude" icon={<HealthIcon />} category="Saúde" />
          <ProductCategory url="produtos/esportes-e-fitness" icon={<SportsIcon />} category="Esportes e Fitness" />
          <ProductCategory url="produtos/moda" icon={<ModaIcon />} category="Moda" />
        </ul>
      </nav>
    </section>
  );
};

export default AllProductCategories;
