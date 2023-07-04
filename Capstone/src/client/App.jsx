import "./App.css";
import { Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing/Landing'
import { Home } from './components/Home/HomePage/Home'
import { LogIn } from "./components/Landing/Login";
import { SignUp } from "./components/Landing/SignUp";
import { NewTask } from './components/Task/NewTask'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/newTask" element={<NewTask />} />
      </Routes>
    </div>
  );
}

export default App;
