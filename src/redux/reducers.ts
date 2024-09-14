import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, FETCH_TASKS } from './actions';
import { Task } from './types'; // Import Task type

const initialState: Task[] = [];

const taskReducer = (state = initialState, action: any): Task[] => {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload;
        case ADD_TASK:
            return [...state, action.payload];
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload);
        case TOGGLE_TASK:
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        default:
            return state;
    }
};

export default taskReducer;
