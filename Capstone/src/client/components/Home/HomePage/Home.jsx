import './Home.css'
import { NewTaskCard } from '../../Task/NewTask'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import TaskCard from '../../Task/Task'


export const Home = () => {

    const [tasks, setTasks] = useState([])

    const handleDelete = (id) => {
        console.log(id)
        axios.post('/deleteTask',[ id ]).then((res) => {
            // const data = res.data
            setTasks(res.data)
        }).catch(err => alert('invalid field(s)'))
    }

    const allTaskHandler = (data) => {
        setTasks(data)
    }

    useEffect(() => {
        axios.get('/allTask').then((res) => {
            let data = res.data
            allTaskHandler(data)
            console.log(data)
        }).catch(err => console.log(err))

        console.log(tasks)
    }, [])

    return (
        <div className='HomePage'>
            <Header />
            <TaskCard tasks={tasks} handleDelete={handleDelete}/>
        </div>
    )
}