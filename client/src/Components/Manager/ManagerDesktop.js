import AddOrEditEmployee from "./AddOrEdit/AddOrEditEmployee";
import AddOrEditItem from "./AddOrEdit/AddOrEditItem";
import Employees from "./Employees/Employees";
import Items from "./Items/Items";
import ManagerSideBar from "./ManagerSidebar/ManagerSidebar";
import EmployeeSales from "./EmployeeSales/EmployeeSales";
import { Route, Routes } from "react-router-dom";
import "./managerDesktop.css";


export default function ManagerDesktop(){
    // manager's view for all desktops with the side bar
    return(<div className="manager-desktop">
    <ManagerSideBar managerName={"John"}/>
        <Routes>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/employees_sales" element={<EmployeeSales/>}/>
            <Route path="/employees" element={<Items/>}/>
            <Route path="/add_or_edit_employee" element={<AddOrEditEmployee/>}/>
            <Route path="/add_or_edit_item" element={<AddOrEditItem/>}/>
        </Routes></div>)
}