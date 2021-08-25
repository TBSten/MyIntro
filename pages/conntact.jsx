import React,{useState} from "react" ;
import Image from "next/image" ;
import styles from "../styles/css/Conntact.module.css" ;
import BaseLayout from "../components/BaseLayout";
import Section from "../components/Section";
import SubTitle from "../components/SubTitle";
import LinkButton from "../components/LinkButton" ;
// import ImageLine from "../components/ImageLine";

import hatenaIcon from "../public/img/hatenablog.png" ;
import twitterIcon from "../public/img/2021 Twitter logo - blue.png" ;
import githubIcon from "../public/img/GitHub-Mark-120px-plus.png" ;
import qiitaIcon from "../public/img/qiitaIcon.png" ;
import zennIcon from "../public/img/zennIcon.png" ;

const links = [
    {
        name:"はてなブログ",
        details:"プログラミング食堂関連の連絡はこちらから",
        href:"https://tbsten.hatenablog.com/entry/top",
        image:hatenaIcon},
    {
        name:"Twitter",
        details:"どうでもいい独り言をたまにツイートします　気軽にDMどうぞ",
        href:"https://twitter.com/o2MCNTc60FpTAW3",
        image:twitterIcon},
    {
        name:"Github",
        details:"過去に作成したソフト・アプリや、どうでもいい個人的メモ、クソアプリなど、作ったものがこれでもかと詰まっています",
        href:"https://github.com/TBSten",
        image:githubIcon},
    {
        name:"Qiita",
        details:"ブログとは違い、各言語の技術的な記事を投稿します",
        href:"https://qiita.com/programmingcafeteria/contributions",
        image:qiitaIcon},
    {
        name:"Zenn",
        details:"今後はQiitaから乗り換えてこちらで発信するかも",
        href:"https://zenn.dev/tbsten",
        image:zennIcon,},
    
] ;

export default function Conntact(){
    const [tabIdx, setTabIdx] = useState(0);
    function handleClick(idx){
        return ()=>{
            console.log(idx);
            setTabIdx(idx);
        };
    }

    

    return (
        <BaseLayout className={styles.conntact}>
            <Section>
                <h1>CONNTACT</h1>
                <h4>SNS発信</h4>
            </Section>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/* デザイン考える */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            <Section>
                <ul className={styles.conntacts}>
                    {
                        links.map((ele)=>(
                            <li key={ele.name}>
                                <div className={ele.image?styles.conntactImageDetail:""}>
                                    <div className={ele.image?styles.imgContainer:""}>
                                        {
                                            ele.image?
                                            <Image
                                                className={styles.img}
                                                src={ele.image}/>
                                            :""
                                        }
                                    </div>
                                    <div className={styles.detailContainer}>
                                        <SubTitle 
                                            h2={ele.name}
                                            h5={ele.details}/>
                                    <LinkButton 
                                        href={ele.href} 
                                        target="_blank"
                                        children={[ele.name," へ"]}/>

                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>


            </Section>
        </BaseLayout>
    ) ;
}

