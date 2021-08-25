import Image from 'next/image'
import img01 from '../public/img/TBStenicon.png'
import img02 from '../public/img/Programming-rafiki.png'
import img03 from '../public/img/icon.png'

import styles from "../styles/css/Top.module.css" ;

import Section from "../components/Section";
import BaseLayout from '../components/BaseLayout';
import SubTitle from '../components/SubTitle';

export default function Top() {
  return (
    <BaseLayout className={styles.top}>
      <Section>
        <div className={styles.title}>
          <h1>TBSten</h1>
          <h2>-プログラミングを学ぶ人へ送る,ささやかな料理-</h2>
        </div>
        <div>
          <Image src={img01} alt="image" className={styles.circle}/>
        </div>
      </Section>

      <Section>
        <SubTitle 
          h2="Who is ?"/>
        <p>
          しがない負け犬学生 TBSten です。プログラミング大好き！
        </p>
        <Image src={img02} alt="image"/>
      </Section>

      <Section>
        <SubTitle 
          h2="What can I do ?"/>
        <ul>
            <li> <b>HTML/CSSコーディング</b>、<b>JavaScript</b>(React・NextJS) </li>
            <li> <b>Java</b>を使ったWindowsアプリ,ゲームの開発 </li>
        </ul>
        <p>
          を趣味でしたことがあります！
          その他必要に応じていろいろな技術に挑戦中！
        </p>
      </Section>

      <Section>
        <SubTitle 
          h2="プログラミング食堂"/>
        <p>
        私が高校時代苦戦した「アルゴリズム」。
        ネット上の情報量の少なさ、分かりにくさに苦労しました。
        プログラミングを学ぶ中高生やプログラミング初心者に
        <b>少しでも親しみやすい「アルゴリズム」を。</b>
        そんな思いで活動しているプロジェクト、
        それが<b>「プログラミング食堂」</b>です。
        そんなプログラミング食堂の運営・管理を行っています。
        </p>
        <Image src={img03} alt="image"/>
      </Section>
    </BaseLayout>


  );
}

