import { TagItem } from "@/components/TagItem";

import styles from "./index.module.scss";

const tagContent = [
  "Агробізнес",
  "Репортажна відеозйомка",
  "Агро",
  "Відео реклама",
  "Рекламний ролик",
  "Монтаж відео",
  "Кастинг",
  "Дикторська начитка",
  "Відео для Ютуба",
  "Агро бізнес",
  "Аерозйомка",
  "Пре-продакшн",
  "Промо відео",
  "Пост-продакшн",
  "Зйомка кліпу",
  "Агровідео",
  "Зйомка Лухбук",
  "Написання сценарію",
  "Предметна зйомка",
  "Відеозйомка агровиробництва",
  "Відео-огляд",
];

export const TagCarousel = () => (
  <div className={styles.container}>
    <div className={styles["slide-track"]}>
      {tagContent.map((el, index) => (
        <div key={index} className={styles.slide}>
          <TagItem text={el} />
        </div>
      ))}
    </div>
  </div>
);
