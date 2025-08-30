import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Modal,
} from "@mui/material";
import "./DemoList.css";

const DemoList = ({ open, onClose }) => {
  const demoStudents = [
    { name: "Ali", points: 980 },
    { name: "Laylo", points: 870 },
    { name: "Jasur", points: 920 },
    { name: "Madina", points: 860 },
    { name: "Sherzod", points: 830 },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="demo-modal">
        <Typography variant="h6" className="demo-title">
          🏅 Demo Top O‘quvchilar
        </Typography>
        <List>
          {demoStudents.map((student, index) => (
            <ListItem key={index} className="demo-item">
              <Avatar className="demo-avatar">{index + 1}</Avatar>
              <ListItemText
                primary={student.name}
                secondary={`Ball: ${student.points}`}
              />
            </ListItem>
          ))}
        </List>
        <Typography className="demo-close" onClick={onClose}>
          ❌ Yopish
        </Typography>
      </Box>
    </Modal>
  );
};

export default DemoList;
