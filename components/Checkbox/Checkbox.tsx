"use client";
import style from "./Checkbox.module.scss";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked: boolean;
  handleClick: () => void;
};

export default function Checkbox({
  checked,
  handleClick,
  ...props
}: Readonly<CustomButtonProps>) {
  const checkSrc = checked ? "/icons/check-ff.svg" : "/icons/check-87.svg";
  const checkAlt = "Check";
  const checkSize = 17;

  return (
    <button
      className={style.main}
      type="button"
      data-checked={checked}
      onClick={handleClick}
      {...props}
    >
      <Image
        src={checkSrc}
        alt={checkAlt}
        width={checkSize}
        height={checkSize}
      />
    </button>
  );
};