import { useRef, useEffect, useState } from "react" ;

import moduleStyle from "../styles/css/Section.module.css" ;

export default function Section(props){
    const {
        imgUrl,
        children,
        fade=true,
        autoWidth=true,
        className="",
        ...other
    } = props ;
    const childRef = useRef(null);
    const [isOpen,setIsOpen] = useState(false);
    useEffect(()=>{
        setIsOpen(false);
        const handleScrollWindow = ()=>{
            if(childRef.current){
                const scroll = window.scrollY;
                const top = childRef.current.offsetTop;
                //if(scroll > top-height +window.innerHeight*0){
                if(scroll > top -window.innerHeight+window.innerHeight*0.3){
                    setIsOpen(true);
                }
            }
        };
        handleScrollWindow();
        window.addEventListener("scroll",handleScrollWindow);
        return ()=>{
            window.removeEventListener("scroll",handleScrollWindow);
        };
    },[childRef]);
    const childClasses = [moduleStyle.child] ;
    if(fade === true){
        childClasses.push(moduleStyle.fade);
    }
    if(isOpen){
        childClasses.push(moduleStyle.open);
    }
    // const style = imgUrl?{
    //     backgroundImage: `url("${imgUrl}")`,
    // } :
    // {};
    const style = {} ;
    if(imgUrl) style["backgroundImage"] = `url("${imgUrl}")` ;
    // console.log("childClasses :",childClasses.join(" "));
    const childStyle = {} ;
    if(autoWidth) childStyle["width"] = "min(100%, 800px)" ;
    return (
        <section ref={childRef} className={moduleStyle.section+" "+className} style={style} {...other}>
            <div className={childClasses.join(" ")} style={childStyle}>
                {children}
            </div>
        </section>
    ) ;
}

