import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom'
import { Landing } from './components/Landing/Landing'
import { Home } from './components/Home/HomePage/Home'
import { LogIn } from "./components/Landing/Login";
import { SignUp } from "./components/Landing/SignUp";
import NewTaskPage from './components/Home/HomePage/NewTaskPage'
import { useState } from "react";


function App() {
  const [auth, setAuth] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={!auth ? <Landing /> : <Navigate to='/newTask' />} />
        <Route path="/home" element={auth ? <Home setAuth={setAuth}/> : <Navigate to='/' />} />
        <Route path="/log-in" element={!auth ? <LogIn setAuth={setAuth}/> : <Navigate to='/newTask' />} />
        <Route path="/register" element={!auth ? <SignUp setAuth={setAuth}/> : <Navigate to='/newTask' />} />
        <Route path="/newTask" element={auth ?<NewTaskPage /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
