import React, { useEffect, useState } from "react";
import { getAllMembers } from "../../services/adminService";
import "../../styles/AllMembers.css";

const AllMembers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllMembers();
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
      <h2>All Members</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>NID</th>
              <th>Address</th>
              <th>Father's Name</th>
              <th>Mother's Name</th>
              <th>Active</th>
              <th>Gender</th>
              <th>Created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td data-label="Name">{user.name}</td>
                <td data-label="Phone">{user.phone}</td>
                <td data-label="NID">{user.nidNumber}</td>
                <td data-label="Address">{user.address}</td>
                <td data-label="Father">{user.fatherName}</td>
                <td data-label="Mother">{user.motherName}</td>
                <td data-label="Status">{user.status}</td>
                <td data-label="Gender">{user.gender}</td>
                <td data-label="Created">
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

export default AllMembers;
