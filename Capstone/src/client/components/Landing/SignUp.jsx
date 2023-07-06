import './Landing.css'
import { useRef, useState } from "react"
import axios from 'axios'

export const SignUp = (props) => {
    const regNameRef = useRef()
    const regPassRef = useRef()

    const handleSignUp = (e) => {
        e.preventDefault()
        let body = {
            username: regNameRef.current.value,
            password: regPassRef.current.value
        }
        console.log(body)
        axios.post('http://localhost:3000/signUp', body)
            .then((res) => {
                props.setAuth(true)
            }).catch(err => {
                alert('Cannot Register')
                console.log(err)
            })
    }

    return (
        <div className='LandingPage'>
            <div className='LandingContainer'>
                <h1 className='welcome'>Welcome</h1>
                <form className='SignUp' onSubmit={handleSignUp}>
                    <input 
                        type="text" 
                        placeholder='Username' 
                        className='TextBox'
                        ref={regNameRef}
                    />
                        <br />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        className='TextBox'
                        ref={regPassRef}
                    />
                        <br />
                    <button className='AuthLinks'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}