


import { Outlet, NavLink } from "react-router-dom";
import "../styles/AdminDashboard.css";
import UserTopNavbar from "./UserRoutes/UserTopNavbar";

const Dashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  console.log(user.name, user.role);




  return (
    <div className="user-layout">
      {/* Sidebar */}


      <UserTopNavbar />

      {/* <aside className="user-sidebar">
        <h2 className="logo">পাল শক্তি সমবায়</h2>

        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/" end>Dashboard</NavLink>
          <NavLink to="/book">Book</NavLink>
          <NavLink to="/">Members</NavLink>
          <button className="logout-btn">Logout</button>
        </nav>
      </aside> */}

      {/* Main Area */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-header">
          <h3>Dashboard Overview</h3>
         
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <h4>Total Users</h4>
            <p>128</p>
          </div>

          <div className="stat-card">
            <h4>Admins</h4>
            <p>5</p>
          </div>

          <div className="stat-card">
            <h4>Active Members</h4>
            <p>97</p>
          </div>

          <div className="stat-card">
            <h4>Books Issued</h4>
            <p>342</p>
          </div>
        </section>

        {/* Dynamic Pages */}
        <section className="admin-content">
          <Outlet />
        </section>
      </div>
    </div>
  );
};


export default Dashboard;