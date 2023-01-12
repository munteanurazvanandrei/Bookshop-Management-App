// import './App.css';
import EmployeeDashboard from './Components/Employee/Dashboard/EmployeedDashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import ManagerDashboard from './Components/Manager/Dashboard/ManagerDashboard';
import { Route, Routes } from 'react-router-dom';
import ManagerDesktop from './Components/Manager/ManagerDesktop';
import MakeASale from './Components/Employee/MakeASale/MakeASale';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
        <Route path="/sales_employee" element={<EmployeeDashboard/>}/>
        <Route path="/employee/make_sale" element={<MakeASale/>}/>
        <Route path="/manager" element={<ManagerDashboard/>}/>
        <Route path="/manager/*" element={<ManagerDesktop/>}/>
      </Routes>
    </div>
  );
}

export default App;
