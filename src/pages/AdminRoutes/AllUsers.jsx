import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/adminService";
import "../../styles/AllUsers.css";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data.data);
        console.log(data)
      } catch (err) {
        setError("Server is down");
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="status">Loading...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="users-container">
      <h2>All Users</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Book No</th>
              <th>Role</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.bookNumber}</td>
                <td>
                  <span
                    className={
                      user.role === "1"
                        ? "role admin"
                        : "role user"
                    }
                  >
                    {user.role === "1" ? "Admin" : "User"}
                  </span>
                </td>
                <td>
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
