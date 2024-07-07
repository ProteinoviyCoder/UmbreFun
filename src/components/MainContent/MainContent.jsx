import { memo, useEffect, useRef, useState } from "react";
import styles from "./Main.module.scss";

function MainContentInit({ allFilmsArr, setAllFilmsArr }) {
  const [allFilms, setAllFilms] = useState(allFilmsArr);

  const [classChangeFilm, setClassChangeFilm] = useState(false);
  const [activeFilm, setActiveFilm] = useState(allFilms[0]);
  const [isActiveQuestions, setIsActiveQuestions] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(
    activeFilm.questions.question1
  );
  const [answerUser, setAnswerUser] = useState("");
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(false);

  const changeFilm = (elem) => {
    if (elem.name !== activeFilm.name) {
      setClassChangeFilm(true);
      setTimeout(() => {
        setIsActiveQuestions(false);
        setClassChangeFilm(false);
        setActiveFilm(elem);
      }, 400);
    } else {
      return;
    }
  };

  const doTest = () => {};
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  useEffect(() => {
    setActiveQuestion(activeFilm.questions.question1);
  }, [activeFilm]);

  useEffect(() => {
    setAllFilms(allFilmsArr);
    const index = allFilmsArr.findIndex(
      (find) => find.name === activeFilm.name
    );

    setActiveFilm(allFilmsArr[index]);
  }, [allFilmsArr]);

  console.log(activeFilm);

  return (
    <div className={styles["main"]}>
      <div className={styles["hrono"]}>
        {allFilms.map((elem, index) => {
          return (
            <div key={index} className={`${styles["film-of-hrono"]} `}>
              <p
                onClick={() => {
                  changeFilm(elem);
                }}
                className={`${styles["name-film-hrono"]} ${
                  activeFilm.name === elem.name
                    ? styles["name-film-hrono-active"]
                    : ""
                }`}
              >
                {elem.name}
              </p>
            </div>
          );
        })}
      </div>
      <div
        className={`${styles["film"]} ${
          classChangeFilm ? styles["film-change"] : ""
        }`}
      >
        <div
          className={`${styles["film-text"]} ${
            isActiveQuestions ? styles["none"] : ""
          }`}
        >
          <h2 className={styles["name-film"]}>{activeFilm.name}</h2>
          <p>{activeFilm.decs}</p>

          <button
            onClick={() => {
              if (activeFilm.status) {
                return;
              } else {
                setIsActiveQuestions(true);
              }
            }}
            className={`${styles["btn-film-text"]} ${
              activeFilm.status === true ? styles["btn-film-text-aprove"] : ""
            }`}
          >
            {activeFilm.status === false ? "Пройти тест" : "Тест пройден"}
          </button>
        </div>
        <div
          className={`${styles["questions"]} ${
            isActiveQuestions ? "" : styles["none"]
          }`}
        >
          <div
            className={`${styles["question"]} ${
              wrongAnswer ? styles["none"] : ""
            } ${trueAnswer ? styles["none"] : ""}`}
          >
            <button
              onClick={() => {
                setIsActiveQuestions(false);
              }}
              className={styles["question-btn-back"]}
            >
              ⬅
            </button>
            {activeQuestion.question}
          </div>
          <div
            className={`${styles["answers"]} ${
              wrongAnswer ? styles["none"] : ""
            } ${trueAnswer ? styles["none"] : ""}`}
          >
            <div className={styles["answer"]}>
              <input
                ref={inputRef1}
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => {
                  inputRef2.current.checked = false;
                  inputRef3.current.checked = false;
                  inputRef4.current.checked = false;
                  setAnswerUser(e.target.nextElementSibling.textContent);
                }}
              />
              <p>{activeQuestion.answers[0]}</p>
            </div>
            <div className={styles["answer"]}>
              <input
                ref={inputRef2}
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => {
                  inputRef1.current.checked = false;
                  inputRef3.current.checked = false;
                  inputRef4.current.checked = false;
                  setAnswerUser(e.target.nextElementSibling.textContent);
                }}
              />
              <p>{activeQuestion.answers[1]}</p>
            </div>
            <div className={styles["answer"]}>
              <input
                ref={inputRef3}
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => {
                  inputRef1.current.checked = false;
                  inputRef2.current.checked = false;
                  inputRef4.current.checked = false;
                  setAnswerUser(e.target.nextElementSibling.textContent);
                }}
              />
              <p>{activeQuestion.answers[2]}</p>
            </div>
            <div className={styles["answer"]}>
              <input
                ref={inputRef4}
                type="checkbox"
                defaultChecked={false}
                onChange={(e) => {
                  inputRef1.current.checked = false;
                  inputRef2.current.checked = false;
                  inputRef3.current.checked = false;
                  setAnswerUser(e.target.nextElementSibling.textContent);
                }}
              />
              <p>{activeQuestion.answers[3]}</p>
            </div>
          </div>
          <button
            className={`${wrongAnswer ? styles["none"] : ""} ${
              styles["btn-questions"]
            } ${trueAnswer ? styles["none"] : ""}`}
            onClick={() => {
              if (answerUser !== "") {
                inputRef1.current.checked = false;
                inputRef2.current.checked = false;
                inputRef3.current.checked = false;
                inputRef4.current.checked = false;
                if (activeQuestion.trueAnswer === answerUser) {
                  if (activeQuestion === activeFilm.questions.question1) {
                    setActiveQuestion(activeFilm.questions.question2);
                  } else if (
                    activeQuestion === activeFilm.questions.question2
                  ) {
                    setActiveQuestion(activeFilm.questions.question3);
                  } else if (
                    activeQuestion === activeFilm.questions.question3
                  ) {
                    setActiveQuestion(activeFilm.questions.question4);
                  } else if (
                    activeQuestion === activeFilm.questions.question4
                  ) {
                    setTrueAnswer(true);
                    setTimeout(() => {
                      setTrueAnswer(false);
                      setIsActiveQuestions(false);
                      setActiveQuestion(activeFilm.questions.question1);
                      setAnswerUser("");

                      const copyAllFilms = [...allFilms];
                      const myIndex = copyAllFilms.findIndex(
                        (film) => film.name === activeFilm.name
                      );

                      copyAllFilms[myIndex].status = true;
                      setAllFilmsArr(copyAllFilms);

                      localStorage.setItem(
                        "allInfo",
                        JSON.stringify(allFilmsArr)
                      );
                    }, 1200);
                  }
                } else {
                  setWrongAnswer(true);
                  setTimeout(() => {
                    setWrongAnswer(false);
                    setIsActiveQuestions(false);
                    setActiveQuestion(activeFilm.questions.question1);
                    setAnswerUser("");
                  }, 1200);
                }
              }
            }}
          >
            Подтвердить
          </button>
          <h2
            className={`${styles["question-wrong"]} ${
              wrongAnswer ? "" : styles["none"]
            }`}
          >
            Неправильно!
          </h2>
          <h2
            className={`${styles["question-true"]} ${
              trueAnswer ? "" : styles["none"]
            }`}
          >
            Правильно!
          </h2>
        </div>
        <img className={styles["film-img"]} src={activeFilm.imgSrc} alt="#" />
      </div>
    </div>
  );
}

export const MainContent = memo(MainContentInit);
