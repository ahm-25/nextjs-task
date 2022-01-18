import React from "react";
import styles from "./style.module.css";
export const CommentItem = ({ comment }) => {
  return (
    <div>
      <li className={styles.listItem}>{comment.content}</li>
    </div>
  );
};
