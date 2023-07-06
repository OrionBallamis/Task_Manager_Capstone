import './Task.css'
import { useEffect } from 'react';

const TaskCard = ({ tasks, handleDelete }) => {
    useEffect(() => {
        console.log(tasks)
    }, [])

    return (
         <div className='ListContainer'>
            {tasks.map((task) => (
                <div className="TaskListContainer">
                    <div className="taskPreview" key={task.id}>
                        <h2>{ task.name }</h2>
                        <p>{ task.body }</p>
                        <p>Priority: { task.priority }</p>
                        <button 
                            className='DeleteBtn' 
                            onClick={() => handleDelete(task.id)}
                        >
                            Delete Task
                        </button>
                    </div>
                </div>
            ))}
         </div>
    );
}
 
export default TaskCard;