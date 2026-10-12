import { useProducts } from "../../context/ProductsContext";
import style from "./RelatedProducts.module.scss";

const RelatedProducts = () => {
  const { data } = useProducts();
  console.log(data)
  return (
    <section>
      <h2 className={`title ${style.title}`}>Produtos relacionados</h2>
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
    </section>
  );
};

export default RelatedProducts;
