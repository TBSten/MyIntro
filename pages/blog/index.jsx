import React from "react" ;

import styles from "../../styles/css/BlogTop.module.css" ;

import { client } from "../../libs/client";

import BaseLayout from "../../components/BaseLayout" ;
import Section from "../../components/Section" ;
import Article from "../../components/Article";

export default function Blog({blog}){
    //日付順にソート
    const blogs = blog.sort((a,b)=>(
        Date.parse(b.updatedAt) - Date.parse(a.updatedAt)
    ));
    const veryImportants = blogs.filter((art)=>(art.importance[0] === "最重要"))
    const importants = blogs.filter((art)=>(art.importance[0] === "重要"))
    console.log(veryImportants, importants);
    return (
        <BaseLayout className={styles.blog}>
            <Section>
                <h1>BLOG</h1>
                <h4>おしらせや独り言</h4>
            </Section>
            {
                veryImportants.length > 0 || importants.length > 0 ?
                <Section>
                    {veryImportants.length > 0 ? 
                        <ul className={styles.veryImportants}>
                            {veryImportants.map(ele=> (
                                <li className={styles.article} key={ele.id}>
                                    <Article type="list" content={ele} />
                                </li>
                            ))}
                    </ul>
                    :""}
                    {importants.length > 0 ? 
                        <ul className={styles.importants}>
                            {importants.map(ele=> (
                                <li className={styles.article} key={ele.id}>
                                    <Article type="list" content={ele} />
                                </li>
                            ))}
                    </ul>
                    :""}
                </Section>
                :
                ""
            }
            <Section>
                <h2>記事一覧</h2>
                <ul className={styles.articles}>{
                    blogs.map(ele=>(
                        <li className={styles.article} key={ele.id}>
                            <Article type="grid" content={ele}/>
                        </li>
                    ))
                }</ul>
            </Section>
        </BaseLayout>
    ) ;
}

export const getStaticProps = async ()=>{
    const data = await client.get({ endpoint:"blog" });
    return {
        props: {
            blog: data.contents,
        },
    } ;
};
