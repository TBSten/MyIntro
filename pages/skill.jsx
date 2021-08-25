
import BaseLayout from "../components/BaseLayout";
import Section from "../components/Section";
import SubTitle from "../components/SubTitle";

import styles from "../styles/css/Skill.module.css" ;

import {client} from "../libs/client" ;

const lanFra = [
    {
        text:"Java", 
        details:<>基本文法や標準ライブラリ, GUIフレームワークである<b>Swing,JavaFx</b></>,
        canDo:"Windowsアプリケーション",
        /* imgPathなど */
    },
    {
        text:"Web(フロントエンド)", 
        details:<><b>HTML5/CSS3, JavaScript, React, NextJS</b>など。Firebaseを用いたWebアプリ開発</>,
        canDo:"サイト制作, ウェブアプリ",
        /* imgPathなど */
    },
    {
        text:"ツール・サービス", 
        details:(
            <><b>Git</b>, <b>Excel</b>を学習済み（開発時よく使っています）,
            Firebaseの各種サービスなど幅広く対応できると思います </>) ,
        /* imgPathなど */
    },
    {
        text:"その他", 
        details:<><b>PHP</b>をちょっと触ったことあります。
            一時期<b>GAS</b>(GoogleAppsScript)にハマっていたので、簡単な<b>LINE BOT</b>も作成できます。</>,
        canDo:"LINEチャットBOTなどの作成",
        /* imgPathなど */
    },
] ;

const Qua = [
    "基本情報技術者試験",
    "応用情報技術者試験",
] ;

export default function Skill({data}){
    return (
        <BaseLayout className={styles.skill}>
            <Section>
                <h1>SKILL</h1>
                <h4>プログラミング言語や資格</h4>
            </Section>

            <Section>
                <SubTitle 
                    h2="Language / Framework"
                    h5="プログラミング言語・フレームワーク"/>
                {/* ここにlanFraをmapする */}
                {/* GridLayoutなどでレイアウトする */}
                <ul className={styles.grid}>
                    {
                        lanFra.map((ele, idx)=>(
                            <li key={idx}>
                                <h3> {ele.text} </h3>
                                <p>
                                    {ele.details}
                                </p>
                                {ele.canDo ? 
                                    <>
                                        <hr/>
                                        {ele.canDo}
                                    </>
                                    :
                                    ""}
                            </li>
                        ))
                    }
                </ul>
            </Section>

            <Section>
                <SubTitle
                    h2="Qualification"
                    h5="資格"/>
                {/* ここにQuaをmapする */}
                <ul className={styles.grid}>
                    {
                        Qua.map((ele, idx)=>(
                            <li key={idx}>
                                {ele}
                            </li>
                        ))
                    }
                </ul>
            </Section>

        </BaseLayout>
    ) ;
}

// export const getStaticProps = async () => {
//     console.log(fetch);
//     return {
//       props: {
//       },
//     };
// };

