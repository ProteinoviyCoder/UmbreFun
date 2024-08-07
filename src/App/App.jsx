import styles from "./App.module.scss";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/MainContent/MainContent.jsx";

function AppInit() {
  const [allFilmsArr, setAllFilmsArr] = useState([
    {
      name: "Обитель зла",
      decs: `"Обитель Зла" разворачивается в тайной подземной лаборатории
            корпорации "Umbrella", где в результате инцидента с вирусом T-virus
            происходит массовая инфекция. Группа спецагентов проникает в
            комплекс, включая Элис, после чего оказываются запертыми в лабиринте
            лаборатории, полном зловещих мутантов и зомби.`,
      imgSrc: `/UmbreFun/film1.jpg`,
      status: false,
      secretWord: "Любовь ",
      questions: {
        question1: {
          question: `Какое название носит лаборатория, где начинается действие фильма?`,
          answers: [`Umbrella Facility`, `Hive`, `Nexus`, `Red Queen`],
          trueAnswer: "Hive",
        },
        question2: {
          question: `Какое имя у главного персонажа, сыгранного Милой Йовович?`,
          answers: [`Claire`, `Jill`, `Alice`, `Ada`],
          trueAnswer: "Alice",
        },
        question3: {
          question: `Какая система безопасности контролирует лабораторию и является одним из главных антагонистов?`,
          answers: [`Blue King`, `Green Giant`, `Yellow Prince`, `Red Queen`],
          trueAnswer: "Red Queen",
        },
        question4: {
          question: `Что является причиной превращения сотрудников лаборатории в зомби?`,
          answers: [`Вирус G`, `Вирус T`, `Вирус Z`, `Вирус X`],
          trueAnswer: "Вирус T",
        },
      },
    },
    {
      name: "Обитель зла 2: Апокалипсис",
      decs: `"Ракун-сити контролируется влиятельной корпорацией «Амбрелла». 
      После бактериологической катастрофы жители медленно превращаются в зомби, 
      а те немногочисленные граждане, чей разум ещё не до конца изъеден ужасным 
      вирусом, доживают последние дни в атмосфере страха и с желанием скорейшей смерти.`,
      imgSrc: `/UmbreFun/film2.jpg`,
      status: false,
      secretWord: "— это ",
      questions: {
        question1: {
          question: `В каком городе происходят основные события фильма?`,
          answers: [`Раккун-Сити`, `Нью-Йорк`, `Лос-Анджелес`, `Токио`],
          trueAnswer: "Раккун-Сити",
        },
        question2: {
          question: `Как зовут нового персонажа, который является полицейским и помогает Элис?`,
          answers: [
            `Jill Valentine`,
            `Claire Redfield`,
            `Rebecca Chambers`,
            `Ada Wong`,
          ],
          trueAnswer: "Jill Valentine",
        },
        question3: {
          question: `Как называется мутировавшее существо, созданное корпорацией "Umbrella" для уничтожения выживших?`,
          answers: [`Licker`, `Nemesis`, `Tyrant`, `Hunter`],
          trueAnswer: "Nemesis",
        },
        question4: {
          question: `Кто был главным учёным, ответственным за создание вируса в фильме?`,
          answers: [
            `Albert Wesker`,
            `William Birkin`,
            `Charles Ashford`,
            `Brian Irons`,
          ],
          trueAnswer: "Charles Ashford",
        },
      },
    },
    {
      name: "Обитель зла 3",
      decs: `Элис, не раз уже спасавшая мир от смертельных вирусов и неминуемой 
      гибели, вновь взялась за оружие. На этот раз ей предстоит сразиться с 
      корпорацией «Амбрелла», работающей над реализацией зверского антигуманного 
      проекта.`,
      imgSrc: `/UmbreFun/film3.jpg`,
      status: false,
      secretWord: "вечность ",
      questions: {
        question1: {
          question: `Какой основное средство передвижения использует группа выживших в пустыне?`,
          answers: [`Автобусы`, `Вертолеты`, `Мотоциклы`, `Лодки`],
          trueAnswer: "Автобусы",
        },
        question2: {
          question: `Какую способность демонстрирует Элис в начале фильма?`,
          answers: [
            `Лечение ран`,
            `Контроль над погодой`,
            `Телепатию`,
            `Полет`,
          ],
          trueAnswer: "Телепатию",
        },
        question3: {
          question: `Где находится главный лагерь выживших?`,
          answers: [`В Канаде`, `В Нью-Йорке`, `В Лас-Вегасе`, `В Мексике`],
          trueAnswer: "В Лас-Вегасе",
        },
        question4: {
          question: `Какую цель преследует Элис в конце фильма?`,
          answers: [
            `Найти свою семью`,
            `Уничтожить корпорацию "Амбрелла"`,
            `Найти лекарства от вируса`,
            `Найти еду и воду`,
          ],
          trueAnswer: `Уничтожить корпорацию "Амбрелла"`,
        },
      },
    },
    {
      name: "Обитель зла 4: Жизнь после смерти",
      decs: `Элис продолжает свой путь в мире, поражённом вирусной инфекцией, 
      превращающей людей в нежить. Героиня ищет оставшихся в живых, чтобы вывести 
      их в безопасное место. Её смертельная битва с корпорацией Амбрелла выходит 
      на новый уровень`,
      imgSrc: `/UmbreFun/film4.jpg`,
      status: false,
      secretWord: "в ",
      questions: {
        question1: {
          question: `В каком городе начинается действие фильма?`,
          answers: [`Токио`, `Лос-Анджелес`, `Нью-Йорк`, `Москва`],
          trueAnswer: "Токио",
        },
        question2: {
          question: `Какое оружие использует Элис для атаки на штаб-квартиру корпорации "Амбрелла"?`,
          answers: [`Пистолеты`, `Катаны`, `Автоматы`, `Гранатометы`],
          trueAnswer: "Катаны",
        },
        question3: {
          question: `Кто помогает Элис в ее борьбе с корпорацией "Амбрелла"?`,
          answers: [
            `Клэр Редфилд`,
            `Джилл Валентайн`,
            `Леон Кеннеди`,
            `Крис Редфилд`,
          ],
          trueAnswer: "Крис Редфилд",
        },
        question4: {
          question: `Какое сооружение используется выжившими как убежище?`,
          answers: [`Тюрьма`, `Торговый центр`, `Больница`, `Школа`],
          trueAnswer: `Тюрьма`,
        },
      },
    },
    {
      name: "Обитель зла: Возмездие",
      decs: `Смертельный T-вирус, созданный в лабораториях корпорации «Амбрелла», продолжает 
      захватывать Землю, превращая мировое население в легионы пожирающих плоть зомби. Последняя 
      надежда человечества Элис внедряется в самое сердце самой тайной исследовательской базы 
      корпорации и узнает еще больше о собственном таинственном прошлом`,
      imgSrc: `/UmbreFun/film5.jpg`,
      status: false,
      secretWord: "каждом ",
      questions: {
        question1: {
          question: `Где начинается основное действие фильма?`,
          answers: [
            `Москва`,
            `Подземный комплекс "Амбрелла`,
            `Токио`,
            `Подводный комплекс "Амбрелла"`,
          ],
          trueAnswer: `Подводный комплекс "Амбрелла"`,
        },
        question2: {
          question: `Кого Элис встречает в подводном комплексе "Амбрелла"?`,
          answers: [
            `Джилл Валентайн`,
            `Леон Кеннеди`,
            `Клэр Редфилд`,
            `Аду Вонг`,
          ],
          trueAnswer: "Аду Вонг",
        },
        question3: {
          question: `Какая программа контролирует комплекс "Амбрелла"?`,
          answers: [
            `Красная Королева`,
            `Белая Королева`,
            `Синий Король`,
            `Чёрная Королева`,
          ],
          trueAnswer: "Красная Королева",
        },
        question4: {
          question: `Какую важную информацию Элис узнает от Ады Вонг?`,
          answers: [
            `Клэр жива и в безопасности`,
            `Президент США заражен вирусом`,
            `Элис – клон`,
            `Корпорация "Амбрелла" контролирует весь мир`,
          ],
          trueAnswer: `Элис – клон`,
        },
      },
    },
    {
      name: "Обитель зла: Последняя глава",
      decs: `Действия фильма разворачиваются с того момента, на котором закончилась 
      предыдущая часть. После того как Вескер предал Элис в Вашингтоне, конец истории 
      человечества стал еще ближе.`,
      imgSrc: `/UmbreFun/film6.jpg`,
      status: false,
      secretWord: "мгновении ",
      questions: {
        question1: {
          question: `Кто Элис сообщает ей, что у неё есть 48 часов, чтобы спасти человечество?`,
          answers: [
            `Альберт Вескер`,
            `Красная Королева`,
            `Джилл Валентайн`,
            `Клэр Редфилд`,
          ],
          trueAnswer: `Красная Королева`,
        },
        question2: {
          question: `Где находится последняя крепость корпорации "Амбрелла"?`,
          answers: [`Лос-Анджелес`, `Токио`, `Нью-Йорк`, `Раккун-Сити`],
          trueAnswer: "Раккун-Сити",
        },
        question3: {
          question: `Какой вирус может уничтожить все зараженные T-вирусом?`,
          answers: [`G-вирус`, `Антивирус`, `Мутантный вирус`, `R-вирус`],
          trueAnswer: "Антивирус",
        },
        question4: {
          question: `Что Элис находит в конце фильма?`,
          answers: [
            `Лекарство от T-вируса`,
            `Свои воспоминания о прошлом`,
            `Новых союзников`,
            `Секретную лабораторию "Амбрелла"`,
          ],
          trueAnswer: `Свои воспоминания о прошлом`,
        },
      },
    },
    {
      name: `Обитель зла: Раккун-Сити
            (перезапуск кинофраншизы)`,
      decs: `Фильм рассказывает о Клэр Редфилд и ее брате Крисе. Когда они были детьми, 
      они жили в приюте Раккун-Сити. Клэр знакомится с изуродованной девушкой по имени 
      Лиза Тревор, над которой проводили эксперименты`,
      imgSrc: `/UmbreFun/film7.jpg`,
      status: false,
      secretWord: "вместе.",
      questions: {
        question1: {
          question: `Какую роль в фильме играет Клэр Редфилд?`,
          answers: [
            `Учёный корпорации`,
            `Полицейский`,
            `Выживший, пытающийся раскрыть правду о "Амбрелле"`,
            `Генеральный директор "Амбреллы"`,
          ],
          trueAnswer: `Выживший, пытающийся раскрыть правду о "Амбрелле"`,
        },
        question2: {
          question: `Какой город является основным местом действия в фильме?`,
          answers: [`Лос-Анджелес`, `Токио`, `Раккун-Сити`, `Нью-Йорк`],
          trueAnswer: "Раккун-Сити",
        },
        question3: {
          question: `Кто из персонажей является главой полиции Раккун-Сити?`,
          answers: [
            `Леон Кеннеди`,
            `Альберт Вескер`,
            `Уильям Биркин`,
            `Брайан Айронс`,
          ],
          trueAnswer: "Брайан Айронс",
        },
        question4: {
          question: `Что вызывает зомби-эпидемию в Раккун-Сити?`,
          answers: [
            `Случайный выброс химикатов`,
            `Лабораторная утечка T-вируса`,
            `Террористическая атака`,
            `Природное бедствие`,
          ],
          trueAnswer: `Лабораторная утечка T-вируса`,
        },
      },
    },
  ]);
  const [endMessage, setEndMessage] = useState(false);
  const messageRef = useRef(null);
  const message =
    'Специально для агента под кодовым позывным "LiNA" от компании "Umbrella" было поручено задание ОСОБОЙ важности и секретности. Ознакомиться со всеми фильмами по соответственным мотивам и выявить уязвимые места корпорации. Агент в праве выбирать любых напарников. За каждый фильм предусмотрен отчёт-тест, по итогам которого возможно получить кодовое слово. Необходимо собрать кодовую фразу из 7 кодовых слов. Сообщите кодовую фразу агенту с позывным "DaN", и вам вручат награду. Удачи, агент!';

  function doText(m) {
    let time = 1000;
    let text = "";
    if (messageRef !== null) {
      const data = m.split("");

      data.forEach((elem) => {
        time = time + 75;
        setTimeout(function () {
          text = text + elem;
          messageRef.current.textContent = text;

          if (text === message) {
            setTimeout(() => {
              setEndMessage(true);
            }, 2300);
          }
        }, time);
      });
    }
  }

  useEffect(() => {
    doText(message);

    if (localStorage.getItem("allInfo") !== null) {
      const data = JSON.parse(localStorage.getItem("allInfo"));
      setAllFilmsArr(data);
    } else {
      localStorage.setItem("allInfo", JSON.stringify(allFilmsArr));
    }
  }, []);

  return (
    <div className={styles.app}>
      <div
        className={`${styles["background-app"]} ${
          endMessage === false ? styles["center"] : ""
        }`}
      >
        <div
          className={`${styles["message-hello"]} ${
            endMessage === false ? "" : styles["none"]
          }`}
        >
          <p ref={messageRef}></p>
          <button
            onClick={() => {
              setEndMessage(true);
            }}
            className={styles["button-hello-message"]}
          >
            Пропустить
          </button>
        </div>
        <div
          className={`${styles["core-content"]} ${
            endMessage === false ? styles["none"] : ""
          }`}
        >
          <Header allFilmsArr={allFilmsArr}></Header>
          <div className={styles["main"]}>
            <MainContent
              allFilmsArr={allFilmsArr}
              setAllFilmsArr={setAllFilmsArr}
            ></MainContent>
          </div>
        </div>
      </div>
    </div>
  );
}

export const App = memo(AppInit);
