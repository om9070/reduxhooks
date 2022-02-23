import { useImperativeHandle } from "react";
import { forwardRef, useState } from "react";

const Child = forwardRef((props, ref) => {
    const [count, setcount] = useState(0);
    useImperativeHandle(ref, () => ({
        increment
    }))

    const increment = () => {
        setcount(count + 1)
    }

    return (
        <>
            {count}
            <button onClick={increment}>click me</button>
        </>
    )
})
export default Child;