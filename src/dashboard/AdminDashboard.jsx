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
  Badge,
} from "@mui/material";
import {
  People as PeopleIcon,
  School as InstructorIcon,
  Book as CourseIcon,
  Assessment as ReportIcon,
  MonitorHeart as HealthIcon,
  CheckCircle,
  Cancel,
  MoreVert as MoreIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  PersonAdd as AddUserIcon,
  BarChart as ChartIcon,
  Warning as WarningIcon,
  VerifiedUser as ApproveIcon,
  Block as RejectIcon,
  Star,
  Person,
  Settings as SettingsIcon,
} from "@mui/icons-material";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  
  const open = Boolean(anchorEl);

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

  const users = [
    {
      id: 1,
      name: "Ahmed Khaled",
      email: "ahmed.khaled@example.com",
      role: "Instructor",
      joinDate: "2023-01-15",
      status: "Active",
      lastLogin: "2025-06-14",
    },
    {
      id: 2,
      name: "Nour Ahmad",
      email: "nour.ahmad@example.com",
      role: "Student",
      joinDate: "2023-03-22",
      status: "Active",
      lastLogin: "2025-06-15",
    },
    {
      id: 3,
      name: "Mohammed Ali",
      email: "mohammed.ali@example.com",
      role: "Student",
      joinDate: "2024-02-10",
      status: "Suspended",
      lastLogin: "2025-05-28",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      role: "Instructor",
      joinDate: "2024-05-18",
      status: "Pending",
      lastLogin: "2025-06-10",
    },
  ];

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

  const reports = [
    {
      id: 1,
      name: "User Activity Report",
      type: "Daily",
      generatedDate: "2025-06-15",
      downloads: 24,
    },
    {
      id: 2,
      name: "Course Popularity",
      type: "Monthly",
      generatedDate: "2025-06-01",
      downloads: 156,
    },
    {
      id: 3,
      name: "System Performance",
      type: "Weekly",
      generatedDate: "2025-06-08",
      downloads: 42,
    },
  ];

  const systemHealth = [
    {
      id: 1,
      component: "Database",
      status: "Operational",
      uptime: "99.99%",
      lastIncident: "None",
    },
    {
      id: 2,
      component: "API Server",
      status: "Operational",
      uptime: "99.95%",
      lastIncident: "2025-05-15 (10 min downtime)",
    },
    {
      id: 3,
      component: "File Storage",
      status: "Degraded Performance",
      uptime: "99.8%",
      lastIncident: "2025-06-12 (Slow response)",
    },
    {
      id: 4,
      component: "Authentication",
      status: "Operational",
      uptime: "100%",
      lastIncident: "None",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleMenuClick = (event, item) => {
    setAnchorEl(event.currentTarget);
    setCurrentItem(item);
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
              icon={admin.systemStatus === "All systems operational" ? CheckCircle : WarningIcon}
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
      {selectedTab === 0 && (
        <>
          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Button 
              variant="contained" 
              startIcon={<AddUserIcon />}
              onClick={() => handleDialogOpen("createUser")}
            >
              Add New User
            </Button>
          </Box>
          
          <Card sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={3}>
                User Management
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>User</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Join Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Last Login</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Box display="flex" alignItems="center" gap={2}>
                            <Avatar sx={{ width: 32, height: 32 }}>
                              <Person />
                            </Avatar>
                            {user.name}
                          </Box>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Chip 
                            label={user.role} 
                            color={user.role === "Instructor" ? "primary" : "default"} 
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>
                          <Chip 
                            label={user.status} 
                            color={
                              user.status === "Active" ? "success" : 
                              user.status === "Suspended" ? "error" : "warning"
                            } 
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label="more"
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={(e) => handleMenuClick(e, user)}
                          >
                            <MoreIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </>
      )}

      {selectedTab === 1 && (
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
                            onClick={() => handleDialogOpen("approveCourse")}
                          >
                            Approve
                          </Button>
                          <Button 
                            size="small" 
                            variant="outlined" 
                            color="error"
                            startIcon={<RejectIcon />}
                            onClick={() => handleDialogOpen("rejectCourse")}
                          >
                            Reject
                          </Button>
                          <Button 
                            size="small" 
                            variant="outlined" 
                            startIcon={<EditIcon />}
                            onClick={() => handleDialogOpen("viewCourse")}
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
      )}

      {selectedTab === 2 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={3}>
                  Recent Reports
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Report Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Generated Date</TableCell>
                        <TableCell>Downloads</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {reports.map((report) => (
                        <TableRow key={report.id}>
                          <TableCell>{report.name}</TableCell>
                          <TableCell>{report.type}</TableCell>
                          <TableCell>{report.generatedDate}</TableCell>
                          <TableCell>{report.downloads}</TableCell>
                          <TableCell>
                            <Button 
                              size="small" 
                              variant="outlined" 
                              startIcon={<ChartIcon />}
                            >
                              Generate
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={3}>
                  Quick Reports
                </Typography>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <PeopleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="User Registration Trends" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <CourseIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Course Enrollment Stats" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <Star color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Course Ratings Analysis" />
                  </ListItem>
                  <Divider />
                  <ListItem button>
                    <ListItemIcon>
                      <SettingsIcon color="info" />
                    </ListItemIcon>
                    <ListItemText primary="System Usage Metrics" />
                  </ListItem>
                </List>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ mt: 2 }}
                  startIcon={<AddIcon />}
                  onClick={() => handleDialogOpen("customReport")}
                >
                  Create Custom Report
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {selectedTab === 3 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={3}>
                  System Components Health
                </Typography>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Component</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Uptime</TableCell>
                        <TableCell>Last Incident</TableCell>
                        <TableCell>Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {systemHealth.map((component) => (
                        <TableRow key={component.id}>
                          <TableCell>{component.component}</TableCell>
                          <TableCell>
                            <Chip 
                              label={component.status} 
                              color={
                                component.status === "Operational" ? "success" : 
                                component.status === "Degraded Performance" ? "warning" : "error"
                              } 
                              size="small"
                            />
                          </TableCell>
                          <TableCell>{component.uptime}</TableCell>
                          <TableCell>{component.lastIncident}</TableCell>
                          <TableCell>
                            <Button 
                              size="small" 
                              variant="outlined" 
                              startIcon={<HealthIcon />}
                            >
                              Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  System Overview
                </Typography>
                
                <Box mb={3}>
                  <Typography variant="body2" mb={1}>
                    Server Load: 42%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={42}
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                  
                  <Typography variant="body2" mb={1}>
                    Database Usage: 78%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={78}
                    color="warning"
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                  
                  <Typography variant="body2" mb={1}>
                    Storage Usage: 65%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={65}
                    color="info"
                    sx={{ height: 8, borderRadius: 4, mb: 2 }}
                  />
                </Box>
                
                <Button
                  variant="contained"
                  startIcon={<SettingsIcon />}
                  fullWidth
                  onClick={() => handleDialogOpen("systemSettings")}
                >
                  System Settings
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* User Menu */}
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleDialogOpen("editUser")}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          Edit User
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("changeStatus")}>
          <ListItemIcon>
            {currentItem?.status === "Active" ? 
              <Cancel fontSize="small" color="warning" /> : 
              <CheckCircle fontSize="small" color="success" />
            }
          </ListItemIcon>
          {currentItem?.status === "Active" ? "Suspend User" : "Activate User"}
        </MenuItem>
        <MenuItem onClick={() => handleDialogOpen("deleteUser")}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <Typography color="error">Delete User</Typography>
        </MenuItem>
      </Menu>

      {/* Admin Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          {dialogType === "createUser" && "Create New User"}
          {dialogType === "editUser" && `Edit User: ${currentItem?.name}`}
          {dialogType === "approveCourse" && `Approve Course: ${currentItem?.name}`}
          {dialogType === "rejectCourse" && `Reject Course: ${currentItem?.name}`}
          {dialogType === "viewCourse" && `Course Details: ${currentItem?.name}`}
          {dialogType === "customReport" && "Create Custom Report"}
          {dialogType === "systemSettings" && "System Settings"}
          {dialogType === "changeStatus" && 
            `${currentItem?.status === "Active" ? "Suspend" : "Activate"} User: ${currentItem?.name}`}
          {dialogType === "deleteUser" && "Delete User"}
        </DialogTitle>
        <DialogContent>
          {dialogType === "deleteUser" ? (
            <Typography>
              Are you sure you want to delete user "{currentItem?.name}"? This action cannot be undone.
            </Typography>
          ) : dialogType === "approveCourse" ? (
            <Typography>
              Approve this course to make it available to students. The instructor will be notified.
            </Typography>
          ) : dialogType === "rejectCourse" ? (
            <>
              <Typography mb={2}>
                Are you sure you want to reject this course submission? The instructor will be notified.
              </Typography>
              <TextField
                label="Rejection Reason"
                fullWidth
                multiline
                rows={3}
                placeholder="Provide details about why this course was rejected..."
              />
            </>
          ) : dialogType === "changeStatus" ? (
            <Typography>
              {currentItem?.status === "Active" 
                ? `Suspend user ${currentItem?.name}? They will not be able to access the system until reactivated.`
                : `Activate user ${currentItem?.name}? They will regain full access to the system.`}
            </Typography>
          ) : dialogType === "createUser" || dialogType === "editUser" ? (
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Full Name"
                defaultValue={dialogType === "editUser" ? currentItem?.name : ""}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                type="email"
                defaultValue={dialogType === "editUser" ? currentItem?.email : ""}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                select
                label="Role"
                defaultValue={dialogType === "editUser" ? currentItem?.role : "Student"}
                SelectProps={{
                  native: true,
                }}
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
                <option value="Admin">Admin</option>
              </TextField>
              {dialogType === "createUser" && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                />
              )}
            </Box>
          ) : dialogType === "customReport" ? (
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Report Name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                select
                label="Report Type"
                defaultValue="Daily"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Custom">Custom Range</option>
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                select
                label="Report Category"
                defaultValue="All"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="All">All Data</option>
                <option value="Users">User Activity</option>
                <option value="Courses">Course Metrics</option>
                <option value="System">System Performance</option>
              </TextField>
            </Box>
          ) : dialogType === "systemSettings" ? (
            <Box component="form" sx={{ mt: 1 }}>
              <Typography variant="subtitle1" mb={2}>
                System Configuration
              </Typography>
              <TextField
                margin="normal"
                fullWidth
                label="Maintenance Mode"
                select
                defaultValue="false"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="false">Disabled</option>
                <option value="true">Enabled</option>
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                label="New User Registration"
                select
                defaultValue="true"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="true">Allowed</option>
                <option value="false">Disabled</option>
              </TextField>
              <TextField
                margin="normal"
                fullWidth
                label="Course Submission"
                select
                defaultValue="true"
                SelectProps={{
                  native: true,
                }}
              >
                <option value="true">Allowed</option>
                <option value="false">Disabled</option>
              </TextField>
            </Box>
          ) : (
            <Typography>
              Viewing details for: {currentItem?.name}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button 
            onClick={handleDialogClose} 
            variant="contained"
            color={
              dialogType === "deleteUser" ? "error" : 
              dialogType === "approveCourse" ? "success" : 
              dialogType === "rejectCourse" ? "error" : "primary"
            }
          >
            {dialogType === "createUser" && "Create User"}
            {dialogType === "editUser" && "Save Changes"}
            {dialogType === "approveCourse" && "Approve"}
            {dialogType === "rejectCourse" && "Reject"}
            {dialogType === "customReport" && "Generate"}
            {dialogType === "systemSettings" && "Save Settings"}
            {dialogType === "changeStatus" && (currentItem?.status === "Active" ? "Suspend" : "Activate")}
            {dialogType === "deleteUser" && "Delete"}
            {dialogType === "viewCourse" && "Close"}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;