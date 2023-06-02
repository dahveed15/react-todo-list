import { useEffect, useState } from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState("Hello");
    // useEffect(() => {
    //     console.log('TODO component rendered!');
    // }, [])
    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo} onChange={() => console.log("TODO")} />
            </form>
        </div>
    );
}

export default TodoForm;
