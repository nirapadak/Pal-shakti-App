import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bookNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password || !form.bookNumber) {
      return setError("সব ফিল্ড পূরণ করুন");
    }

    setLoading(true);

    try {
      const res = await registerUser(form);

      // ✅ SUCCESS CHECK
      // if (res.token && res.user) {
      //   // 🔐 Save token & user
      //   localStorage.setItem("token", res.token);
      //   localStorage.setItem("user", JSON.stringify(res.user));

      //   // 🚀 Redirect to user route
      //   navigate("/dashboard"); // or /user
      // } else {
      //   setError("রেজিস্ট্রেশন ব্যর্থ হয়েছে");
      // }



      if (res.token && res.user) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));

        // 🚀 ROLE BASED REDIRECT
        if (res.user.role === "1") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }






    } catch (err) {
      // ❌ SERVER DOWN / ERROR
      setError("Server is down. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>রেজিস্ট্রেশন</h2>
        <p className="subtitle">সমিতি পালপাড়ার সদস্য হোন</p>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="পূর্ণ নাম"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="ইমেইল"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="পাসওয়ার্ড"
            onChange={handleChange}
          />
          <input
            name="bookNumber"
            placeholder="বুক নাম্বার"
            onChange={handleChange}
          />

          <button disabled={loading}>
            {loading ? "লোড হচ্ছে..." : "রেজিস্টার করুন"}
          </button>
        </form>

        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
