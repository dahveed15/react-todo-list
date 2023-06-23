import { useState } from "react";

const { v4: uuidv4 } = require('uuid');

const TodoForm = (props) => {
    const [todo, setTodo] = useState({
        id: "",
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
        props.addTodo({
            ...todo,
            id: Date.now()
        })
        setTodo({
            ...todo,
            task: ''
        });
    }

    return (
        <div>
            <form>
                <input type="text" name="todo" value={todo.task} onChange={handleInputChange} />
                <button type="submit" onClick={handleSubmit} disabled={todo.task === ''}>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
