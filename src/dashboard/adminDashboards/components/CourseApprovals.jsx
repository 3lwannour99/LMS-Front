import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
  Box,
} from "@mui/material";
import {
  VerifiedUser as ApproveIcon,
  Block as RejectIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import AdminDialog from "./AdminDialog";

const CourseApprovals = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  const pendingCourses = [
    {
      id: 1,
      name: "Advanced Python Programming",
      instructor: "Dr. Ahmed Khaled",
      submittedDate: "2025-06-12",
      category: "Programming",
      status: "Pending Review",
    },
    {
      id: 2,
      name: "Introduction to Quantum Computing",
      instructor: "Prof. Sarah Johnson",
      submittedDate: "2025-06-10",
      category: "Science",
      status: "Pending Review",
    },
    {
      id: 3,
      name: "Digital Marketing Fundamentals",
      instructor: "John Smith",
      submittedDate: "2025-06-08",
      category: "Business",
      status: "Pending Review",
    },
  ];

  const handleDialogOpen = (type, item) => {
    setDialogType(type);
    setCurrentItem(item);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card sx={{ borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" mb={3}>
            Pending Course Approvals
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Instructor</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Submitted Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pendingCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>{course.name}</TableCell>
                    <TableCell>{course.instructor}</TableCell>
                    <TableCell>{course.category}</TableCell>
                    <TableCell>{course.submittedDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={course.status}
                        color="warning"
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={1}>
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                          startIcon={<ApproveIcon />}
                          onClick={() =>
                            handleDialogOpen("approveCourse", course)
                          }
                        >
                          Approve
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          color="error"
                          startIcon={<RejectIcon />}
                          onClick={() =>
                            handleDialogOpen("rejectCourse", course)
                          }
                        >
                          Reject
                        </Button>
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<EditIcon />}
                          onClick={() => handleDialogOpen("viewCourse", course)}
                        >
                          View
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <AdminDialog
        open={openDialog}
        onClose={handleDialogClose}
        dialogType={dialogType}
        currentItem={currentItem}
      />
    </>
  );
};

export default CourseApprovals;
