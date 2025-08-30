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

const TopFighter = () => {
  const students = [
    { id: 1, name: "Jasur", wins: 15 },
    { id: 2, name: "Ali", wins: 12 },
    { id: 3, name: "Laylo", wins: 10 },
    { id: 4, name: "Aziz", wins: 9 },
    { id: 5, name: "Madina", wins: 7 },
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
            background: "linear-gradient(135deg, #E57373, #C62828)",
            color: "#fff",
          }}
        >
          ⚔️ Eng yaxshi jangchilar
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#FFEBEE" }}>
              <TableCell sx={{ fontWeight: "bold" }}>№</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ism</TableCell>
              <TableCell sx={{ fontWeight: "bold" }} align="right">
                G‘alabalar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{
                  "&:nth-of-type(odd)": { background: "#FFCDD2" },
                  "&:hover": { background: "#EF9A9A" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell align="right">{student.wins}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TopFighter;
