import Link from "next/link";
import styles from "../styles/css/LinkButton.module.css" ;

export default function LinkButton(props){
    const {href,children,className,...other} = props ;
    const classes = [styles.linkBtn] ;
    if(className){classes.push(className)}
    return (
        <Link href={href}>
            <a className={classes.join(" ")} {...other}>{children}</a>
        </Link>
    ) ;
}