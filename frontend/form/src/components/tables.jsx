//This component will fetch and display the stored entries from the backend.

import React , {useState , useEffect} from 'react';
import axios from '../services/api';
import '../styles/styles.css'; 

const Table = () =>{
    const[data , setData]= useState([]);

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('http://localhost:5000/api/personalDetails');
                setData(response.data);
            } catch(err){
                console.log("Error fetching data:" , err);
            }
        };

        fetchData();
    } , []);

    return(
        <table border="1">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Pincode</th>
                    <th>10th Marks</th>
                    <th>12th Marks</th>
                    <th>College Marks</th>
                    <th>School Name</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item)=> (
                    <tr key = {item._id}>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td>{item.mobile}</td>
                        <td>{item.address}</td>
                        <td>{item.country}</td>
                        <td>{item.pincode}</td>
                        <td>{item.education.tenthMarks}</td>
                        <td>{item.education.twelfthMarks}</td>
                        <td>{item.education.collegeMarks}</td>
                        <td>{item.education.schoolName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;