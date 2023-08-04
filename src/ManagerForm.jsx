import  { useState } from 'react';
import { getToken } from './globals';

const ManagerForm = () => {
  const [name, setNameValue] = useState('');
  const [email, setEmailValue] = useState('');
  const [phoneNumber, setPhoneNumberValue] = useState('');
  const [birthDate, setBirthDateValue] = useState('');

  const handleNameInput = (event) => {
    setNameValue(event.target.value);
  };

  const handleEmailValue = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePhoneNumberValue = (event) => {
    setPhoneNumberValue(event.target.value);
  };

  const handleBirthDateValue = (event) => {
    setBirthDateValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      birthDate: birthDate,
    };
    
    fetch('http://localhost:5235/api/Admin/AddManager', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from the backend:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    setNameValue('');
    setEmailValue('');
    setPhoneNumberValue('');
    setBirthDateValue('');
  };

  return (
    <form className='manager-form'  onSubmit={handleSubmit}>
      <div>
        <div className="container">
          <span>Add Manager Form</span>
        </div>
        <br/>
        <div className="form-input">
          <label>
            Name:
          </label>
          <input type="text" value={name} onChange={handleNameInput} />
        </div>
        <div className='form-input'>
          <label> Email: </label>
            <input type="text" value={email} onChange={handleEmailValue} />
        </div>
      <div className='form-input'>
        <label>
          Phone Number:
        </label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberValue} />
      </div>
      <div className='form-input'>
        <label>
          Birth Date:
        </label>
          <input type="text" value={birthDate} onChange={handleBirthDateValue} />
      </div>
      </div>
      <div className="container">
        <button type="submit">Add Manager</button>
      </div>
    </form>
  );
};

export default ManagerForm;
