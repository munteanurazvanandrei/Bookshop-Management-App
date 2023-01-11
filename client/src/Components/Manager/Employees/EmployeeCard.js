import React from "react";
import { FiEye } from "react-icons/fi";
import { SlNote } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";


function EmployeeCard({ employee, removeEmployee }) {
  return (
    <div className="employee card">
      {/* <div
        className="ui card"
        key={employee.id}
        onClick={() => {
          onSelectEmployee(employee);
        }}>
      </div> */}

      <h4>{employee.name}</h4>

      <div className="image">
        <img alt="" src={employee.avatar_url} />
      </div>

      <h4>{employee.sales}</h4>

      <div className="icons">

        <button className="eye outline"> <FiEye /> </button>
        <button className="slnote"> <SlNote />  </button>
        <button
            className="delete button"
            onClick={() => removeEmployee(employee.id)}
          >
            <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
