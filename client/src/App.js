import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import EmployeeDashboard from './Components/Employee/Dashboard/EmployeedDashboard';







function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
  <EmployeeDashboard/>
    </>
  );
}

export default App;
