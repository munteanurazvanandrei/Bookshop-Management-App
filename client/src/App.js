import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { Route,Routes } from 'react-router-dom';
import AddOrEditItem from './Components/Manager/AddOrEdit/AddOrEditItem';












function App() {
  return (
    <>
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
  <AddOrEditItem/>
    </>
  );
}

export default App;
