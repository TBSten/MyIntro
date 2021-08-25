

export default function SubTitle({h2,h5}){
    return (
        <>
            {
                h2?
                <h2>{h2}</h2> : ""
            }
            {
                h5?
                <h5>{h5}</h5> : ""
            }
        </>
    ) ;
}