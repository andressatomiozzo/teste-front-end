import style from "./HeroBanner.module.scss"
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section>
      <div className={style.heroWrapper}>
        <div className={style.heroContent}>
          <h1>Venha conhecer nossas promoções</h1>
          <p>
            <strong>50% Off</strong> nos produtos
          </p>
          <Link to="/" className={style.button}>Ver produto</Link>
        </div>
      </div>
      <nav></nav>
    </section>
  );
};

export default HeroBanner;
