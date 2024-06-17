"use client"; // Marcar este archivo como un componente del cliente
import { useState, useEffect } from 'react';
import { Todo } from '../core/models/todo.model';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../core/services/todoService';
import Card from './Card';

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const todos = await getTodos();
        setTodos(todos);
    };

    const handleCreateTodo = async () => {
        const todo = { name: newTodo, isComplete: false };
        await createTodo(todo);
        setNewTodo('');
        fetchTodos();
    };

    const handleToggleComplete = async (id: number, isComplete: boolean) => {
        await updateTodo(id, { isComplete });
        fetchTodos();
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
                            aditionalProp={todo.isComplete ? 'Completed' : 'Not Completed'}
                        />
                    </li>
                    // <li key={todo.id}>
                    //     <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
                    //         {todo.name}
                    //     </span>
                    //     <button onClick={() => handleToggleComplete(todo.id!, !todo.isComplete)}>
                    //         {todo.isComplete ? 'Undo' : 'Complete'}
                    //     </button>
                    //     <button onClick={() => handleDeleteTodo(todo.id!)}>Delete</button>
                    // </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;