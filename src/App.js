import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    channel : '',
    hours : '',
    keyword : ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }) 
  }
  
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
 
}

  let form = <form className="querry" onSubmit={handleSubmit}>
    <div className='form-row'>
      <label htmlFor='channel'>channel</label>
      <input type='text' id="channel" name="channel" onChange={handleChange}></input>
      <label htmlFor='hours'>hours</label>
      <input type='text' id="hours" name="hours" onChange={handleChange}></input>
      <label htmlFor='keyword'>keyword</label>
      <input type='text' id="keyword" name="keyword" onChange={handleChange}></input>
    </div>
    <button className='btn'>
      Scrape
    </button>

  </form>
  
  return form
}

export default App;
