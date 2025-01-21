//This is the main application file that combines the Form and Table components.
import React from 'react';
import Form from './components/Form.jsx';
import Table from './components/tables.jsx';
import './styles/styles.css'

const App = () =>{
  const [refresh , setRefersh] = React.useState(false);

  const handleRefresh = () =>{
    setRefersh((prev) => (!prev));
  };

  return (
    <div>
      <h1>Personal Details Form</h1>
      <Form onsubmitSuccess={handleRefresh} />
      <h2>Stored Details</h2>
      <Table key={refresh} />
    </div>

  )
}

export default App;