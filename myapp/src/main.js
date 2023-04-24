import MyList from "./components/list"
import { MyNewList } from "./newlist"

export const TodoMain=()=>{
    return(
    <main>
        <h2>TodoList</h2>
        <section>
        <button>All</button>
        <button>Done</button>
        <button>ToDo</button>
        </section>
        <MyList/>
        <MyNewList/>
    </main>
    )
}