import {useEffect} from "react" ;
import BaseLayout from '../../components/BaseLayout';
import Section from '../../components/Section';
import {client} from "../../libs/client" ; 
import styles from "../../styles/css/BlogDetail.module.css" ;

function formatDate(date){
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate() ;
    return `${("0000"+y).slice(-4)}-${("0000"+m).slice(-2)}-${("0000"+d).slice(-2)}` ;
}

export default function BlogDetail({data}){
    return (
        // <div>Detail Blog Page {id}</div>
        <BaseLayout className={styles.blogDetails}>
            <Section>
                <div>{formatDate(new Date(data.updatedAt))}</div>
                <h1>{data.title}</h1>
            </Section>
            <Section>
                <img src={data.image.url} />
                <div 
                    className={styles.blogContent} 
                    dangerouslySetInnerHTML={{__html: data.content}}/>
            </Section>
        </BaseLayout>
    ) ;
}

export const getServerSideProps = async (ctx)=>{
    const id = ctx.query.id ;
    const res = await client.get({ endpoint:"blog/"+id });
    return {
        props: {
            data: res,
        },
    } ;
};

export const getStaticPaths = async ()=>{
    const res = await client.get({ endpoint:"blog" });
    const paths = res.contents.map(ele=>ele.id);
    return {
        paths: paths,
        fallback: false,
    };
};

