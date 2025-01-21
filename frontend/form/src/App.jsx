import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/tables"

const App = () => {
  const [isDataVisible, setIsDataVisible] = useState(false);

  const handleViewData = () => {
    setIsDataVisible(true);
  };

  return (
    <div>
      <h1>Personal and Education Details</h1>
      
      {/* Form Component for submitting data */}
      <Form onsubmitSuccess={handleViewData} />
      
      {/* Button to view the stored data in a table */}
      <button onClick={handleViewData}>View Data</button>
      
      {/* Display the Table only when isDataVisible is true */}
      {isDataVisible && <Table />}
    </div>
  );
};

export default App;
