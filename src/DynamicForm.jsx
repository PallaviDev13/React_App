import React, { useState, useEffect } from 'react';

// Simulated API Responses for different form types
const mockApiResponses = {
  userInformation: {
    fields: [
      { name: 'firstName', type: 'text', label: 'First Name', required: true },
      { name: 'lastName', type: 'text', label: 'Last Name', required: true },
      { name: 'age', type: 'number', label: 'Age', required: false },
    ]
  },
  addressInformation: {
    fields: [
      { name: 'street', type: 'text', label: 'Street', required: true },
      { name: 'city', type: 'text', label: 'City', required: true },
      { name: 'state', type: 'dropdown', label: 'State', options: ['California', 'Texas', 'New York'], required: true },
      { name: 'zipCode', type: 'text', label: 'Zip Code', required: false },
    ]
  },
  paymentInformation: {
    fields: [
      { name: 'cardNumber', type: 'text', label: 'Card Number', required: true },
      { name: 'expiryDate', type: 'date', label: 'Expiry Date', required: true },
      { name: 'cvv', type: 'password', label: 'CVV', required: true },
      { name: 'cardholderName', type: 'text', label: 'Cardholder Name', required: true },
    ]
  }
};

function DynamicForm({ formType, setFormData }) {
  const [fields, setFields] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  // Simulate an API call based on selected formType
  useEffect(() => {
    if (formType) {
      setFields(mockApiResponses[formType].fields);
    }
  }, [formType]);

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  // Form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate fields
    const newErrors = {};
    fields.forEach(field => {
      if (field.required && !formValues[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormData(prevData => [...prevData, formValues]);
      setFormValues({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name}>
          <label>{field.label}</label>
          {field.type === 'dropdown' ? (
            <select name={field.name} value={formValues[field.name] || ''} onChange={handleInputChange} required={field.required}>
              <option value="">Select a {field.label}</option>
              {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
              required={field.required}
            />
          )}
          {errors[field.name] && <span className="error">{errors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
