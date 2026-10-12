import style from "./Partner.module.scss"
import PartnersBlock from "./PartnersBlock";

import partnerImg from "../../assets/img/partnerImage.png"


const Partners = () => {
  return (
    <section className={style.container}>
      <h2 className="visually-hidden">Nossos Parceiros</h2>
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
