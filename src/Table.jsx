import React from 'react';

function Table({ formData }) {
  const handleEdit = (index) => {
    // Edit logic here
    console.log(`Edit entry ${index}`);
  };

  const handleDelete = (index) => {
    // Delete logic here
    console.log(`Delete entry ${index}`);
  };

  return (
    <div>
      <h2>Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
