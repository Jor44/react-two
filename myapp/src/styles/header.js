import { useState } from "react";

export const TodoHeader = () => {
    const [todo, setTodo] = useState('')
    const [listItems, setListItems] = useState([]);

    const click = () => {
        setListItems([...listItems, todo]);
        alert(todo)
    }

    return (
        <header>
            <h2>ToDoInput</h2>
            <div className="header-div">
                <input onChange={(event) => (setTodo(event.target.value))} placeholder="New ToDo" />
                <button onClick={click}>Add new task</button>
            </div>
            {listItems.map((item, index) => (
                <div className="list-div" key={index}>{item}</div>
            ))}
        </header>
    )
}




