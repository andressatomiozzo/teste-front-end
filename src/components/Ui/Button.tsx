import React from "react";
import style from "./Button.module.scss"

type PropsButton = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ children, ...props }: PropsButton) => {
  return <button {...props} className={style.button}>{children}</button>;
};

export default Button;
