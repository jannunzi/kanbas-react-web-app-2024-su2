import { useState } from "react";
function WorkingWithArrays() {
  const [todo, setTodo] = useState({ id: "1" });
  const API = "http://localhost:4000/a5/todos";
  return (
    <div>
      <h3>Working with Arrays</h3>
      <h3>Creating new Items in an Array</h3>
      <a href={`${API}/create`}>Create Todo</a>

      <h3>Filtering Array Items</h3>
      <a href={`${API}?completed=true`}>Get Completed Todos</a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <a href={`${API}/${todo.id}`}>Get Todo by ID</a>

      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>
    </div>
  );
}
export default WorkingWithArrays;
