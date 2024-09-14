import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions';
import './TaskItem.css'

interface TaskProps {
    task: {
        id: number;
        title: string;
        completed: boolean;
    };
}

const TaskItem = ({ task }: TaskProps) => {
    const dispatch = useDispatch();
    const handleToggle = () => dispatch(toggleTask(task.id));
    const handleDelete = () => dispatch(deleteTask(task.id));

    return (
        <div className='task-item'>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={handleToggle}
                className='text-checkbox' 
            />
            <span className={task.completed ? 'task-text completed' : 'task-text'}>
                {task.title}
            </span>
            <button onClick={handleDelete} className='task-delete-button'>Delete</button>
        </div>
    );
};

export default TaskItem;
