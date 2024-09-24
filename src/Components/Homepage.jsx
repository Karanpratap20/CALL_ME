import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Homepage = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/room/${input}`);
    }
  return <>
    <div class="wrapper">
        <h1>CALL ME</h1>
        <div class="input-box">
            <input value={input} onChange={(e)=> setInput(e.target.value)} 
            type="text" 
            placeholder="Enter your name"
            />
            <button class="btn" onClick={handleClick}>Join</button>
        </div>
    </div>
  </>
}

export default Homepage