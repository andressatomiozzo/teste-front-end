import React from "react";
import { Link } from "react-router-dom";
import style from "./ProductModal.module.scss";
import { useProducts } from "../../context/ProductsContext";

type IProductModal = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  index: number | null;
};

const ProductModal = ({ setModal, index }: IProductModal) => {
  const [quantity, setQuantity] = React.useState<number>(1);

  const modalRef = React.useRef<HTMLDivElement>(null);
  const { data } = useProducts();

  let product;
  if (data && data?.products && index) {
    product = data.products[index];
  }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideMenu = modalRef.current?.contains(target);

      if (!clickedInsideMenu) {
        setModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.container}>
      <div ref={modalRef} className={style.content}>
        <img src={product!.photo} alt={product!.descriptionShort} />
        <div className={style.information}>
          <h1 className={style.title}>{product!.productName}</h1>
          <p className={style.price}>
            {(product!.price / 100).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <span className={style.description}>{product!.descriptionShort}</span>
          <Link to="/" className={style.link}>
            Veja mais detalhes do produto &gt;
          </Link>
          <div className={style.btns}>
            <div className={style.quantityContainerBtn}>
              {quantity === 1 ? (
                <button disabled className={style.disabledBtn}>
                  -
                </button>
              ) : (
                <button onClick={() => setQuantity((prev) => prev - 1)} className={style.quantityBtn}>
                  -
                </button>
              )}

              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)} className={style.quantityBtn}>
                +
              </button>
            </div>
            <button className={style.buyBtn}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
