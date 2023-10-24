import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
    channel : '',
    hours : '',
    keyword : ''
  });
  const [responce_data, setResponce_data] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }) 
  }
  
    const handleSubmit = (e) => {
    e.preventDefault();
    SendDataTofastAPI(formData);
    console.log(formData);
    }

    const SendDataTofastAPI = async (data) => {
    const response = await fetch('http://127.0.0.1:8000/retreive_message', {
            method: 'POST',
            node: 'no-cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => data => {setResponce_data({data})})
        .catch(error => {
            console.error('Error:', error);
        });
    };
    
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

    if (responce_data=='') {
        return form
    } else {
        return (<p>Yooooooo</p>)
    }
    
    }

export default Form; 






function Paragraph(){
    return(
        <p>
            Yooooooooo
        </p>
    )


}