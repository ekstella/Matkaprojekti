import { useState } from "react";

function Todolist() {
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const addTodo = () => {
    setTodos([...todos, { desc: desc, date: date }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index))
  };

  return (
    <>
      <input
        placeholder="Description"
        onChange={handleDescChange}
        value={desc}
      />
      <input placeholder="Date" onChange={handleDateChange} value={date} />
      <button onClick={addTodo}>Add</button>

      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.desc}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={ () => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todolist;
