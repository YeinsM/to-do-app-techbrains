import axios from 'axios';
import { Todo } from '../models/todo.model';

const apiClient = axios.create({
    baseURL: 'https://turbo-space-dollop-qg6g4q6655529rg-5201.app.github.dev/api',
    headers: {
        'Content-Type': 'application/json'
    }
});


export const getTodos = async (): Promise<Todo[]> => {
    const response = await apiClient.get('/todos');
    return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
    const response = await apiClient.post('/todos', todo);
    return response.data;
};

export const updateTodo = async (id: number, todo: Partial<Todo>): Promise<void> => {
    await apiClient.put(`/todos/${id}`, todo);
};

export const deleteTodo = async (id: number): Promise<void> => {
    await apiClient.delete(`/todois/${id}`);
};

export const completeTodo = async (id: number, todo: Partial<Todo>): Promise<void> => {
    await apiClient.patch(`/todos/${id}/toggle`, todo);
};