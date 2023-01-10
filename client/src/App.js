import './App.css';
import EmployeeDashboard from './Components/Employee/Dashboard/EmployeedDashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import ManagerDashboard from './Components/Manager/Dashboard/ManagerDashboard';
import { Route, Routes } from 'react-router-dom';
import Employees from './Components/Manager/Employees/Employees'
import EmployeeCard from './Components/Manager/Employees/EmployeeCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
        <Route path="/sales_employee" element={<EmployeeDashboard/>}/>
        <Route path="/manager" element={<ManagerDashboard/>}/>
        <Route path= "employee" element= {<Employees/>}/>
        <Route path="/employeecard" elemnt={<EmployeeCard/>}/>
      </Routes>
      {/* <Employees></Employees> */}
    </div>
  );
}

export default App;
