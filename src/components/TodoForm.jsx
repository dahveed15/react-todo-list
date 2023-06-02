import { useEffect, useState } from "react";

const TodoForm = () => {
    const [todo, setTodo] = useState({
        task: "",
        completed: false
    });


    const handleInputChange = (e) => {
        setTodo({
            ...todo,
            task: e.target.value
        });
    }

    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo.task} onChange={handleInputChange} />
                <button type="submit" onClick={()=> console.log(todo.task)}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
