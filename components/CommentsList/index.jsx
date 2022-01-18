import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getComments } from "../../api/comments";
import { CommentItem } from "../CommentItem";
import { Loader } from "../Loader";
import styles from "./style.module.css";
import useSWRInfinite from "swr/infinite";
export const CommentsList = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState([]);
  const [prevComments, setPrevComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleLoadMore = () => {
    setPage((page) => page + 1);
    setLoading(true);
  };
  useEffect(() => {
    getComments(router.query.id, page).then(({ data }) => {
      setPrevComments(data.data);
      setComments((comments) => {
        const allComments = [...comments, ...data.data];
        return allComments;
      });
      setLoading(false);
    });
  }, [page, router.query]);

  return (
    <>
      <ul style={{ padding: 0 }}>
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </ul>

      {prevComments.length > 0 && (
        <button onClick={handleLoadMore} className={styles.loadMore}>
          {!loading ? (
            <span>Load More</span>
          ) : (
            <Loader attrs={{ width: "30px", height: "30px" }} />
          )}
        </button>
      )}
    </>
  );
};
