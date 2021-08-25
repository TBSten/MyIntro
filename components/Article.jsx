import Link from "next/link";
import styles from "../styles/css/Article.module.css" ;

/**
 * type: "list"|"detail"
 */
export default function Article({type, content, }){
    if(type === "list"){
        return (
            <Link href={`/blog/${content.id}`}>
                <div className={styles.list}>
                    <img 
                        className={styles.img}
                        src={content.image.url}/>
                    <div className={styles.texts}>
                        <h3>{content.title}</h3>
                        <div>{content.catchText}</div>
                    </div>
                </div>
            </Link>
        ) ;
    }else if(type === "grid") {
        return (
            <Link href={`/blog/${content.id}`}>
                <div className={styles.grid}>
                    <img
                        className={styles.img}
                        src={content.image.url}/>
                    <div className={styles.texts}>
                        <h3>{content.title}</h3>
                        <div>{content.title}</div>
                    </div>
                </div>
            </Link>
        ) ;
    }else{
        return (<div>ERROR invalid type : {type}</div>)
    }
}