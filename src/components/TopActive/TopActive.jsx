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

const TopActive = () => {
  const students = [
    { id: 1, name: "Laylo", activity: 95 },
    { id: 2, name: "Ali", activity: 92 },
    { id: 3, name: "Madina", activity: 90 },
    { id: 4, name: "Aziz", activity: 87 },
    { id: 5, name: "Jasur", activity: 85 },
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
            background: "linear-gradient(135deg, #81C784, #388E3C)",
            color: "#fff",
          }}
        >
          ⚡ Eng faol o‘quvchilar
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#E8F5E9" }}>
              <TableCell sx={{ fontWeight: "bold" }}>№</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ism</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                Faollik (%)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{
                  "&:nth-of-type(odd)": { background: "#F1F8E9" },
                  "&:hover": { background: "#C8E6C9" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell align="right">{student.activity}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopActive;
