import React from "react";
import { FiEye } from "react-icons/fi";
import { SlNote } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";


function EmployeeCard({ employee, removeEmployee }) {
  return (
    <div className="employee card">
 
      <h4>{employee.name}</h4>

      <div className="image">
        <img alt="" src={employee.avatar_url} />
      </div>

      <h4>{employee.sales}</h4>

      <div className="icons">

        <h3 className="eye outline"> <FiEye /> </h3>
        <h3 className="slnote"> <SlNote />  </h3>
        <h3
            className="delete h3"
            onClick={() => removeEmployee(employee.id)}
          >
            <RiDeleteBinLine />
        </h3>
      </div>
    </div>
  );
}

export default EmployeeCard;
