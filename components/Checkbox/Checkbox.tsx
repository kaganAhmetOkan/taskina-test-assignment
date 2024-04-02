"use client";
import style from "./Checkbox.module.scss";
import Image from "next/image";
import { useState, ButtonHTMLAttributes } from "react";

export default function Checkbox({
  defaultChecked = false,
  ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  const [checked, setChecked] = useState(defaultChecked);

  function toggleChecked() {
    setChecked(!checked);
  };

  const checkSrc = checked ? "/icons/check-ff.svg" : "/icons/check-87.svg";
  const checkAlt = "Check";
  const checkSize = 17;

  return (
    <button
      className={style.main}
      type="button"
      data-checked={checked}
      onClick={toggleChecked}
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