import style from "./PageSelector.module.scss";
import Field from "../Field/Field";
import Button from "../Button/Button";

export default function PageSelector({
  pages
}: Readonly<{
  pages: string[];
}>) {
  return (
    <div className={style.main}>
      <Field>All pages</Field>
      <div className={style.seperator}>
        <hr />
      </div>
      <ul className={style.pages}>
        {pages.map(page => (
          <li key={page}>
            <Field>{page}</Field>
          </li>
        ))}
      </ul>
      <div className={style.seperator}>
        <hr />
      </div>
      <div className={style.button}>
        <Button>Done</Button>
      </div>
    </div>
  );
};