import React from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Chip
} from "@mui/material";
import { Grading as GradingIcon } from "@mui/icons-material";

const SubmissionsTab = ({ submissions }) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Student Submissions
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Assignment</TableCell>
                <TableCell>Submitted Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{submission.student}</TableCell>
                  <TableCell>{submission.course}</TableCell>
                  <TableCell>{submission.assignment}</TableCell>
                  <TableCell>{submission.submittedDate}</TableCell>
                  <TableCell>
                    <Chip 
                      label={submission.status} 
                      color={submission.status === 'Submitted' ? 'primary' : 'success'}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{submission.grade}</TableCell>
                  <TableCell>
                    <Button 
                      size="small" 
                      variant="outlined" 
                      startIcon={<GradingIcon />}
                    >
                      {submission.status === 'Submitted' ? 'Grade' : 'View'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default SubmissionsTab;