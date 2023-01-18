import './App.css';
import { useEffect, useState } from 'react';
import EmployeeDashboard from './Components/Employee/Dashboard/EmployeedDashboard';
import LandingPage from './Components/LandingPage/LandingPage';
import ManagerDashboard from './Components/Manager/Dashboard/ManagerDashboard';
import { Route, Routes } from 'react-router-dom';
import ManagerDesktop from './Components/Manager/ManagerDesktop';
import MakeASale from './Components/Employee/MakeASale/MakeASale';
import Loader from './Components/Loader';
import Registration from './Components/SignInPage/RegistrationPage';
import SignIn from './Components/SignInPage/SignInPage';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role"); 
  useEffect(()=>{
  if(token){
    fetch("https://bma-server-production.up.railway.app/me",
    {headers:{"Authorization": `Bearer ${token}`,"role":role}})
    .then(r=>{
      if(r.ok){
        r.json().then(data=>{localStorage.setItem("user", JSON.stringify(data)); setLoggedIn(true)})
      }
    })
  }},[])
  return (
    <>
    
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        {role==="manager"?<>
          <Route path="/dash" element={loggedIn? <ManagerDashboard setLoggedIn={setLoggedIn}/>:<Loader/>}/>
          <Route path="/dash/*" element={loggedIn? <ManagerDesktop setLoggedIn={setLoggedIn}/>:<Loader/>}/>
        </>:<>
          <Route path="/dash" element={loggedIn?<EmployeeDashboard setLoggedIn={setLoggedIn}/>:<>Kindly Login</>}/>
          <Route path="/make_sale" element={loggedIn? <MakeASale setLoggedIn={setLoggedIn}/>:<Loader/>}/>
        </>}
          <Route path='/signup' element={loggedIn?<>Already LoggedIn<Loader/></>:<Registration setLoggedIn={setLoggedIn}/>} />
          <Route path='/signin' element={loggedIn?<>Already LoggedIn<Loader/></>:<SignIn setLoggedIn={setLoggedIn}/>} />
      </Routes>
    </div>

    </>
  );
}

export default App;
