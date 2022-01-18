import styles from './style.module.css'
import { NewsItem } from "../NewsItem"

export const NewsList = ({news}) => {
    return (
        <div className={styles.container}>
            {news.map((item,index)=>(
                <NewsItem item={item} key={index}/>
            ))}
        </div>
    )
}
