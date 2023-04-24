import { useState, useEffect } from "react";
import { MyNewList } from "../newlist";

function MyList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        setList([{ title: 'Learn react bases' },
        { title: 'Practice react js' },
        { title: 'Learn redux' },
        { title: 'Code portfolio in React' },
        { title: 'Learn react native' }])
    }, [])

    function handleClick() {
        setList([])
    };

    function backDel() {
        setList([{ title: 'Learn react bases' },
        { title: 'Practice react js' },
        { title: 'Learn redux' },
        { title: 'Code portfolio in React' },
        { title: 'Learn react native' }])
    }

    return (

        <div className="main-div">
            {
                list.map((i, j) => {
                    return (
                        <div key={j} className="list-div">
                            <p className="list-p">{i.title} </p>

                        </div>
                    )
                })
            }

            <button className="del-btn">Delete done tasks</button>
            <button onClick={handleClick} className="del-btn">Delete all tasks</button>
            <div className="bttn-div">
                <button className="del-btn" onClick={backDel}>Return</button>
             
            </div>
            <MyNewList/>
        </div>

    )

}

export default MyList