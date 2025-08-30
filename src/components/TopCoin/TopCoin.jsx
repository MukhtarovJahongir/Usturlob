import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const TopCoin = () => {
  const students = [
    { id: 1, name: "Ali", coins: 980 },
    { id: 2, name: "Laylo", coins: 920 },
    { id: 3, name: "Jasur", coins: 870 },
    { id: 4, name: "Madina", coins: 800 },
    { id: 5, name: "Aziz", coins: 750 },
  ];

  return (
    <Box sx={{ p: 4, pr: 6 }}>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 4,
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          overflow: "hidden",
          p: 3,
          pr: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            p: 2,
            mb: 2,
            borderRadius: 2,
            fontWeight: "bold",
            textAlign: "center",
            background: "linear-gradient(135deg, #FFD700, #FFB300)",
            color: "#fff",
          }}
        >
          🏆 Eng ko‘p coin to‘plagan o‘quvchilar
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#FFF8E1" }}>
              <TableCell sx={{ fontWeight: "bold" }}>№</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ism</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Coins
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{
                  "&:nth-of-type(odd)": { background: "#FFFDE7" },
                  "&:hover": { background: "#FFF59D" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell align="right">{student.coins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopCoin;
