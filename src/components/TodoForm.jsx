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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.task);
    }

    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo.task} onChange={handleInputChange} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
