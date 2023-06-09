import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo List
        </p>
        <TodoForm singleTodo={"Example Todo"}/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
