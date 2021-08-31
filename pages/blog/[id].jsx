import {useEffect} from "react" ;
import Link from "next/link" ;
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

export default function BlogDetail({blog, blogs}){
    return (
        // <div>Detail Blog Page {id}</div>
        <BaseLayout className={styles.blogDetails}>
            <Section>
                <div>{formatDate(new Date(blog.updatedAt))}</div>
                <h1>{blog.title}</h1>
            </Section>
            <Section autoWidth={false} fade={false}>
                <div className={styles.grid}>
                    <article>
                        <img src={blog.image.url} />
                        <div 
                            className={styles.blogContent} 
                            dangerouslySetInnerHTML={{__html: blog.content}}/>
                    </article>
                    <aside>
                        <h4>記事一覧</h4>
                        {
                            blogs.contents.map(ele=>(
                                <div key={ele.id} className={styles.sideItem}>
                                    <Link href={`/blog/${ele.id}`}>
                                        <a>
                                            <div>
                                                <h6>
                                                    {ele.title}
                                                </h6>
                                                {ele.catchText.slice(0,30)}...
                                            </div>
                                            <img src={ele.image.url}/>
                                        </a>
                                    </Link>
                                </div>
                            ))
                        }
                    </aside>
                </div>
            </Section>
        </BaseLayout>
    ) ;
}

export const getStaticProps = async ({params})=>{
    const id = params.id ;
    const blogsRes = await client.get({ endpoint:"blog" });
    const blogRes = await client.get({ endpoint:"blog/"+id });
    console.log(blogsRes,blogRes);
    return {
        props: {
            blogs: blogsRes,
            blog: blogRes,
        },
        revalidate : 60*60*12,  //12時間に1回ISR
    } ;
};

export const getStaticPaths = async ()=>{
    const res = await client.get({ endpoint:"blog" });
    const paths = res.contents.map(ele => ({
        params: { id: ele.id }
      }));
    console.log("ssg :",res);
    return {
        paths: paths,
        fallback: "blocking",
    };
};

