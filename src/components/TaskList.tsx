import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/actions';
import { BaseState, ThunkDispatchType } from '../redux/store';
import TaskItem from './TaskItem';
import './TaskList.css';

interface TaskListProps {
    filter: 'all' | 'completed' | 'pending';
}

const TaskList = ({ filter }: TaskListProps) => {
    const dispatch: ThunkDispatchType = useDispatch();
    const tasks = useSelector((state: BaseState) => state);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });

    return (
        <div className="task-list">
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;
