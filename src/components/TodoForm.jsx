import { useEffect, useState } from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState("");
    // useEffect(() => {
    //     console.log('TODO component rendered!');
    // }, [])

    const handleInputChange = () => {
        
    }

    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo} onChange={() => console.log("TODO")} />
            </form>
        </div>
    );
}

export default TodoForm;
