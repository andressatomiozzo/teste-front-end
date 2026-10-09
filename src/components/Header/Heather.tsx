import SiteFeatures from "./SiteFeatures";
import style from "./Heather.module.scss"

import CheckIcon from "../../assets/Icons/ShieldCheck.svg?react";
import TruckIcon from "../../assets/Icons/Truck.svg?react";
import CreditCardIcon from "../../assets/Icons/CreditCard.svg?react";

const Heather = () => {
  return (
    <header>
      <ul className={style.topBar}>
        <SiteFeatures icon={<CheckIcon />} textBefore="Compra " textHighlighted="100% segura" />
        <SiteFeatures icon={<TruckIcon />}  textHighlighted="Frete Grátis " textAfter="acima de R$ 200"/>
        <SiteFeatures icon={<CreditCardIcon />} textBefore="Parcele " textHighlighted="suas compras" />
      </ul>
      Header
    </header>
  );
};

export default Heather;
