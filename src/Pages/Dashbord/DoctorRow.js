import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({doctor, index, refetch,  setDeleteDoctor}) => {
    const {name, specialty, img, email, }= doctor;

  
    return (
        <tr>
        <th>{index + 1}</th>
        <td>
        <div className="avatar">
            <div className="w-8 rounded">
                <img src={img} alt={name} />
            </div>
        </div>    
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>
            <label onClick={()=> setDeleteDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">delete</label>
        </td>
        </tr>
    );
};

export default DoctorRow;