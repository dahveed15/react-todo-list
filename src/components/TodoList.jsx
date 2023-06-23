const TodoList = (props) => {
    return (
        <div>
            { props.todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.task}</p>
                        <button onClick={() => props.removeTodo(todo.id)}>X</button>
                    </div>
                )
            }) }
        </div>
    )
};

export default TodoList;