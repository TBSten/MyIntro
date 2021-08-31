import Image from "next/image" ;
import styles from "../styles/css/ImageLine.module.css" ;
console.log(styles.imageLine);
export default function ImageLine(props){
    return (
        <div className={styles.imageLine}>
            {/* <img src={props.src.src} /> */}
            <Image src={props.src} className={styles.image}/>
        </div>
    ) ;
}
