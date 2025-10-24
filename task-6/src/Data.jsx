import React, { useState } from "react";
import useFetch from "./useFetch";
function App() {
  // using the custom hook `useFetch()`
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (loading) return <div className="loading-message">Loading...</div>;
  if (error) return <div className="error-message">Error: {error.message}</div>;
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {data.map((todo, index) => (
          <li key={todo.id}>{index + 1}. {todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
