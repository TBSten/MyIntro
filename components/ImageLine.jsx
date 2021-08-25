import Image from "next/image" ;
import styles from "../styles/css/ImageLine.module.css" ;
console.log(styles.imageLine);
export default function ImageLine(props){
    return (
        // <div className={styles.imageLine}>
        //     <Image {...props}/>
        // </div>
        <div className={styles.imageLine}>
            <img src={props.src.src} />
        </div>
        // <div className={styles.imageLine}>
        //     <Image 
        //         src={props.src.src} 
        //         width={100} 
        //         height={}
        //         layout="responsive"/>
        // </div>
    ) ;
}
