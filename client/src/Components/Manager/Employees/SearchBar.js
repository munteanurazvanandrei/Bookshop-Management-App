import React, { useState } from "react";

const searchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    employees.filter((employee) => {
      return employee.name.match(searchInput);
    });
  }

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />

      <table>
        <tr>
          <th>employee</th>
        </tr>

        {employees.map((employee) => {
          <div>
            <tr>
              <td>{employee.name}</td>
            </tr>
          </div>;
        })}
      </table>
    </div>
  );
};

export default searchBar;

