import React from "react";
import { createPortal } from 'react-dom';

import styles from "./CarouselIcon.module.scss";
import ProductModal from "../Modal/ProductModal";

type ICarrouselIcon = {
  src: string;
  alt: string;
  productName: string;
  price: number;
  index: number
};

const CarouselIcon = ({ src, alt, productName, price, index }: ICarrouselIcon) => {
  const [modal, setModal] = React.useState<boolean>(false);
  const [produtoIndex, setProdutoIndex] = React.useState<number | null>(null)
  const handleBuyClick = () => {
    setModal(true)
    setProdutoIndex(index)
  }
  return (
    <li className={styles.container}>
      <img src={src} alt={alt} className={styles.img} />
      <h3 className={styles.productName}>{productName}</h3>
      <div className={styles.priceDiv}>
        <span className={styles.priceBefore}>
          {(price / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <strong className={styles.priceNow}>
          {(price * 0.00935).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
        <span className={styles.price2x}>
          ou 2x de
          {(price / 200).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          sem juros
        </span>
        <span className={styles.freeDeliv}>Frete Grátis</span>
      </div>
      <button className={styles.buyBtn} onClick={handleBuyClick}>Comprar</button>
      {modal && createPortal(<ProductModal setModal={setModal} index={produtoIndex}/>, document.getElementById("root")!)}
    </li>
  );
};

export default CarouselIcon;
