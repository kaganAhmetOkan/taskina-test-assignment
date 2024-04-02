import style from "./Field.module.scss";
import Checkbox from "../Checkbox/Checkbox";

export default function Field({
  children
}: Readonly<{
  children: string;
}>) {
  return (
    <div className={style.main}>
      {children}
      <Checkbox />
    </div>
  );
};