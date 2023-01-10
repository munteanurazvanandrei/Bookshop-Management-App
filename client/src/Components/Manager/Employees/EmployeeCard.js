import React from "react";
import { AiOutlineEye } from "react-icons/fa";
import { SlNote } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/fa";


function EmployeeCard({ employee, removeEmployee, onSelectEmployee }) {
  return (
    <div className="employee card">
      <div
        className="ui card"
        key={employee.id}
        onClick={() => {
          onSelectEmployee(employee);
        }}>
      </div>
      <div>{employee.name}</div>
      <div className="image">
        <img alt="employee's picture" src={employee.avatar_url} />
      </div>
      <div>{employee.sales}</div>
      <div className="icons">
        <button className="eye outline">
          <AiOutlineEye />
        </button>
        <button className="slnote">
          <SlNote />
        </button>
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
