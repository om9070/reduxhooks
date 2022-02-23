import React, { useReducer } from "react";
var intial = 5;
const Reducers = (state, action) => {
    console.log(state, action);
    if (action.type === "increment") {
        return state + 1;
    }
    if (action.type === "decrement") {
        return state - 1;
    }
    return state;
}

const Reducer = () => {
    const [state, dispatch] = useReducer(Reducers, intial);
    return (
        <>
            <h3>this is reducer methode{state}</h3>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>

        </>
    )
}
export default Reducer;