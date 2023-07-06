import './Task.css'
import { useState } from 'react'
import axios from 'axios'

export const NewTaskCard = () => {

    const [name, setName] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('less important')

    const handleSubmit = (e) => {
        e.preventDefault()
        const task = { name, body, priority }
        axios.post('/addTask', [name, body, priority])
            .then((res) => {

        }).catch(err => console.log(err))
        console.log(task)
        setName('')
        setBody('')
        setPriority('less important')
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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