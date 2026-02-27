import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate();
  const navigate = useNavigate();

  return (
    <div className="landingPageContainer">

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
        }}
      >
        {/* LEFT LOGO */}
        <h2 style={{ margin: 0 }}>Apna Video Call</h2>

        {/* RIGHT MENU */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <span style={{ cursor: "pointer" }} onClick={() => router("/aljk23")}>
            Join as Guest
          </span>

          <span style={{ cursor: "pointer" }} onClick={() => router("/auth")}>
            Register
          </span>

          <button
            onClick={() => router("/auth")}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              padding: "8px 18px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </nav>
      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved
            Ones
          </h1>

          <p>Cover a distance by Apna Video Call</p>
          <div role="button">
            <button className="getStartedBtn" onClick={() => navigate("/auth")}>
              Get Started
            </button>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
