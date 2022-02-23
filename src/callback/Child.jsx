import { useEffect } from "react";
import { useState } from "react";

const Child = ({ getdata }) => {
    const [item, setitem] = useState([]);

    useEffect(() => {
        setitem(getdata)
    }, [getdata])
    return (
        <>
            {
                item.map((elelm) => {
                    return (
                        <>
                            <ul key={elelm}>
                                <li>{elelm}</li>
                            </ul>
                        </>
                    )
                })
            }
        </>
    )
}
export default Child;