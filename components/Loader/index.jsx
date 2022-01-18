import React from "react";
import styles from "./style.module.css";
export const Loader = ({ attrs }) => {
  return <div className={styles.loader} style={{ ...attrs }}></div>;
};
