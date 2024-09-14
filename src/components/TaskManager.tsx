import { useState } from 'react';
import './TaskManager.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskManager = () => {
    const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
    const handleFilterChange = (updatedFilter: 'all' | 'completed' | 'pending') => {
        setFilter(updatedFilter);
    };

    return (
        <div className="task-manager">
            <div className="task-manager-header">
                <h1 className="task-manager-heading">Task Manager</h1>
                <div className="task-filter">
                    <select
                        value={filter}
                        onChange={(e) => handleFilterChange(e.target.value as 'all' | 'completed' | 'pending')}
                        className="filter-select"
                    >
                        <option value="all">All Tasks</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
            </div>
            <TaskInput />
            <TaskList filter={filter} />
        </div>
    );
};

export default TaskManager;
