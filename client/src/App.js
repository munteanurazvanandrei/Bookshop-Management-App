import './App.css';
import {LandingPage} from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
