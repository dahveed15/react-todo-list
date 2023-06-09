import { useState } from "react";

const TodoForm = (props) => {
    const [todo, setTodo] = useState({
        task: props.singleTodo,
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
        setTodo({
            ...todo,
            task: ''
        }); 
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
