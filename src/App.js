import './App.css';
import TodoForm from './components/TodoForm';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Todo List
        </p>
        <TodoForm/>
      </header>
    </div>
  );
}

export default App;
