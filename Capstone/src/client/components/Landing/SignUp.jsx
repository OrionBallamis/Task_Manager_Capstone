import './Landing.css'
import { Link } from "react-router-dom"

export const SignUp = () => {

    return (
        <div className='LandingPage'>
            <div className='LandingContainer'>
                <h1 className='welcome'>Welcome</h1>
                <form className='SignUp'>
                    <input type="text" placeholder='Username' className='TextBox'/>
                        <br />
                    <input type="password" placeholder='Password' className='TextBox'/>
                        <br />
                    <Link to="/Log-In" className='AuthLinks'>Log In</Link>
                </form>
            </div>
        </div>
    )
}