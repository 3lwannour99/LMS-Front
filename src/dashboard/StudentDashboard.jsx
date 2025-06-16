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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia,
  TextField,
} from "@mui/material";
import {
  Book as BookOpen,
  EmojiEvents as Award,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  Description as FileText, // Correctly imported as FileText
  Star,
  AttachFile,
  Close,
  ExpandMore,
  VideoLibrary,
  Assignment,
  MenuBook,
  Quiz as QuizIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const StudentDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAssignmentDialog, setOpenAssignmentDialog] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  // Mock Data
  const student = {
    name: "Nour Ahmad",
    email: "nour.ahmad@student.com",
    avatar: "",
    joinDate: "September 2024",
    enrolledCourses: 6,
    completedCourses: 3,
    certificatesEarned: 2,
    studyStreak: 12,
  };

  const enrolledCourses = [
    {
      id: 1,
      name: "JavaScript Fundamentals",
      instructor: "Ahmed Khaled",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "Async/Await in JavaScript",
      dueDate: "2025-06-20",
      description: "Learn the fundamentals of JavaScript programming language",
      thumbnail: "https://source.unsplash.com/random/300x200/?javascript",
      modules: [
        {
          id: 1,
          title: "Introduction to JavaScript",
          lessons: [
            {
              id: 1,
              title: "What is JavaScript?",
              duration: "8:32",
              videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
              completed: true,
              notes: "JavaScript is a scripting language for the web.",
            },
            {
              id: 2,
              title: "Variables and Data Types",
              duration: "12:45",
              videoUrl: "https://www.youtube.com/watch?v=IsG4Xd6LlsM",
              completed: true,
              notes: "Learned about let, const, and primitive types.",
            },
          ],
          assignments: [
            {
              id: 1,
              title: "First JavaScript Program",
              dueDate: "2025-06-15",
              status: "Submitted",
              grade: "90/100",
            },
          ],
          quizzes: [
            {
              id: 1,
              title: "JavaScript Basics Quiz",
              score: "85%",
              dateTaken: "2025-06-10",
            },
          ],
        },
        {
          id: 2,
          title: "Functions and Scope",
          lessons: [
            {
              id: 3,
              title: "Function Declarations",
              duration: "10:15",
              videoUrl: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
              completed: true,
              notes: "Functions are reusable blocks of code.",
            },
            {
              id: 4,
              title: "Arrow Functions",
              duration: "9:22",
              videoUrl: "https://www.youtube.com/watch?v=h33Srr5J9nY",
              completed: false,
              notes: "",
            },
          ],
          assignments: [
            {
              id: 2,
              title: "Function Practice",
              dueDate: "2025-06-18",
              status: "Pending",
              grade: "-",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Node.js Backend Development",
      instructor: "Sara Mohammed",
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: "Express.js Middleware",
      dueDate: "2025-07-15",
      description: "Build backend applications with Node.js",
      thumbnail: "https://source.unsplash.com/random/300x200/?nodejs",
      modules: [
        {
          id: 1,
          title: "Node.js Basics",
          lessons: [
            {
              id: 1,
              title: "Introduction to Node.js",
              duration: "10:05",
              videoUrl: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
              completed: true,
              notes: "Node.js allows JavaScript to run on the server.",
            },
            {
              id: 2,
              title: "Node.js Modules",
              duration: "14:30",
              videoUrl: "https://www.youtube.com/watch?v=xHLd36QoS4k",
              completed: true,
              notes: "Learned about require() and module.exports",
            },
          ],
        },
      ],
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "lesson_completed",
      title: "Completed: JavaScript Functions",
      course: "JavaScript Fundamentals",
      time: "2 hours ago",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "quiz_submitted",
      title: "Quiz Submitted: Node.js Basics",
      course: "Node.js Backend Development",
      time: "1 day ago",
      icon: FileText,
    },
  ];

  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "JavaScript Project",
      course: "JavaScript Fundamentals",
      dueDate: "2025-06-18",
      status: "Submitted",
      grade: "85/100",
      description:
        "Create a JavaScript application that demonstrates DOM manipulation and event handling.",
      instructions:
        "Submit your project files in a zip format. Include a README with setup instructions.",
    },
    {
      id: 2,
      title: "Node.js API Design",
      course: "Node.js Backend Development",
      dueDate: "2025-06-25",
      status: "Pending",
      grade: "-",
      description: "Design a RESTful API using Node.js and Express.",
      instructions:
        "Submit your code with proper documentation. Include test cases.",
    },
  ]);

  const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      course: "JavaScript Fundamentals",
      score: "92%",
      dateTaken: "2025-06-10",
    },
    {
      id: 2,
      title: "Node.js Concepts",
      course: "Node.js Backend Development",
      score: "Pending",
      dateTaken: "-",
    },
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleTakeQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  const handleViewAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setOpenAssignmentDialog(true);
  };

  const handleSubmitAssignment = (assignment) => {
    setSelectedAssignment(assignment);
    setOpenAssignmentDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenAssignmentDialog(false);
    setSelectedAssignment(null);
    setFile(null);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmitFile = () => {
    if (file) {
      console.log("Submitting file:", file.name);

      const updatedAssignments = assignments.map((a) =>
        a.id === selectedAssignment.id ? { ...a, status: "Submitted" } : a
      );
      setAssignments(updatedAssignments);

      handleCloseDialog();
    }
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    // Set first lesson of first module as default
    if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      const firstLesson = course.modules[0].lessons[0];
      setCurrentVideo(firstLesson.videoUrl);
      setCurrentLesson(firstLesson);
      setNotes(firstLesson.notes || "");
    }
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setCurrentVideo(null);
    setCurrentLesson(null);
    setNotes("");
  };

  const handleVideoSelect = (lesson) => {
    setCurrentVideo(lesson.videoUrl);
    setCurrentLesson(lesson);
    setNotes(lesson.notes || "");
  };

  const markLessonCompleted = () => {
    if (!currentLesson || !selectedCourse) return;

    const updatedCourses = enrolledCourses.map((course) => {
      if (course.id === selectedCourse.id) {
        const updatedModules = course.modules.map((module) => {
          const updatedLessons = module.lessons.map((lesson) => {
            if (lesson.id === currentLesson.id) {
              return { ...lesson, completed: true, notes };
            }
            return lesson;
          });
          return { ...module, lessons: updatedLessons };
        });

        // Update completed lessons count
        const completedCount = updatedModules.reduce((count, module) => {
          return count + module.lessons.filter((l) => l.completed).length;
        }, 0);

        return {
          ...course,
          modules: updatedModules,
          completedLessons: completedCount,
          progress: Math.round((completedCount / course.totalLessons) * 100),
        };
      }
      return course;
    });

    // In a real app, you would save to backend here
    console.log("Marked lesson as completed");
    setSelectedCourse(updatedCourses.find((c) => c.id === selectedCourse.id));
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const StatCard = ({
    title,
    value,
    icon: IconComponent,
    color = "primary",
  }) => (
    <Card sx={{ minHeight: "100%", borderRadius: 2 }}>
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

  if (selectedCourse) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Button
          startIcon={<Close />}
          onClick={handleBackToCourses}
          sx={{ mb: 3 }}
          variant="outlined"
        >
          Back to Courses
        </Button>

        {/* Vertical Card Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            width: "90%",
            mx: "auto",
          }}
        >
          {/* Course Info Card */}
          <Card sx={{ boxShadow: 3 }}>
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {selectedCourse.name}
                </Typography>

                <Typography variant="body1" paragraph>
                  {selectedCourse.description}
                </Typography>

                {/* Enhanced Progress Section */}
                <Box
                  sx={{
                    backgroundColor: "primary.light",
                    p: 3,
                    borderRadius: 2,
                    mb: 2,
                    borderLeft: "4px solid",
                    borderColor: "primary.main",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Your Progress
                  </Typography>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box sx={{ width: "100%", mr: 2 }}>
                      <LinearProgress
                        variant="determinate"
                        value={selectedCourse.progress}
                        sx={{
                          height: 12,
                          borderRadius: 6,
                          backgroundColor: "primary.50",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      color="primary.dark"
                    >
                      {selectedCourse.progress}%
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    Completed {selectedCourse.completedLessons} of{" "}
                    {selectedCourse.totalLessons} lessons
                  </Typography>
                </Box>

                {/* Next Lesson Section */}
                <Box
                  sx={{
                    backgroundColor: "grey.50",
                    p: 3,
                    borderRadius: 2,
                    borderLeft: "4px solid",
                    borderColor: "warning.main",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Next Lesson
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedCourse.nextLesson}
                  </Typography>
                  <Chip
                    label={`Due: ${selectedCourse.dueDate}`}
                    color="warning"
                    sx={{ fontWeight: "bold" }}
                  />
                </Box>
              </Box>
            </Box>
          </Card>

          {/* Video Player Card */}
          <Card sx={{ boxShadow: 3 }}>
            <CardContent sx={{ p: 0 }}>
              {currentVideo ? (
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%", // 16:9 aspect ratio
                    backgroundColor: "black",
                  }}
                >
                  <video
                    src={currentVideo}
                    controls
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    onEnded={markLessonCompleted}
                  />
                </Box>
              ) : (
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  minHeight="300px"
                  bgcolor="grey.100"
                  p={3}
                >
                  <VideoLibrary
                    fontSize="large"
                    color="disabled"
                    sx={{ mb: 2, fontSize: 60 }}
                  />
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    align="center"
                  >
                    Select a lesson from the curriculum to start watching
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Curriculum Card */}
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={3}>
                Course Curriculum
              </Typography>

              {selectedCourse.modules.map((module, moduleIndex) => (
                <Accordion
                  key={module.id}
                  defaultExpanded={moduleIndex === 0}
                  sx={{
                    mb: 2,
                    "&:before": { display: "none" },
                    boxShadow: "none",
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: "8px !important",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      backgroundColor: "grey.50",
                      borderRadius: moduleIndex === 0 ? "8px 8px 0 0" : "8px",
                      "&.Mui-expanded": {
                        borderRadius: "8px 8px 0 0",
                      },
                    }}
                  >
                    <Typography variant="h6" fontWeight="medium">
                      {module.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <TableContainer>
                      <Table size="small">
                        <TableBody>
                          {module.lessons.map((lesson) => (
                            <TableRow
                              key={lesson.id}
                              hover
                              selected={currentLesson?.id === lesson.id}
                              onClick={() => handleVideoSelect(lesson)}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell sx={{ width: 50, pl: 3 }}>
                                <PlayCircle
                                  fontSize="medium"
                                  color={
                                    lesson.completed ? "success" : "primary"
                                  }
                                />
                              </TableCell>
                              <TableCell>
                                <Typography variant="body1" fontWeight="medium">
                                  {lesson.title}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: 100 }}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {lesson.duration}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: 60 }}>
                                {lesson.completed ? (
                                  <Chip
                                    label="Completed"
                                    size="small"
                                    color="success"
                                    variant="outlined"
                                  />
                                ) : (
                                  <Chip
                                    label="Pending"
                                    size="small"
                                    color="warning"
                                    variant="outlined"
                                  />
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              ))}
            </CardContent>
          </Card>

          {/* Current Lesson Details */}
          {currentLesson && (
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={3}
                >
                  <Typography variant="h5" fontWeight="bold">
                    {currentLesson.title}
                  </Typography>
                  <Button
                    variant={currentLesson.completed ? "contained" : "outlined"}
                    color={currentLesson.completed ? "success" : "primary"}
                    size="large"
                    onClick={markLessonCompleted}
                    startIcon={currentLesson.completed ? <CheckCircle /> : null}
                    sx={{ borderRadius: 2 }}
                  >
                    {currentLesson.completed ? "Completed" : "Mark as Complete"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          )}
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
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
            <Typography variant="body1" color="text.secondary">
              Member since {student.joinDate}
            </Typography>
          </Box>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Enrolled Courses"
              value={student.enrolledCourses}
              icon={BookOpen}
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Completed"
              value={student.completedCourses}
              icon={Award}
              color="success"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Certificates"
              value={student.certificatesEarned}
              icon={Star}
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Study Streak"
              value={`${student.studyStreak} days`}
              icon={TrendingUp}
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
          <Tab label="Assignments" />
          <Tab label="Quizzes" />
          <Tab label="Activity" />
        </Tabs>
      </Paper>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Grid container spacing={3}>
          {enrolledCourses.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <Card
                sx={{ height: "100%", borderRadius: 2, cursor: "pointer" }}
                onClick={() => handleCourseClick(course)}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    Instructor: {course.instructor}
                  </Typography>

                  <Box mb={3}>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="body2">
                        Progress: {course.completedLessons}/
                        {course.totalLessons} lessons
                      </Typography>
                      <Typography fontWeight="bold" color="primary.main">
                        {course.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={course.progress}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>

                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Next: {course.nextLesson}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Due: {course.dueDate}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      startIcon={<PlayCircle />}
                      sx={{ borderRadius: 2 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick(course);
                      }}
                    >
                      Continue
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {selectedTab === 1 && (
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
                            assignment.status === "Submitted"
                              ? "success"
                              : "warning"
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
                              ? handleViewAssignment(assignment)
                              : handleSubmitAssignment(assignment)
                          }
                        >
                          {assignment.status === "Submitted"
                            ? "View"
                            : "Submit"}
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
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Quiz Results
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Quiz</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Date Taken</TableCell>
                    <TableCell>Score</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quizzes.map((quiz) => (
                    <TableRow key={quiz.id}>
                      <TableCell>{quiz.title}</TableCell>
                      <TableCell>{quiz.course}</TableCell>
                      <TableCell>{quiz.dateTaken}</TableCell>
                      <TableCell>
                        {quiz.score === "Pending" ? (
                          <Chip label="Pending" color="warning" size="small" />
                        ) : (
                          <Chip
                            label={quiz.score}
                            color="success"
                            size="small"
                          />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() =>
                            quiz.score === "Pending"
                              ? handleTakeQuiz(quiz.id)
                              : null
                          }
                        >
                          {quiz.score === "Pending" ? "Take Quiz" : "Review"}
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

      {selectedTab === 3 && (
        <Card sx={{ borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold" mb={3}>
              Recent Activity
            </Typography>
            <List>
              {recentActivities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <ListItem>
                    <ListItemIcon>
                      <activity.icon color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={activity.title}
                      secondary={
                        <>
                          <Typography variant="body2" color="text.secondary">
                            {activity.course}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.time}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* Assignment Dialog */}
      <Dialog
        open={openAssignmentDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {selectedAssignment?.title}
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedAssignment?.status === "Submitted" ? (
            <>
              <Typography variant="h6" gutterBottom>
                Assignment Details
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Course:</strong> {selectedAssignment?.course}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Due Date:</strong> {selectedAssignment?.dueDate}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Status:</strong>{" "}
                <Chip
                  label={selectedAssignment?.status}
                  color="success"
                  size="small"
                />
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Grade:</strong> {selectedAssignment?.grade}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Description:</strong> {selectedAssignment?.description}
              </Typography>
              <Typography variant="body1">
                <strong>Instructions:</strong>{" "}
                {selectedAssignment?.instructions}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Submit Assignment
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Course:</strong> {selectedAssignment?.course}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Due Date:</strong> {selectedAssignment?.dueDate}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Description:</strong> {selectedAssignment?.description}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Instructions:</strong>{" "}
                {selectedAssignment?.instructions}
              </Typography>

              <Box mt={3}>
                <Input
                  type="file"
                  id="assignment-upload"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="assignment-upload">
                  <Button
                    variant="contained"
                    component="span"
                    startIcon={<AttachFile />}
                    sx={{ mr: 2 }}
                  >
                    Select File
                  </Button>
                </label>
                {file && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Selected file: {file.name}
                  </Typography>
                )}
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          {selectedAssignment?.status === "Pending" && (
            <Button
              onClick={handleSubmitFile}
              variant="contained"
              color="primary"
              disabled={!file}
            >
              Submit Assignment
            </Button>
          )}
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default StudentDashboard;