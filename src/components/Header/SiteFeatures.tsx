import type { ReactNode } from "react";
import style from "./SiteFeatures.module.scss"

type ISiteFeatures = {
  icon: ReactNode;
  textBefore?: string;
  textHighlighted: string;
  textAfter?: string;
};

const SiteFeatures = ({ icon, textBefore, textHighlighted, textAfter }: ISiteFeatures) => {
  return (
    <li className={style.liWrapper}>
      {icon}
      <span className={style.text}>
        {textBefore}
        <span className={style.textHighlighted}>{textHighlighted}</span>
        {textAfter}
      </span>
    </li>
  );
};

export default SiteFeatures;
