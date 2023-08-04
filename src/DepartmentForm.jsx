import  { useState, useEffect } from 'react';
import './styles.css'; 
import { getToken } from './globals';

const DepartmentForm = () => {
  const [departmentName, setDepartmentName] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectionOptionObject, setSelectedOptionObject] = useState({})
  
  useEffect(() => {
    fetch('http://localhost:5235/api/Admin/ListManagers', {
      headers: {
        'Authorization': 'Bearer ' + getToken()
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setSelectedOption(data.data.name);
        setDropdownOptions([...data.data.map(element => {
          return {
              id: element.id,
              value: element.id,
              label: element.name
          }
        })]);
      })
      .catch((error) => {
        console.error('Error fetching dropdown options:', error);
      });
  }, []);

  const handleInputChange1 = (event) => {
    setDepartmentName(event.target.value);
  };

  const handleDropdownChange = (event) => {
    const selectedOptionId = +event.target.value;
    const optionObject = dropdownOptions.find((option) => option.id == selectedOptionId);
    setSelectedOptionObject(optionObject)
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:5235/api/Admin/AddDepartment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + getToken()
      },
      body: JSON.stringify({name:departmentName, managerId:selectionOptionObject.id}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from the backend:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
    setDepartmentName('');
    setSelectedOption('');
  };

  return (
    <form className="dep-form" onSubmit={handleSubmit}>
    <div>
      <div className="container">
        <span>Add Department Form</span>
      </div>
      <br />
      <div className="form-body">
        <div className="form-input">
          <label>Name:</label>
          <input type="text" value={departmentName} onChange={handleInputChange1} />
        </div>
        <div className="form-input">
          <label>
            Manager:
          </label>
          <select value={selectedOption} onChange={handleDropdownChange}>
              <option value="">Select an option</option>
              {dropdownOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
        </div>
        <div className="container">
          <button type="submit">Add Department</button>
        </div>
      </div>
    </div>
    <div></div>
  </form>
  );
};

export default DepartmentForm;
