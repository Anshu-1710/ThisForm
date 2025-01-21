// src/components/Form.jsx

import React, { useState } from 'react';
import axios from '../services/api';

const Form = ({ onsubmitSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    mobile: '',
    address: '',
    country: '',
    pincode: '',
    education: {
      tenthMarks: '',
      twelfthMarks: '',
      collegeMarks: '',
      schoolName: '',
    },
  });

  const countries = ['USA', 'India', 'Canada', 'UK'];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith('education.')) {
      const field = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        education: { ...prev.education, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/personalDetails', formData);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        mobile: '',
        address: '',
        country: '',
        pincode: '',
        education: {
          tenthMarks: '',
          twelfthMarks: '',
          collegeMarks: '',
          schoolName: '',
        },
      });
      onsubmitSuccess();
    } catch (err) {
      console.log('Error submitting form:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
            required
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
            required
          />
          Female
        </label>
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="">Select Country</option>
          {countries.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>10th Marks:</label>
        <input
          type="text"
          name="education.tenthMarks"
          value={formData.education.tenthMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>12th Marks:</label>
        <input
          type="text"
          name="education.twelfthMarks"
          value={formData.education.twelfthMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>College Marks:</label>
        <input
          type="text"
          name="education.collegeMarks"
          value={formData.education.collegeMarks}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>School Name:</label>
        <input
          type="text"
          name="education.schoolName"
          value={formData.education.schoolName}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
