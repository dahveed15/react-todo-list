const TodoList = (props) => {
    return (
        <div>
            { props.todos.map(todo => {
                return <div><p>{todo.task}</p></div>
            }) }
        </div>
    )
};

export default TodoList;