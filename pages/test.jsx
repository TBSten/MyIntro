import Link from 'next/link' ;
import Header from "../components/Header";

export default function Test(){
    return (
        <div>
            <Header/>
            test
            <Link href="/">
                <a>
                    TEST
                </a>
            </Link>

        </div>
    ) ;
}
