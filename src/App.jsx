import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignupPage";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InstructorDashboard from "./dashboard/InstructorDashboard";
// import AdminDashboard from "./dashboard/AdminDashboardOld";
import CourseManagement from "./components/CourseManagement";
import QuizPage from "./components/QuizPage";
import MyProfile from "./components/MyProfile";
import SettingsPage from "./auth/SettingsPage";
import StudentDashboard from "./dashboard/student Dashboard/StudentDashboard";
import AdminDashboard from "./dashboard/adminDashboards/AdminDashboard";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#4169E1",
        light: "#6A89FF",
        dark: "#27408B",
        contrastText: "#FFFFFF",
      },
      background: {
        default: mode === "light" ? "#FFFFFF" : "#121212",
        paper: mode === "light" ? "#F5F5F5" : "#1E1E1E",
      },
    },
  });

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          // In your App.js
          <Header mode={mode} toggleDarkMode={toggleDarkMode} />{" "}
          {/* Modern toggle button with icons */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route
                path="/instructor-dashboard"
                element={<InstructorDashboard />}
              />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/SettingsPage" element={<SettingsPage />} />

              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/course-management" element={<CourseManagement />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
