import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import ManagerDashboard from './Components/Manager/Dashboard/ManagerDashboard';

function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
  <ManagerDashboard/>
    </>
  );
}

export default App;
