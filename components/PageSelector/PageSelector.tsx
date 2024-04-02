"use client";
import style from "./PageSelector.module.scss";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { useState } from "react";
import { compareStringArrays } from "@/lib/compareStringArrays";

export default function PageSelector({
  pages
}: Readonly<{
  pages: string[];
}>) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);

  function toggleSelectAll() {
    if (selectAll) {
      setSelectAll(false);
      setSelectedPages([]);
      return;
    };

    setSelectAll(true);
    setSelectedPages(pages);
  };

  function toggleSelectedPage(page: string) {
    if (selectAll) setSelectAll(false);

    const index = selectedPages.indexOf(page);

    if (index !== -1) {
      setSelectedPages(array => {
        const newArray = array.toSpliced(index, 1);

        if (compareStringArrays(newArray, pages)) setSelectAll(true);

        return newArray;
      });
    } else {
      setSelectedPages(array => {
        const newArray = array.toSpliced(0, 0, page);
        if (compareStringArrays(newArray, pages)) setSelectAll(true);
        return newArray;
      });
    };
  };

  return (
    <div className={style.main}>
      <Field checked={selectAll} handleClick={toggleSelectAll}>All pages</Field>
      <div className={style.seperator}>
        <hr />
      </div>
      <ul className={style.pages}>
        {pages.map(page => (
          <li key={page}>
            <Field
              checked={selectedPages.includes(page)}
              handleClick={() => toggleSelectedPage(page)}
            >{page}</Field>
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