import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import EditManagerProfile from './AddOrEdit/EditManagerProfile';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
     <EditManagerProfile/>
    </>
  );
}

export default App;
