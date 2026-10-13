import { Link } from "react-router-dom";
import style from "./RelatedProducts.module.scss";
import { useProducts } from "../../context/ProductsContext";
import CarouselIcon from "../Carousel/CarouselIcon";
import useCarrossel from "../../Hooks/useCarrossel";

import NextArrowIcon from "../../assets/icons/nextArrow.svg?react"
import PrevArrowIcon from "../../assets/icons/prevArrow.svg?react"

const RelatedProducts = ({ all }: { all: boolean }) => {
  const { data } = useProducts();
  const { indexAtual, handleClick } = useCarrossel(data?.products);


  return (
    <section>
      <h2 className={`title ${style.title}`}>Produtos relacionados</h2>
      {all ? (
        <nav aria-label="Categorias de produtos relacionados">
          {/* prettier-ignore */}
          <ul className={style.relatedCategories}>
          <li className={style.active}><button>Celular</button></li>
          <li><button>Acessórios</button></li>
          <li><button>Tablets</button></li>
          <li><button>Notebooks</button></li>
          <li><button>TVS</button></li>
          <li><button>Ver todos</button></li>
        </ul>
        </nav>
      ) : (
        <Link to="/" className={style.seeMore}>Ver Todos</Link>
      )}
      <div className={style.carouselContainer} > 
        <button onClick={() => handleClick(indexAtual - 1)}><PrevArrowIcon/></button>
        <ul className={style.viewport}>
          {data?.products
            ? data.products.filter((_, i) => i >= indexAtual && i < indexAtual + 4).map((product, i) => (
                <CarouselIcon
                  key={i}
                  src={product.photo}
                  alt={product.descriptionShort}
                  productName={product.productName}
                  price={product.price}
                  index={i}
                />
              ))
            : null}
        </ul>
        <button onClick={() => handleClick(indexAtual + 1)}><NextArrowIcon/></button>
      </div>
    </section>
  );
};

export default RelatedProducts;
