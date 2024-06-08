import axios from 'axios';
import { Todo } from '../models/todo.model';

const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});


export const getTodos = async (): Promise<Todo[]> => {
    const response = await apiClient.get('/todoitems');
    return response.data;
};

export const createTodo = async (todo: Todo): Promise<Todo> => {
    const response = await apiClient.post('/todoitems', todo);
    return response.data;
};

export const updateTodo = async (id: number, todo: Partial<Todo>): Promise<void> => {
    await apiClient.put(`/todoitems/${id}`, todo);
};

export const deleteTodo = async (id: number): Promise<void> => {
    await apiClient.delete(`/todoitems/${id}`);
};
