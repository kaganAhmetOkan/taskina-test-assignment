"use client";
import style from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={style.main} {...props}>
      {children}
    </button>
  );
};