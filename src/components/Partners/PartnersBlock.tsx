import style from "./PartnersBlock.module.scss";

type IPartnersBlock = {
  bgimage: string;
  partnerName: string;
  description: string;
};

const PartnersBlock = ({ bgimage, partnerName, description }: IPartnersBlock) => {
  return (
    <article style={{ backgroundImage: `url(${bgimage})` }} className={style.container}>
      <h3 className={style.title}>{partnerName}</h3>
      <span className={style.description}>{description}</span>
      <button className={style.button}>Confira</button>
    </article>
  );
};

export default PartnersBlock;
