import { FC } from "react";

import styles from "./index.module.scss";

interface ITagItem {
  text: string;
}

export const TagItem: FC<ITagItem> = ({ text }) => (
  <div className={styles.container}>
    <p>{text}</p>
  </div>
);
