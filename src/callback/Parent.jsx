import { useCallback } from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [non, setnon] = useState(0);
    const [zero, one] = useState(0);


    const getitem = useCallback(() => {
        console.log(non + 1, non - 1)
        return [non + 1, non - 1]
    }, [non])

    return (
        <>
            <h3>this is noted</h3>
            <button onClick={() => setnon(non + 1)}>frist line{non}</button>
            <button onClick={() => one(zero + 1)}>second line{zero}</button>
            <Child getdata={getitem} />
        </>
    )
}
export default Parent;