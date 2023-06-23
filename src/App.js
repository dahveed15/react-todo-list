import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    function removeTodo(id) {
      setTodos(
        todos.filter(todo => todo.id !== id)
      )
    }

    function toggleComplete(id) {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      )
    }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo List
        </p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
      </header>
    </div>
  );
}

export default App;
