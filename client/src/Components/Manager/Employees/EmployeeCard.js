import React from "react";
import { FiEye } from "react-icons/fi";
import { SlNote } from "react-icons/sl";
import { RiDeleteBinLine } from "react-icons/ri";

function EmployeeCard({ employee, deleteEmployee }) {
  return (
    <>
      <div className="employee card">
        <p>{employee.name}</p>
        <img alt="" src={employee.avatar_url} />
        <p>{employee.sales}</p>
        <button className="eye outline">
          {" "}
          <FiEye />{" "}
        </button>
        <button className="slnote">
          {" "}
          <SlNote />{" "}
        </button>
        <button
          className="delete button"
          onClick={() => deleteEmployee(employee.id)}
        >
          <RiDeleteBinLine />
        </button>
      </div>
    </>
  );
}

export default EmployeeCard;
