import {useState} from "react" ;

import Image from "next/image";
import Link from 'next/link' ;

import styles from "../styles/css/Header.module.css" ;

import icon from "../public/img/TBStenicon.png" ;

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const links = [
        {text:"Top", path:"/"},
        {text:"About", path:"/about"},
        {text:"Skill", path:"/skill"},
        {text:"Conntact", path:"/conntact"},
    ] ;
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <Image 
                        src={icon} 
                        alt="image" 
                        className={styles.icon}
                        width={70}
                        height={70}/>
                </a>
            </Link>
            <ul className={styles.pcMenu}>
                {
                    links.map((ele)=>(
                        <Link href={ele.path} key={ele.text}>
                            <li>
                                <a> {ele.text} </a>
                            </li>
                        </Link>
            ))
                }
            </ul>
            <div className={styles.spMenu}>
                <div className={styles.menuBtn} onClick={()=>setIsOpenMenu(true)}>
                    ↓
                </div>
                <ul className={styles.menu+" "+(isOpenMenu ? styles.open : "")}>
                    {
                        links.map((ele)=>(
                            <Link href={ele.path} key={ele.text}>
                                <li>
                                    <a> {ele.text} </a>
                                </li>
                            </Link>
                        ))
                    }
                    <div className={styles.cancel} onClick={()=> setIsOpenMenu(false)}>
                        ×
                    </div>
                </ul>

            </div>
        </header>
    )
}

