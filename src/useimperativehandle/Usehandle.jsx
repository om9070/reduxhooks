import { useRef } from "react";
import Child from "./Child";

const Usehandle = () => {
    let ref = useRef();
    return (
        <>
            <h1>this is om prakash </h1>
            <Child ref={ref} />
            <button onClick={() => ref.current.increment()}>parentcount</button>
        </>
    )
}
export default Usehandle;