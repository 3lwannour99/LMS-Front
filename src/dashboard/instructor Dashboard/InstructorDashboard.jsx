import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tabs,
  Tab
} from "@mui/material";
import { MoreVert as MoreIcon } from "@mui/icons-material";
import InstructorProfile from "./InstructorProfile";
import StatCard from "./StatsCard";
import CoursesTab from "./CoursesTab";
import SubmissionsTab from "./SubmissionsTab";
import AnalyticsTab from "./AnalyticsTab";
import CourseMenu from "./CourseMenu";
import CourseDialog from "./CourseDialog";
import {
  Book as BookIcon,
  People as PeopleIcon,
  Star
} from "@mui/icons-material";

const InstructorDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [currentCourse, setCurrentCourse] = useState(null);
  
  const open = Boolean(anchorEl);

  // Mock Data for instructor
  const instructor = {
    name: "Dr. Ahmed Khaled",
    email: "ahmed.khaled@instructor.com",
    avatar: "",
    totalCourses: 8,
    totalStudents: 245,
    activeCourses: 5,
    averageRating: 4.7,
  };

  const courses = [
    {
      id: 1,
      name: "JavaScript Fundamentals",
      students: 85,
      modules: 6,
      status: "Published",
      lastUpdated: "2025-05-15",
    },
    {
      id: 2,
      name: "Advanced React Patterns",
      students: 42,
      modules: 5,
      status: "Published",
      lastUpdated: "2025-04-28",
    },
    {
      id: 3,
      name: "Node.js Backend Mastery",
      students: 63,
      modules: 7,
      status: "Published",
      lastUpdated: "2025-06-02",
    },
    {
      id: 4,
      name: "Python for Data Science",
      students: 0,
      modules: 4,
      status: "Draft",
      lastUpdated: "2025-06-10",
    },
  ];

  const submissions = [
    {
      id: 1,
      student: "Nour Ahmad",
      course: "JavaScript Fundamentals",
      assignment: "Final Project",
      submittedDate: "2025-06-12",
      status: "Submitted",
      grade: "-",
    },
    {
      id: 2,
      student: "Mohammed Ali",
      course: "Advanced React Patterns",
      assignment: "Component Design",
      submittedDate: "2025-06-10",
      status: "Graded",
      grade: "92/100",
    },
    {
      id: 3,
      student: "Sarah Johnson",
      course: "Node.js Backend Mastery",
      assignment: "API Implementation",
      submittedDate: "2025-06-08",
      status: "Submitted",
      grade: "-",
    },
  ];

  const analytics = [
    {
      id: 1,
      course: "JavaScript Fundamentals",
      completionRate: 78,
      avgScore: 85,
      activeStudents: 65,
    },
    {
      id: 2,
      course: "Advanced React Patterns",
      completionRate: 85,
      avgScore: 89,
      activeStudents: 38,
    },
    {
      id: 3,
      course: "Node.js Backend Mastery",
      completionRate: 72,
      avgScore: 83,
      activeStudents: 45,
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMenuClick = (event, course) => {
    setAnchorEl(event.currentTarget);
    setCurrentCourse(course);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDialogOpen = (type) => {
    setDialogType(type);
    setOpenDialog(true);
    handleMenuClose();
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <InstructorProfile instructor={instructor} />

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Courses" 
            value={instructor.totalCourses} 
            icon={BookIcon}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Total Students" 
            value={instructor.totalStudents} 
            icon={PeopleIcon}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Active Courses" 
            value={instructor.activeCourses} 
            icon={BookIcon}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard 
            title="Average Rating" 
            value={instructor.averageRating} 
            icon={Star}
            color="info"
          />
        </Grid>
      </Grid>

      {/* Tabs Section */}
      <Paper sx={{ borderRadius: 2, mb: 4 }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="My Courses" />
          <Tab label="Submissions" />
          <Tab label="Analytics" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <CoursesTab 
          courses={courses} 
          handleDialogOpen={handleDialogOpen} 
          handleMenuClick={handleMenuClick}
        />
      )}

      {selectedTab === 1 && (
        <SubmissionsTab submissions={submissions} />
      )}

      {selectedTab === 2 && (
        <AnalyticsTab analytics={analytics} />
      )}

      <CourseMenu
        anchorEl={anchorEl}
        open={open}
        handleMenuClose={handleMenuClose}
        handleDialogOpen={handleDialogOpen}
        currentCourse={currentCourse}
      />

      <CourseDialog
        openDialog={openDialog}
        handleDialogClose={handleDialogClose}
        dialogType={dialogType}
        currentCourse={currentCourse}
      />
    </Container>
  );
};

export default InstructorDashboard;