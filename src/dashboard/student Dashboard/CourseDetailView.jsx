import React, { useState } from "react";
import {
  Container,
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Divider,
  Chip,
} from "@mui/material";
import {
  Close,
  ExpandMore,
  PlayCircle,
  Quiz,
  Assignment,
  CheckCircle,
  ArrowBack,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CourseDetailView = ({ selectedCourse, onBack }) => {
  const [activeAssignment, setActiveAssignment] = useState(null);
  const [assignmentSubmission, setAssignmentSubmission] = useState("");
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleQuizSelect = (quiz) => {
    navigate("/quiz/:quizId", { state: { quiz } });
  };

  const handleAssignmentSelect = (assignment) => {
    setActiveAssignment(assignment);
    setAssignmentSubmission("");
    setAssignmentSubmitted(false);
  };

  const handleSubmitAssignment = () => {
    // Here you would typically send the submission to your backend
    console.log("Assignment submitted:", assignmentSubmission);
    setAssignmentSubmitted(true);
  };

  const handleCloseDialog = () => {
    setActiveAssignment(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<Close />}
        onClick={onBack}
        sx={{ mb: 3 }}
        variant="outlined"
      >
        Back to Courses
      </Button>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          width: "90%",
          mx: "auto",
        }}
      >
        {/* Course Header */}
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {selectedCourse.name}
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
              <Box sx={{ width: "100%", mr: 2 }}>
                <LinearProgress
                  variant="determinate"
                  value={selectedCourse.progress}
                  sx={{
                    height: 12,
                    borderRadius: 6,
                  }}
                />
              </Box>
              <Typography variant="h5" fontWeight="bold">
                {selectedCourse.progress}%
              </Typography>
            </Box>

            <Typography variant="body1">
              Completed {selectedCourse.completedLessons} of{" "}
              {selectedCourse.totalLessons} items
            </Typography>
          </CardContent>
        </Card>

        {/* Curriculum */}
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Course Content
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
                  <Typography
                    variant="h6"
                    fontWeight="medium"
                    sx={{ color: "black" }}
                  >
                    {module.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <TableContainer>
                    <Table size="small">
                      <TableBody>
                        {/* Lessons */}
                        {module.lessons.map((lesson) => (
                          <TableRow key={`lesson-${lesson.id}`} hover>
                            <TableCell sx={{ width: 50, pl: 3 }}>
                              <PlayCircle fontSize="medium" />
                            </TableCell>
                            <TableCell>
                              <Typography variant="body1">
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
                          </TableRow>
                        ))}

                        {/* Quizzes */}
                        {module.quizzes &&
                          module.quizzes.map((quiz) => (
                            <TableRow
                              key={`quiz-${quiz.id}`}
                              hover
                              onClick={() => handleQuizSelect(quiz)}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell sx={{ width: 50, pl: 3 }}>
                                <Quiz fontSize="medium" />
                              </TableCell>
                              <TableCell>
                                <Typography variant="body1">
                                  {quiz.title}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: 100 }}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Quiz
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))}

                        {/* Assignments */}
                        {module.assignments &&
                          module.assignments.map((assignment) => (
                            <TableRow
                              key={`assignment-${assignment.id}`}
                              hover
                              onClick={() => handleAssignmentSelect(assignment)}
                              sx={{ cursor: "pointer" }}
                            >
                              <TableCell sx={{ width: 50, pl: 3 }}>
                                <Assignment fontSize="medium" />
                              </TableCell>
                              <TableCell>
                                <Typography variant="body1">
                                  {assignment.title}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: 100 }}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  Assignment
                                </Typography>
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
      </Box>

      {/* Assignment Dialog */}
      <Dialog
        open={Boolean(activeAssignment)}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          <Box display="flex" alignItems="center">
            {assignmentSubmitted && (
              <Button
                startIcon={<ArrowBack />}
                onClick={() => setAssignmentSubmitted(false)}
                sx={{ mr: 2 }}
              >
                Back
              </Button>
            )}
            <Typography variant="h6" fontWeight="bold">
              {activeAssignment?.title}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent dividers>
          {assignmentSubmitted ? (
            <Box textAlign="center" py={4}>
              <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Assignment Submitted Successfully!
              </Typography>
              <Typography color="text.secondary">
                Your submission has been recorded. You can view feedback when
                it's available.
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="body1" paragraph>
                {activeAssignment?.description}
              </Typography>

              {activeAssignment?.deadline && (
                <Chip
                  label={`Due: ${activeAssignment.deadline}`}
                  color="warning"
                  sx={{ mb: 3 }}
                />
              )}

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Submission
              </Typography>
              <TextField
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                placeholder="Type your assignment submission here..."
                value={assignmentSubmission}
                onChange={(e) => setAssignmentSubmission(e.target.value)}
              />

              {activeAssignment?.attachments && (
                <>
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Attachments
                  </Typography>
                  <Box display="flex" gap={1}>
                    {activeAssignment.attachments.map((file) => (
                      <Chip
                        key={file.name}
                        label={file.name}
                        onClick={() => window.open(file.url, "_blank")}
                        sx={{ cursor: "pointer" }}
                      />
                    ))}
                  </Box>
                </>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          {!assignmentSubmitted && (
            <>
              <Button onClick={handleCloseDialog}>Cancel</Button>
              <Button
                variant="contained"
                onClick={handleSubmitAssignment}
                disabled={!assignmentSubmission.trim()}
              >
                Submit Assignment
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CourseDetailView;
