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

const QuizzesTab = ({ quizzes, onTakeQuiz }) => {
  return (
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
                      <Chip label={quiz.score} color="success" size="small" />
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() =>
                        quiz.score === "Pending" ? onTakeQuiz(quiz.id) : null
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
  );
};

export default QuizzesTab;