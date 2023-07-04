import './Landing.css'
import { Link } from "react-router-dom"

export const Landing = () => {

    return (
        <div className='LandingPage'>
            <div className='LandingContainer'>
                <h1 className='welcome'>Welcome</h1>
                <div className='LogInSignUp'>
                    <Link to="/Log-In" className='AuthLinks'>Log In</Link>
                    <Link to="/Register" className='AuthLinks'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}