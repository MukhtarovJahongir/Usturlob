import React from "react";
import { FaMedal } from "react-icons/fa";
const medal = <FaMedal />;
import {
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
import { FaCoins, FaRunning } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import "./StudentDashboardPanel.css";

const StyledCard = styled(Card)(({ bg, icon }) => ({
  position: "relative",
  overflow: "hidden",
  background: bg || "#fff",
  borderRadius: 20,
  minHeight: 220,
  color: "#fff",
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-10%",
    right: "-10%",
    width: "250px",
    height: "250px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "50%",
    zIndex: 0,
    maskImage: icon ? `url(${icon})` : "none",
    WebkitMaskImage: icon ? `url(${icon})` : "none",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  },
}));

const StudentDashboardPanel = () => {
  const navigate = useNavigate();
  const level = 12;

  const topStudents = {
    coins: { name: "Ali", points: 980 },
    active: { name: "Laylo", points: 870 },
    fighter: { name: "Jasur", points: 920 },
  };

  const homework = "Kasrlarni qo‘shish va ayirish";

  return (
    <Box className="dashboard-wrap" sx={{ width: "100%", p: 2 }}>
      {/* Flex Layout */}
      <Box sx={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <StyledCard
            bg="linear-gradient(135deg, #42a5f5, #1e88e5)"
            icon="https://static.thenounproject.com/png/1587734-200.png"
          >
            <CardContent>
              <Typography variant="h6" className="title">
                🏆 Top O‘quvchilar
              </Typography>
              <List>
                <ListItem
                  button
                  onClick={() => navigate("/TopCoin")}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#FFD700" }}>
                      <FaCoins />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={topStudents.coins.name}
                    secondary={`Eng ko‘p koin: ${topStudents.coins.points}`}
                  />
                </ListItem>

                <ListItem
                  button
                  onClick={() => navigate("/TopActive")}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#81C784" }}>
                      <FaRunning />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={topStudents.active.name}
                    secondary={`Eng faol: ${topStudents.active.points}`}
                  />
                </ListItem>

                <ListItem
                  button
                  onClick={() => navigate("/TopFighter")}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#EF5350" }}>
                      <GiCrossedSwords />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={topStudents.fighter.name}
                    secondary={`Eng yaxshi jangchi: ${topStudents.fighter.points}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </StyledCard>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            flex: 2,
            minWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {/* Level */}
          <Box>
            <Typography variant="h6" className="level-title">
              🎯 Sizning Levelingiz: {level}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{ height: 12, borderRadius: 6 }}
            />
          </Box>

          {/* Cards */}
          <Box sx={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            <StyledCard
              bg="linear-gradient(135deg, #ff7043, #f4511e)"
              icon="https://cdn-icons-png.flaticon.com/512/616/616490.png"
              onClick={() => navigate("/competition")}
              sx={{ flex: 1, cursor: "pointer" }}
            >
              <CardContent>
                <Typography variant="h6" className="title">
                  ⚔️ Real Vaqtda Raqobat
                </Typography>
                <Box className="card-icon">
                  <GiCrossedSwords />
                </Box>
              </CardContent>
            </StyledCard>

            <StyledCard
              bg="linear-gradient(135deg, #66bb6a, #43a047)"
              icon="https://static.vecteezy.com/system/resources/previews/023/221/041/non_2x/open-book-school-supply-icon-free-png.png"
              sx={{ flex: 1 }}
            >
              <CardContent>
                <Typography variant="h6" className="title">
                  📚 Uyga Vazifa
                </Typography>
                <Typography variant="body1">{homework}</Typography>
              </CardContent>
            </StyledCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDashboardPanel;
