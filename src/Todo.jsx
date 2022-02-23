import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo } from "./action/index";

export const Todo = () => {
    const [data, setdata] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoreducer.list)


    console.log(list);
    return (
        <>
            <h1 className='text-center my-4'>todo list</h1>
            <div className=' container text-center'>
                <label htmlFor="">enter your name:</label>
                <input type="text" value={data} onChange={(e) => setdata(e.target.value)} />
                <button className=' mx-1' onClick={() => dispatch(addtodo(data), setdata(""))}>add</button>
            </div>
            <div className=' my-2 '>
                {
                    list.map((elem) => {
                        return (
                            <li key={elem.id}>{elem.data}  <button onClick={() => dispatch(deletetodo(elem.id))}>del</button></li>
                        )
                    })
                }

            </div>


        </>
    )
};
export default Todo;

