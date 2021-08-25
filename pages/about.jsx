import Image from "next/image" ;

import BaseLayout from "../components/BaseLayout";
import Section from "../components/Section" ;
import SubTitle from "../components/SubTitle" ;


import styles from "../styles/css/About.module.css" ;

import icon from "../public/img/TBStenicon.png" ;
import singing from "../public/img/Listening happy music-rafiki.png" ;
import procafe from "../public/img/title.png" ;

export default function About(){
    return (
        <BaseLayout className={styles.about}>
            <Section>
                <h1>ABOUT</h1>
                <h4>TBStenとは何者？</h4>
            </Section>

            <Section>
                <SubTitle 
                    h2=" About Me " 
                    h5="自己紹介"/>
                <p>
                    しがない負け犬学生です。プログラミングやカラオケに目がありません。
                    <br/>
                    作成時間5分のアイコンが目印です！
                </p>
                <Image src={icon} alt="image" />
            </Section>

            <Section>
                <SubTitle 
                    h2="Favorite" 
                    h5="趣味"/>
                <p>
                    時間があれば,Windowsソフトを作ったりWebアプリを作ったり...
                </p>
                <p>
                    最近は行けてないカラオケも本当は月30回でも行きたい！
                </p>
                <Image src={singing} alt="image" />
            </Section>

            <Section>
                <SubTitle 
                    h2="Programming Cafeteria" 
                    h5="プログラミング食堂"/>
                <h5>
                    プログラミング食堂とは？
                </h5>
                <p>
                    高校時代にアルゴリズムの学習に苦労しました。
                    ネットを探しても思い通りの問題は出てこず、
                    何をすればいいのかが分からなかった。
                </p>
                <p>
                    かつての僕と同じ境遇にいる高校生に貢献できないかと立ち上げたプロジェクトが<b>「プログラミング食堂」</b>です。
                    プログラミングを学ぶすべての人へアルゴリズムの学習の助けになればと思い、
                    アルゴリズムを記載した<b>フローチャートを作成し、無償で配布</b>しています！
                </p>

                <Image src={procafe} alt="image" />

                <p>
                    ゲームや、ちょっと高度なアルゴリズムなど、様々な種類のフローチャートを用意しています。
                </p>
                <p>
                    また はてなブログ にてフローチャート追加時に解説記事も投稿しています！
                </p>
                
                {/* ここに写真スライド */}

                <h5>
                   名前の由来
                </h5>
                <p>
                    「子ども食堂」をご存じですか？
                    家庭の経済状況が厳しかったり、
                    夜勤で夜ご飯を一人で食べる子供が減るように、
                    「皆で食べる場所」と「温かい食事」を
                    無料または低価格で提供している施設の事です。
                    アルゴリズムを学ぶべき人たちが一人孤独に
                    悪戦苦闘することのないように、
                    食事（=フローチャート）を提供する。
                    また、こちらからの一方的な提供だけでなく、
                    プログラミング食堂というコミュニティとして
                    味方でありライバル仲間の存在を
                    この場所で作ってほしい。
                    そんな思いから「プログラミング食堂」名付けました。
                </p>

            </Section>

        </BaseLayout>
    ) ;
}

