import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
} from "@mui/material";

const AssignmentsTab = ({ assignments, onViewAssignment, onSubmitAssignment }) => {
  return (
    <Card sx={{ borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={3}>
          My Assignments
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assignments.map((assignment) => (
                <TableRow key={assignment.id}>
                  <TableCell>{assignment.title}</TableCell>
                  <TableCell>{assignment.course}</TableCell>
                  <TableCell>{assignment.dueDate}</TableCell>
                  <TableCell>
                    <Chip
                      label={assignment.status}
                      color={
                        assignment.status === "Submitted" ? "success" : "warning"
                      }
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{assignment.grade}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        assignment.status === "Submitted"
                          ? onViewAssignment(assignment)
                          : onSubmitAssignment(assignment)
                      }
                    >
                      {assignment.status === "Submitted" ? "View" : "Submit"}
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

export default AssignmentsTab;