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
			todos.map((todo) =>
				todo.id === id ? { ...todo, isCompleted } : todo
			)
		);
	};

	const handleDeleteTodo = async (id: number) => {
		await deleteTodo(id);
		fetchTodos();
	};

	return (
		<div>
			<h1 className="text-center font-bold text-2xl mb-4">Todo List</h1>
			<hr className="mb-4" />
			<button
				type="button"
				onClick={handleCreateTodo}
				className="float-right text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800
                shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2.5 mb-4">
				Add TODO
			</button>
			<input
				type="text"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
				placeholder="Add a new task"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
                rounded-lg focus:ring-blue-500 focus:border-blue-500
                w-full p-2.5
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
			<ul role="list">
				{todos.map((todo) => (
					<li className="flex justify-between gap-x-6 py-5" key={todo.id}>
						<Card
							title={"Task " + todo.id}
							description={todo.name}
							aditionalProp={
								todo.isCompleted ? "Completed" : "Not Completed"
							}
							isChecked={todo.isCompleted}
							onCheckboxChange={() =>
								handleToggleComplete(
									todo.id!,
									!todo.isCompleted
								)
							}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
