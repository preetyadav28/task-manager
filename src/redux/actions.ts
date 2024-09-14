import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { Task } from './types';

export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FETCH_TASKS = 'FETCH_TASKS';

export const addTask = (title: string) => ({
    type: ADD_TASK,
    payload: { title, completed: false, id: Date.now() }
});

export const deleteTask = (id: number) => ({
    type: DELETE_TASK,
    payload: id
});

export const toggleTask = (id: number) => ({
    type: TOGGLE_TASK,
    payload: id
});

export const fetchTasks = (): ThunkAction<void, Task[], unknown, any> => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
            dispatch({ type: FETCH_TASKS, payload: response.data });
        } catch (error) {
            console.error('Failed to fetch tasks', error);
        }
    };
};
