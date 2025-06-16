import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography
} from "@mui/material";
import { Add as AddIcon, Edit as EditIcon, People as PeopleIcon, MoreVert as MoreIcon } from "@mui/icons-material";

const CoursesTab = ({
  courses,
  handleDialogOpen,
  handleMenuClick
}) => {
  return (
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
  );
};

export default CoursesTab;
