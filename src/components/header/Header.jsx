import { memo, useEffect, useState } from "react";
import styles from "./Header.module.scss";

function HeaderInitial({ allFilmsArr }) {
  const [allWordsForFrase, setAllWordsForFrase] = useState(allFilmsArr);

  useEffect(() => {
    setAllWordsForFrase(allFilmsArr);
  }, [allFilmsArr]);

  return (
    <div className={styles["header"]}>
      <p className={styles["header-title"]}>Ключевая фраза</p>
      <div
        className={`${styles["core-frase"]} ${
          Object.keys(allWordsForFrase).length == 0 ? styles["margin-top"] : ""
        }`}
      >
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[0].status === true
              ? allWordsForFrase[0].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[1].status === true
              ? allWordsForFrase[1].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[2].status === true
              ? allWordsForFrase[2].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[3].status === true
              ? allWordsForFrase[3].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[4].status === true
              ? allWordsForFrase[4].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[5].status === true
              ? allWordsForFrase[5].secretWord
              : ""}
          </p>
        </div>
        <div className={styles["part-of-frase"]}>
          <p className={styles["word"]}>
            {allWordsForFrase[6].status === true
              ? allWordsForFrase[6].secretWord
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export const Header = memo(HeaderInitial);
