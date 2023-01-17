import "../AdminStyles/AdminHomePage.css";
import admins from "../db.json";
import { SingleAdmin } from "./SingleAdminPage";
import { AdminSideNavbar } from "./AdminSideNavbar";

// console.log(admins.admins);

const AdminHomePage = () => {
    return (
        <div className="adminHomeContainer">
            <div>
                <AdminSideNavbar/>
            </div>
            <div className="admin_grid_container">
                {
                    admins.admins.length && admins.admins.map((item) => {
                       return (
                            <SingleAdmin 
                                key={item.id} 
                                username={item.username}
                                email={item.email}
                                adminID={item.adminID}
                            />
                       );
                    })
                }
            </div>
        </div>
    );
};

export {AdminHomePage};