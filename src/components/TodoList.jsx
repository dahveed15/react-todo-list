const TodoList = (props) => {
    return (
        <div>
            { props.todos.map(todo => <p>{todo.task}</p>) }
        </div>
    )
};

export default TodoList;