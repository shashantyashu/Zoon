// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import HomeIcon from "@mui/icons-material/Home";

// import { IconButton } from "@mui/material";
// export default function History() {
//   const { getHistoryOfUser } = useContext(AuthContext);

//   const [meetings, setMeetings] = useState([]);

//   const routeTo = useNavigate();

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const history = await getHistoryOfUser();
//         setMeetings(history);
//       } catch {
//         // IMPLEMENT SNACKBAR
//       }
//     };

//     fetchHistory();
//   }, []);

//   let formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = date.getDate().toString().padStart(2, "0");
//     const month = (date.getMonth() + 1).toString().padStart(2, "0");
//     const year = date.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

// //   return (
// //     <div>
// //       <IconButton
// //         onClick={() => {
// //           routeTo("/home");
// //         }}
// //       >
// //         <HomeIcon />
// //       </IconButton>
// //       {meetings.length !== 0 ? (
// //         meetings.map((e, i) => {
// //           return (
// //             <>
// //               <Card
// //                 key={i}
// //                 variant="outlined"
// //                 sx={{
// //                   backgroundColor: "#111827",
// //                   color: "white",
// //                   marginBottom: "15px",
// //                   border: "1px solid #2563eb",
// //                 }}
// //               >
// //                 <CardContent>
// //                   <Typography
// //                     sx={{ fontSize: 14 }}
// //                     color="text.secondary"
// //                     gutterBottom
// //                   >
// //                     Code: {e.meetingCode}
// //                   </Typography>

// //                   <Typography sx={{ mb: 1.5 }} color="text.secondary">
// //                     Date: {formatDate(e.date)}
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             </>
// //           );
// //         })
// //       ) : (
// //         <></>
// //       )}
// //     </div>
// //   );
// // }
// return (
//   <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", padding: 3 }}>
    
//     <IconButton
//       sx={{ color: "white", marginBottom: 2 }}
//       onClick={() => {
//         routeTo("/home");
//       }}
//     >
//       <HomeIcon />
//     </IconButton>

//     {meetings.length !== 0 ? (
//       meetings.map((e, i) => {
//         return (
//           <Card
//             key={i}
//             variant="outlined"
//             sx={{
//               backgroundColor: "#111827",
//               color: "white",
//               marginBottom: "15px",
//               border: "1px solid #2563eb",
//             }}
//           >
//             <CardContent>

//               <Typography
//                 sx={{
//                   fontSize: 16,
//                   color: "white",   // 👈 FIXED
//                   fontWeight: 500
//                 }}
//                 gutterBottom
//               >
//                 Code: {e.meetingCode}
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#93c5fd",  // 👈 Light blue for date
//                 }}
//               >
//                 Date: {formatDate(e.date)}
//               </Typography>

//             </CardContent>
//           </Card>
//         );
//       })
//     ) : (
//       <Typography sx={{ color: "white", textAlign: "center", mt: 5 }}>
//         No Meeting History Found
//       </Typography>
//     )}
//   </Box>
// );

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

export default function History() {
  const { getHistoryOfUser } = useContext(AuthContext);
  const [meetings, setMeetings] = useState([]);
  const routeTo = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const history = await getHistoryOfUser();
        setMeetings(history);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Box sx={{ backgroundColor: "#0f172a", minHeight: "100vh", padding: 3 }}>
      
      {/* Home Button */}
      <IconButton
        sx={{ color: "white", marginBottom: 2 }}
        onClick={() => routeTo("/home")}
      >
        <HomeIcon />
      </IconButton>

      {/* Meeting Cards */}
      {meetings.length !== 0 ? (
        meetings.map((e, i) => (
          <Card
            key={i}
            variant="outlined"
            sx={{
              backgroundColor: "#111827",
              color: "white",
              marginBottom: 2,
              border: "1px solid #2563eb",
              borderRadius: 2,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: 500,
                }}
                gutterBottom
              >
                Code: {e.meetingCode}
              </Typography>

              <Typography sx={{ color: "#93c5fd" }}>
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography sx={{ color: "white", textAlign: "center", mt: 5 }}>
          No Meeting History Found
        </Typography>
      )}
    </Box>
  );
}