import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Yeni tapşırıq əlavə edən funksiya
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // Boş dəyəri əlavə etmə
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>TODO App</h1>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          placeholder="Yeni tapşırıq əlavə edin"
          style={{border: '1px solid black'}}
        />
        <button type="submit">Əlavə et</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
