import Header from "../components/Header";
import Footer from "../components/Footer";


export default function BaseLayout({children,className}){
    return (
        <div className={className}>
            <Header/>
                <main>
                    {children}
                </main>
            <Footer/>
        </div>
  
    ) ;
}
