import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import ProgressBar from './ProgressBar';
import Table from './Table';

function App() {
  const [formData, setFormData] = useState([]);
  const [formType, setFormType] = useState('');

  // Handle form type selection
  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Dynamic Form Implementation</h1>
      </header>

      {/* Dropdown to select form type */}
      <select onChange={handleFormTypeChange} value={formType}>
        <option value="">Select a Form Type</option>
        <option value="userInformation">User Information</option>
        <option value="addressInformation">Address Information</option>
        <option value="paymentInformation">Payment Information</option>
      </select>

      {/* Progress Bar */}
      {formType && <ProgressBar />}

      {/* Dynamic Form */}
      {formType && <DynamicForm formType={formType} setFormData={setFormData} />}

      {/* Display submitted form data */}
      <Table formData={formData} />
    </div>
  );
}

export default App;
