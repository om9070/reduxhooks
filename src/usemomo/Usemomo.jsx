import { useMemo, useState } from "react";

const Usemomo = () => {
    const [count, setcount] = useState(0);
    const [zero, setzero] = useState(0);
    const increment = () => {
        setcount(count + 1);
    }
    const decrement = () => {
        setzero(zero - 1);
    }

    const iseven = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }
        return count % 2 === 0;
    }, [count])
    return (
        <>
            <button onClick={increment} >count one{count}</button>{iseven ? "even" : "odd"}
            <hr />
            <button onClick={decrement}>count two{zero}</button>
        </>
    )
}
export default Usemomo;