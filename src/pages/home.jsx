import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div
        className="navBar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* LEFT SIDE TITLE */}
        <h2 style={{ margin: 0 }}>Apna Video Call</h2>

        {/* RIGHT SIDE ACTIONS */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* History */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              cursor: "pointer",
              color: "white",
            }}
            onClick={() => navigate("/history")}
          >
            <IconButton sx={{ color: "white" }}>
              <RestoreIcon />
            </IconButton>
            <span>History</span>
          </div>

          {/* Logout */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2563eb",
              textTransform: "none",
            }}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="meetContainer">
        <div className="leftPanel">
          <div>
            <h2>Providing Quality Video Call Just Like Quality Education</h2>

            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                onChange={(e) => setMeetingCode(e.target.value)}
                id="outlined-basic"
                label="Meeting Code"
                variant="outlined"
                sx={{
                  input: { color: "white" }, // 👈 text white
                  label: { color: "#3b82f6" }, // 👈 label blue
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#2563eb" }, // default border
                    "&:hover fieldset": { borderColor: "#3b82f6" }, // hover border
                    "&.Mui-focused fieldset": { borderColor: "#3b82f6" }, // focused border
                  },
                }}
              />
              <Button onClick={handleJoinVideoCall} variant="contained">
                Join
              </Button>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <img srcSet="/logo3.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
