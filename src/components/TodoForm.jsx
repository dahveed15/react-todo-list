import { useEffect } from "react";

const TodoForm = () => {
    useEffect(() => {
        console.log('TODO component rendered!');
    }, [])
    return (
        <div>
            <form>
                <input type="text" name="todo" />
            </form>
        </div>
    );
}

export default TodoForm;