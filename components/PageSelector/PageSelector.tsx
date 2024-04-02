"use client";
import style from "./PageSelector.module.scss";
import Field from "../Field/Field";
import Button from "../Button/Button";
import { useState } from "react";
import { compareStringArrays } from "@/lib/compareStringArrays";

export default function PageSelector({
  pages,
  selectAllDisables = false,
}: Readonly<{
  pages: string[];
  selectAllDisables?: boolean;
}>) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  // toggle selectAll
  function toggleSelectAll() {
    // unselect all if selected
    if (selectAll) {
      setSelectAll(false);
      setSelectedPages([]);

      if (selectAllDisables) setDisabled(false);

      return;
    };

    // select all if unselected
    setSelectAll(true);
    setSelectedPages(pages);

    if (selectAllDisables) setDisabled(true);
  };

  // toggle selectedPages
  function toggleSelectedPages(page: string) {
    // unselect selectAll box if already selected
    if (selectAll) setSelectAll(false);

    // toggle given page
    const index = selectedPages.indexOf(page);

    if (index !== -1) {
      // remove page if already exists
      setSelectedPages(array => array.toSpliced(index, 1));
    } else {
      // add page if does not exist
      setSelectedPages(array => {
        const newArray = array.toSpliced(0, 0, page);

        // check selectAll if all pages are selected
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
              handleClick={() => toggleSelectedPages(page)}
              disabled={disabled}
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