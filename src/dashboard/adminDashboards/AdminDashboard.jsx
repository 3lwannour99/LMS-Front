import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Container,
  Paper,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import {
  People as PeopleIcon,
  School as InstructorIcon,
  Book as CourseIcon,
  CheckCircle,
  Warning,   // تم التعديل هنا
} from "@mui/icons-material";
import StatCard from "./components/StatCard";
import UserManagement from "./components/UserManagement";
import CourseApprovals from "./components/CourseApprovals";
import SystemReports from "./components/SystemReports";
import SystemHealth from "./components/SystemHealth";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Mock Data for admin
  const admin = {
    name: "Admin User",
    email: "admin@edusystem.com",
    avatar: "",
    joinDate: "January 2023",
    totalUsers: 1245,
    pendingCourses: 8,
    activeInstructors: 42,
    systemStatus: "All systems operational",
  };

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box mb={4}>
        <Box display="flex" alignItems="center" gap={3} mb={4}>
          <Avatar 
            src={admin.avatar} 
            sx={{ width: 80, height: 80, fontSize: '2rem', bgcolor: 'primary.main' }}
          >
            {admin.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Welcome, {admin.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              System Administrator since {admin.joinDate}
            </Typography>
          </Box>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Total Users" 
              value={admin.totalUsers} 
              icon={PeopleIcon}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Pending Courses" 
              value={admin.pendingCourses} 
              icon={CourseIcon}
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="Active Instructors" 
              value={admin.activeInstructors} 
              icon={InstructorIcon}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              title="System Status" 
              value={admin.systemStatus} 
              icon={admin.systemStatus === "All systems operational" ? CheckCircle : Warning}
              color={admin.systemStatus === "All systems operational" ? "info" : "error"}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Tabs Section */}
      <Paper sx={{ borderRadius: 2, mb: 4 }}>
        <Tabs 
          value={selectedTab} 
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="User Management" />
          <Tab label="Course Approvals" />
          <Tab label="System Reports" />
          <Tab label="System Health" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {selectedTab === 0 && <UserManagement />}
      {selectedTab === 1 && <CourseApprovals />}
      {selectedTab === 2 && <SystemReports />}
      {selectedTab === 3 && <SystemHealth />}
    </Container>
  );
};

export default AdminDashboard;
