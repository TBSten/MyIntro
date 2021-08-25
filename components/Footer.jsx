import Link from "next/link" ;

import styles from "../styles/css/Footer.module.css" ;
import {links} from "./Header" ;


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.title}>
                <Link href="/">
                    <a>
                        <h2>TBSten</h2>
                    </a>
                </Link>
            </div>
            <ul className={styles.menu}>
                {
                    links.map(ele=>(
                        <li key={ele.text}>
                            <Link href={ele.path}>
                                {ele.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </footer>
    )
}
  