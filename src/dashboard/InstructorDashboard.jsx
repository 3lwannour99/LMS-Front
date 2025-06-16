import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Grid,
  Avatar,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Container,
  Tab,
  Tabs,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Book as BookIcon,
  People as PeopleIcon,
  Assessment as AnalyticsIcon,
  Grading as GradingIcon,
  Add as AddIcon,
  MoreVert as MoreIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Publish as PublishIcon,
  CheckCircle,
  InsertDriveFile as FileIcon,
  Quiz as QuizIcon,
  VideoLibrary as VideoIcon,
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
    joinDate: "January 2023",
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
      rating: 4.8,
      lastUpdated: "2025-05-15",
    },
    {
      id: 2,
      name: "Advanced React Patterns",
      students: 42,
      modules: 5,
      status: "Published",
      rating: 4.9,
      lastUpdated: "2025-04-28",
    },
    {
      id: 3,
      name: "Node.js Backend Mastery",
      students: 63,
      modules: 7,
      status: "Published",
      rating: 4.6,
      lastUpdated: "2025-06-02",
    },
    {
      id: 4,
      name: "Python for Data Science",
      students: 0,
      modules: 4,
      status: "Draft",
      rating: 0,
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

  const StatCard = ({ title, value, icon: IconComponent, color = "primary" }) => (
    <Card sx={{ minHeight: '100%', borderRadius: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2}>
          <Avatar sx={{ bgcolor: `${color}.light`, color: `${color}.dark` }}>
            <IconComponent />
          </Avatar>
          <Box>
            <Typography variant="h6" color="text.secondary">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box mb={4}>
        <Box display="flex" alignItems="center" gap={3} mb={4}>
          <Avatar 
            src={instructor.avatar} 
            sx={{ width: 80, height: 80, fontSize: '2rem', bgcolor: 'primary.main' }}
          >
            {instructor.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="bold">
              Welcome, {instructor.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Instructor since {instructor.joinDate}
            </Typography>
          </Box>
        </Box>

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
      </Box>

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
        <>
          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Button 
              variant="contained" 
              startIcon={<AddIcon />}
              onClick={() => handleDialogOpen("create")}
            >
              Create New Course
            </Button>
          </Box>
          
          <Grid container spacing={3}>
            {courses.map((course) => (
              <Grid item xs={12} md={6} key={course.id}>
                <Card sx={{ height: '100%', borderRadius: 2 }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Typography variant="h6" fontWeight="bold" mb={1}>
                          {course.name}
                        </Typography>
                        <Chip 
                          label={course.status} 
                          color={course.status === "Published" ? "success" : "default"} 
                          size="small"
                          sx={{ mb: 1 }}
                        />
                      </Box>
                      <IconButton
                        aria-label="more"
                        aria-controls="course-menu"
                        aria-haspopup="true"
                        onClick={(e) => handleMenuClick(e, course)}
                      >
                        <MoreIcon />
                      </IconButton>
                    </Box>

                    <Box display="flex" gap={3} my={2}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{course.students}</strong> Students
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{course.modules}</strong> Modules
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>{course.rating}</strong> ★
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" mb={2}>
                      Last updated: {course.lastUpdated}
                    </Typography>

                    <Box display="flex" gap={2}>
                      <Button
                        variant="outlined"
                        startIcon={<EditIcon />}
                        onClick={() => handleDialogOpen("edit")}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<PeopleIcon />}
                      >
                        View Students
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {selectedTab === 1 && (
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
      )}

      {selectedTab === 2 && (
        <Grid container spacing={3}>
          {analytics.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <Card sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={2}>
                    {course.course}
                  </Typography>
                  
                  <Box mb={3}>
                    <Typography variant="body2" mb={1}>
                      Completion Rate: {course.completionRate}%
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.completionRate}
                      sx={{ height: 8, borderRadius: 4, mb: 2 }}
                    />
                    
                    <Typography variant="body2" mb={1}>
                      Average Score: {course.avgScore}/100
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={course.avgScore}
                      sx={{ height: 8, borderRadius: 4, mb: 2 }}
                    />
                    
                    <Typography variant="body2">
                      Active Students: {course.activeStudents}
                    </Typography>
                  </Box>
                  
                  <Button
                    variant="outlined"
                    startIcon={<AnalyticsIcon />}
                    fullWidth
                  >
                    View Detailed Analytics
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Course Menu */}
      <Menu
        id="course-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleDialogOpen("edit")}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit Course
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("publish")}>
          <ListItemIcon>
            <PublishIcon fontSize="small" />
          </ListItemIcon>
          {currentCourse?.status === "Published" ? "Unpublish" : "Publish"}
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("delete")}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography color="error">Delete Course</Typography>
        </MenuItem>
      </Menu>

      {/* Course Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {dialogType === "create" && "Create New Course"}
          {dialogType === "edit" && `Edit Course: ${currentCourse?.name}`}
          {dialogType === "publish" && `${currentCourse?.status === "Published" ? "Unpublish" : "Publish"} Course`}
          {dialogType === "delete" && "Delete Course"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "delete" ? (
            <Typography>
              Are you sure you want to delete "{currentCourse?.name}"? This action cannot be undone.
            </Typography>
          ) : dialogType === "publish" ? (
            <Typography>
              {currentCourse?.status === "Published" 
                ? "Are you sure you want to unpublish this course? Students will no longer be able to access it."
                : "Publish this course to make it available to students."}
            </Typography>
          ) : (
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Course Name"
                defaultValue={dialogType === "edit" ? currentCourse?.name : ""}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="Description"
                multiline
                rows={4}
              />
              <Box display="flex" gap={2} mt={2}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<VideoIcon />}
                >
                  Upload Video
                  <input type="file" hidden accept="video/*" />
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<FileIcon />}
                >
                  Upload PDF
                  <input type="file" hidden accept=".pdf" />
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<QuizIcon />}
                >
                  Add Quiz
                  <input type="file" hidden accept=".json,.xml" />
                </Button>
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button 
            onClick={handleDialogClose} 
            variant="contained"
            color={dialogType === "delete" ? "error" : "primary"}
          >
            {dialogType === "create" && "Create Course"}
            {dialogType === "edit" && "Save Changes"}
            {dialogType === "publish" && (currentCourse?.status === "Published" ? "Unpublish" : "Publish")}
            {dialogType === "delete" && "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default InstructorDashboard;