import { Link } from "react-router-dom";
import './Header.css'

const Header = ({setAuth}) => {
    return (
        <div className="headerPage">
            <header>
                <form>
                    <button 
                        onClick={() => setAuth(false)} 
                        className="signout"
                    >Sign Out
                    </button>
                </form>
                <h1>Welcome to Orion's Task Manager!</h1>
                <div className="hidden">hidden</div>
            </header>
            <div className="links">
                <Link to='/newTask' className="addTaskPage">Add a new Task</Link>
                <Link to='/home' className="addTaskPage">Task List</Link>
            </div>
        </div>
    );
}
 
export default Header;