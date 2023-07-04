import './Task.css'
import { useState } from 'react'
import axios from 'axios'

export const TaskCard = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('less important')

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = { title, body, priority }

        console.log(task)
    }

    return (
        <div className="TaskContainer">
            <h2>Add Task:</h2>
            <form 
                className='TaskName'
                onSubmit={handleSubmit}
            >
                <label>Task Name:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Task:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Priority:</label>
                <select 
                    className='priority'
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value='important'>Important</option>
                    <option value='less important'>Less Important</option>
                </select>
            <button>Add Task</button>
            </form>
        </div>
    );
}