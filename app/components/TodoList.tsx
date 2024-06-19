"use client"; // Marcar este archivo como un componente del cliente
import { useState, useEffect } from "react";
import { Todo } from "../core/models/todo.model";
import {
  completeTodo,
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../core/services/todoService";
import Card from "./Card";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };

  const handleCreateTodo = async () => {
    const todo = { name: newTodo, isCompleted: false };
    await createTodo(todo);
    setNewTodo("");
    fetchTodos();
  };

  const handleToggleComplete = async (id: number, isCompleted: boolean) => {
    await completeTodo(id, { isCompleted });
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted } : todo))
    );
    console.log("Updated todos:", todos); // Agregar log para verificar actualización de estado
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleCreateTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Card
              title={"Task " + todo.id}
              description={todo.name}
              aditionalProp={todo.isCompleted ? "Completed" : "Not Completed"}
              isChecked={todo.isCompleted }
              onCheckboxChange={() =>
                handleToggleComplete(todo.id!, !todo.isCompleted)
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
