import './Home.css'
import { TaskCard } from '../../Task/NewTask'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {



    return (
        <div className='HomePage'>
            <TaskCard />
        </div>
    )
}