import './Landing.css'
import { Link } from "react-router-dom"

export const LogIn = () => {

    return (
        <div className='LandingPage'>
            <div className='LandingContainer'>
                <h1 className='welcome'>Welcome</h1>
                <form className='LogIn'>
                    <input type="text" placeholder='Username' className='TextBox'/>
                        <br />
                    <input type="password" placeholder='Password' className='TextBox'/>
                        <br />
                    <Link to="/register" className='AuthLinks'>Sign Up</Link>
                </form>
            </div>
        </div>
    )
}