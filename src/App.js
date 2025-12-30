import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import './App.css';
import Home from './pages/Home/home';
import Register from "./pages/Register";

import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AllUsers from "./pages/AdminRoutes/AllUsers";
import AllMembers from "./pages/AdminRoutes/AllMembers";
import AdminNav from "./pages/AdminRoutes/AdminNav";
import Login from "./pages/Login";

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        


        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />

            </AdminRoute>
          }
        >
          <Route index element={<AdminNav />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="members" element={<AllMembers />} />
        </Route>



        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
