import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import { getArticles } from "../api/articles";
import { Loader } from "../components/Loader";
import { NewsList } from "../components/NewsList";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [page, setPage] = useState(0);
  const getNews = async () => {
    return await getArticles(page);
  };
  const { data, error } = useSWR(["newsArticles", page], getNews);
  if (error) return "error occurred";
  if (!data)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader />
      </div>
    );
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>articles</h1>
      <NewsList news={data.data.data} />

      <div className={styles.pagination}>
        {page > 0 && (
          <button onClick={() => setPage((page) => page - 1)}>prev</button>
        )}
        <button onClick={() => setPage((page) => page + 1)}>next</button>
      </div>
    </div>
  );
}
