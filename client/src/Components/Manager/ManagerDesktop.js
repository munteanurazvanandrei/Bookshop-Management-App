import AddOrEditEmployee from "./AddOrEdit/AddOrEditEmployee";
import AddOrEditItem from "./AddOrEdit/AddOrEditItem";
import Employees from "./Employees/Employees";
import Items from "./Items/Items";
import ManagerSideBar from "./ManagerSidebar/ManagerSidebar";
import EmployeeSales from "./EmployeeSales/EmployeeSales";
import { Route, Routes } from "react-router-dom";

import EditManagerProfile from "./AddOrEdit/EditManagerProfile";

export default function ManagerDesktop(){
    // manager's view for all desktops with the side bar
    return(<div className="manager-desktop">
    <ManagerSideBar managerName={"John"}/>
        <Routes>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/employees_sales" element={<EmployeeSales/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/add_or_edit_employee" element={<AddOrEditEmployee/>}/>
            <Route path="/add_or_edit_item" element={<AddOrEditItem/>}/>
            <Route path="/manager_profile" element={<EditManagerProfile/>}/>
        </Routes></div>)
}