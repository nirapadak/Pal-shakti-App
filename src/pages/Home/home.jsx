import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

const Home = () => {


  const navigate = useNavigate();


  return (
    <div className="home-container">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">সমিতি পালপাড়ার</h1>
        <p className="subtitle">
          ঐক্য • উন্নয়ন • সহযোগিতা
        </p>

        <button className="home-btn"
          onClick={() => navigate("/register")}>
          আমাদের সাথে যোগ দিন
        </button>
        <button className="home-btn"
          onClick={() => navigate("/about")}>
          আমাদের সম্পর্কে
        </button>
      </div>
    </div>
  );
};

export default Home;
