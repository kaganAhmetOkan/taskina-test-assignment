import style from "./Field.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import { ButtonHTMLAttributes } from "react";

interface CustomFieldProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  checked: boolean;
  handleClick: () => void;
};

export default function Field({
  children,
  checked,
  handleClick,
  ...props
}: Readonly<CustomFieldProps>) {
  return (
    <div className={style.main}>
      {children}
      <Checkbox checked={checked} handleClick={handleClick} {...props} />
    </div>
  );
};