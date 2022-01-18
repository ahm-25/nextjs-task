import styles from "./style.module.css";
import { getArticle } from "../../../api/articles";
import Image from "next/image";
import useSWR, { useSWRPages } from "swr";

import { CommentsList } from "../../../components/CommentsList";

export default function Article({ article }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          placeholder="empty"
          quality={50}
          priority={true}
          src={article.image}
          alt="photo"
          width="640"
          height="360"
          layout="responsive"
          sizes="50vw"
        />
      </div>
      <h1 className={styles.title}>{article.title}</h1>
      <div className={styles.comments}>
        <Image src="/comments.svg" alt="photo" width={30} height={30} />
        <span>{article.comments_count}</span>
      </div>
      <CommentsList />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const data = await getArticle(query.id);
  const article = data.data.data;
  return {
    props: {
      article
    }
  };
};
