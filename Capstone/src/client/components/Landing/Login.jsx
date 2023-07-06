import './Landing.css'
import { useRef, useState } from "react"
import axios from 'axios'

export const LogIn = (props) => {
    const loginNameRef = useRef()
    const loginPassRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        let body = {
            username: loginNameRef.current.value,
            password: loginPassRef.current.value
        }
        axios.post('http://localhost:3000/login', body)
            .then((res) => {
                props.setAuth(true)
            }).catch(err => alert('Login Failed'))
    }


    return (
        <div className='LandingPage'>
            <div className='LandingContainer'>
                <h1 className='welcome'>Welcome</h1>
                <form className='LogIn' onSubmit={handleLogin}>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        className='TextBox'
                        ref={loginNameRef}
                    />
                        <br />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='TextBox'
                        ref={loginPassRef}
                    />
                        <br />
                    <button className='AuthLinks'>Log In</button>
                </form>
            </div>
        </div>
    )
}