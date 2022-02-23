import { useLayoutEffect, useState } from "react";
import { useEffect } from "react";

const Useffect = () => {
    let yt = "pro banda is not bad"
    let uy = "this is om prakash gupt"
    const [data, setdata] = useState(yt)
    // useEffect(() => {
    //     setdata(uy);
    // }, [])
    useLayoutEffect(() => {
        setdata(uy);
    }, [])
    return (
        <>
            <h1>
                {data}
            </h1>
        </>
    )
}
export default Useffect;