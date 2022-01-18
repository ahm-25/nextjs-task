import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../Loader";
export const NewsItem = ({ item }) => {
  return (
    <Link href={`/article/${item.id}`}>
      <a>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              sizes="50vw"
              placeholder="empty"
              src={item.image}
              alt="photo"
              width={640}
              height={360}
              layout="responsive"
              quality={50}
              priority={true}
            />
          </div>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.cardFooter}>
            <div>
              <Image
                placeholder="empty"
                quality={50}
                priority={true}
                src="/clap.svg"
                alt="photo"
                width={30}
                height={30}
              />
              <span>{item.claps_count}</span>
            </div>
            <div>
              <Image
                placeholder="empty"
                quality={50}
                priority={true}
                src="/comments.svg"
                alt="photo"
                width={30}
                height={30}
              />
              <span>{item.comments_count}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
