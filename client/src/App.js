import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import AddOrEditEmployee from './Components/Manager/AddOrEdit/AddOrEditEmployee';


function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
    <AddOrEditEmployee/>
    </>
  );
}

export default App;
