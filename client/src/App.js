import './App.css';

import EmployeeDashboard from './Components/Employee/Dashboard/EmployeedDashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import ManagerDashboard from './Components/Manager/Dashboard/ManagerDashboard';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
        <Route path="/sales_employee" element={<EmployeeDashboard/>}/>
        <Route path="/manager" element={<ManagerDashboard/>}/>
      </Routes>
    </div>
  <ManagerDashboard/>
    </>
  );
}

export default App;
