import React, { useState } from "react";
import { Box, Grid, Paper, Tabs, Tab, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import StatCard from "./StatCard";
import CourseCard from "./CourseCard";
import CourseDetailView from "./CourseDetailView";
import AssignmentsTab from "./AssignmentsTab";
import QuizzesTab from "./QuizzesTab";
import ActivityTab from "./ActivityTab";
import AssignmentDialog from "./AssignmentDialog";
import { CheckCircle } from '@mui/icons-material';
import { Description as FileText } from '@mui/icons-material';

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

  // Mock Data (same as before)
  const student = {
    name: "Nour Ahmad",
    email: "nour.ahmad@student.com",
    avatar: "",
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
    thumbnail: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    description: "Learn the fundamentals of JavaScript programming language",
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
    thumbnail: "https://graffersid.com/wp-content/uploads/2023/03/NodeJS-1-scaled.webp",
    description: "Build backend applications with Node.js",
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
  {
    id: 3,
    name: "React Frontend Mastery",
    instructor: "Ali Hassan",
    progress: 30,
    thumbnail: "https://miro.medium.com/v2/resize:fit:2000/0*zj_kGMq6f2ZxW7p3.png",
    description: "Master modern React development",
    modules: [
      {
        id: 1,
        title: "React Basics",
        lessons: [
          {
            id: 1,
            title: "Introduction to React",
            duration: "12:20",
            videoUrl: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            completed: true,
            notes: "React is a JavaScript library for building UIs.",
          },
          {
            id: 2,
            title: "Components and Props",
            duration: "15:45",
            videoUrl: "https://www.youtube.com/watch?v=IIMfx7V7oKY",
            completed: true,
            notes: "Components let you split the UI into reusable pieces.",
          },
        ],
        quizzes: [
          {
            id: 1,
            title: "React Fundamentals Quiz",
            score: "78%",
            dateTaken: "2025-06-05",
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

  // Handler functions (same as before)
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

    console.log("Marked lesson as completed");
    setSelectedCourse(updatedCourses.find((c) => c.id === selectedCourse.id));
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  if (selectedCourse) {
    return (
      <CourseDetailView
        selectedCourse={selectedCourse}
        currentLesson={currentLesson}
        currentVideo={currentVideo}
        notes={notes}
        onBack={handleBackToCourses}
        onVideoSelect={handleVideoSelect}
        onMarkCompleted={markLessonCompleted}
        onNotesChange={handleNotesChange}
      />
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <StudentProfile student={student} />

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Enrolled Courses"
            value={student.enrolledCourses}
            icon="BookOpen"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Completed"
            value={student.completedCourses}
            icon="Award"
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Certificates"
            value={student.certificatesEarned}
            icon="Star"
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Study Streak"
            value={`${student.studyStreak} days`}
            icon="TrendingUp"
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
              <CourseCard
                course={course}
                onClick={() => handleCourseClick(course)}
                onContinue={() => handleCourseClick(course)}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {selectedTab === 1 && (
        <AssignmentsTab
          assignments={assignments}
          onViewAssignment={handleViewAssignment}
          onSubmitAssignment={handleSubmitAssignment}
        />
      )}

      {selectedTab === 2 && (
        <QuizzesTab quizzes={quizzes} onTakeQuiz={handleTakeQuiz} />
      )}

      {selectedTab === 3 && <ActivityTab recentActivities={recentActivities} />}

      <AssignmentDialog
        open={openAssignmentDialog}
        assignment={selectedAssignment}
        file={file}
        onClose={handleCloseDialog}
        onFileChange={handleFileChange}
        onSubmit={handleSubmitFile}
      />
    </Container>
  );
};

export default StudentDashboard;
