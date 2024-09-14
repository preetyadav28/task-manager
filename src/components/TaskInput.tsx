import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import './TaskInput.css';

const TaskInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            const taskTitle = inputRef.current.value.trim();
            if (taskTitle) {
                dispatch(addTask(taskTitle));
                inputRef.current.value = '';
            }
        }
    };

    return (
        <form className='task-input-form' onSubmit={handleSubmit}>
            <input 
                type="text" 
                ref={inputRef} 
                placeholder="Add a new task" 
                className="task-input"
            />
            <button type="submit" className="task-button">Add Task</button>
        </form>
    );
};

export default TaskInput;
