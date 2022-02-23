import { useEffect, useRef } from "react";

const Ref = () => {
    const inputref = useRef(null);


    useEffect(() => {
        inputref.current.value = 10;
        inputref.current.focus()
    }, [])

    return (
        <>
            <h3>this is ref</h3>
            <input type="text" ref={inputref} />
        </>
    )
}
export default Ref;