import ManagerForm from "./ManagerForm.jsx";
import DepartmentForm from "./DepartmentForm.jsx";
import './styles.css'
import { useEffect } from "react";
import ManagersTable from "./ManagersTable.jsx";
import DepartmentsTable from "./DepartmentsTable.jsx";

const AdminPanel = () => {
    useEffect(() => {
        window.localStorage.getItem('isLoggedIn');
    }, [])
    return (
        <div className="dashboard-container">
        <h1>Welcome to the Admin Panel!</h1>
        <div className="admin-panel">
            <div className="section">
                <ManagerForm />
                <ManagersTable />
            </div>
            <div className="section">
                <DepartmentForm />
                <DepartmentsTable />
            </div>
        </div>
    </div>
    );
};

export default AdminPanel;
