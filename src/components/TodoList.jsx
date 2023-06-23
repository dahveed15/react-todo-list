const TodoList = (props) => {
    return (
        <div>
            { props.todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <input type="checkbox" onClick={() => props.toggleComplete(todo.id)} />         
                        <li style={{textDecoration: todo.completed ? 'line-through' : null}}>{todo.task}</li>
                        <button onClick={() => props.removeTodo(todo.id)}>X</button>
                    </div>
                )
            }) }
        </div>
    )
};

export default TodoList;