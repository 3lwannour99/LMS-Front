import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const StudentProfile = ({ student }) => {
  return (
    <Box mb={4}>
      <Box display="flex" alignItems="center" gap={3} mb={4}>
        <Avatar
          src={student.avatar}
          sx={{
            width: 80,
            height: 80,
            fontSize: "2rem",
            bgcolor: "primary.main",
          }}
        >
          {student.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </Avatar>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome back, {student.name}!
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProfile;