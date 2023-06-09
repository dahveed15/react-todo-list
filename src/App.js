import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {useState} from "react";


function App() {
    const [todos, setTodos] = useState([]);
    function addTodo(todo) {
        setTodos([todo, ...todos])
    }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo List
        </p>
        <TodoForm singleTodo={"Example Todo"} addTodo={addTodo} />
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
