import style from "./AllProductCategories.module.scss";
import ProductCategory from "./ProductCategory";

import TecnologyIcon from "../../assets/icons/productSections/technology.svg?react";
import SupermarketIcon from "../../assets/icons/productSections/supermarket.svg?react";
import DrinkIcon from "../../assets/icons/productSections/whiskey.svg?react";
import ToolsIcon from "../../assets/icons/productSections/tools.svg?react";
import HealthIcon from "../../assets/icons/productSections/healthCare.svg?react";
import SportsIcon from "../../assets/icons/productSections/run.svg?react";
import ModaIcon from "../../assets/icons/productSections/moda.svg?react";

const AllProductCategories = () => {
  return (
    <section>
      <nav aria-label="compre por categoria">
        <ul className={style.content}>
          <ProductCategory
            url="produtos/tecnologia"
            icon={<TecnologyIcon />}
            category="Tecnologia"
            className={style.active}
          />
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
