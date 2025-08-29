import React from 'react';

export const Table = () => {

  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Moderator', status: 'Active' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', role: 'User', status: 'Pending' },
  ];

  return (
    <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
      <h3 style={{ marginBottom: '1rem' }}>User Table</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f4f4f4' }}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>{user.role}</td>
              <td style={tdStyle}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Styling sederhana
const thStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc',
};

const tdStyle = {
  padding: '12px',
  textAlign: 'left',
};

export default Table;
