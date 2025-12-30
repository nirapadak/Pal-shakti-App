import { Outlet, NavLink } from "react-router-dom";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="logo">Admin Panel</h2>

        <nav>
          <NavLink to="/admin" end>Dashboard</NavLink>
          <NavLink to="/admin/users">All Users</NavLink>
          <NavLink to="/admin/members">All Members</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-header">
          <h3>Dashboard Overview</h3>
          <button className="logout-btn">Logout</button>
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

export default AdminDashboard;
