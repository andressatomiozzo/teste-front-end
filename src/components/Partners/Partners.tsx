import style from "./Partner.module.scss"
import PartnersBlock from "./PartnersBlock";

import partnerImg from "../../assets/img/partnerImage.png"


const Partners = () => {
  return (
    <section className={style.container}>
      <h1 className="visually-hidden">Nossos Parceiros</h1>
      <PartnersBlock
        bgimage={partnerImg}
        partnerName="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
      />
      <PartnersBlock
        bgimage={partnerImg}
        partnerName="Parceiros"
        description="Lorem ipsum dolor sit amet, consectetur"
      />
    </section>
  );
};

export default Partners;
