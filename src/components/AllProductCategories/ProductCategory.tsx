import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import style from "./ProductCategory.module.scss";

type IProductCategory = React.ComponentProps<"li"> & {
  url: string;
  icon: ReactNode;
  category: string;
};

const ProductCategory = ({ url, icon, category, ...props }: IProductCategory) => {
  return (
    <li className={style.container} {...props}>
      <Link to={url} className={style.content}>
        <div>{icon}</div>
        <span>{category}</span>
      </Link>
    </li>
  );
};

export default ProductCategory;
