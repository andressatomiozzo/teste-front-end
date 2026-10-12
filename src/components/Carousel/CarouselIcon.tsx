import styles from "./CarouselIcon.module.scss";

type ICarrouselIcon = {
  src: string;
  alt: string;
  productName: string;
  price: number;
};

const CarouselIcon = ({ src, alt, productName, price }: ICarrouselIcon) => {
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
      <button className={styles.buyBtn}>Comprar</button>
    </li>
  );
};

export default CarouselIcon;
