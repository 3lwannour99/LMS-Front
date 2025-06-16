import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Chip,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  IconButton,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  PlayCircle,
  Article,
  Quiz,
  Bookmark,
  BookmarkBorder,
  Star,
  StarBorder,
} from "@mui/icons-material";

// Sample course data
const initialCourses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "Programming",
    thumbnail:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    enrolled: true,
  },
  {
    id: 2,
    title: "Business Strategy",
    category: "Business",
    thumbnail:
      "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2023_08_Corporate-Strategy-1.jpg",
    enrolled: false,
  },
];

const CourseManagement = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Categories for filtering
  const categories = ["All", "Programming", "Business", "Design"];

  // Filter courses based on search and category
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      tabValue === 0 || course.category === categories[tabValue];
    return matchesSearch && matchesCategory;
  });

  // CRUD Operations
  const handleCreate = () => {
    setCurrentCourse({
      id: Math.max(...courses.map((c) => c.id)) + 1,
      title: "",
      category: "Programming",
      thumbnail: "",
      enrolled: false,
    });
    setOpenDialog(true);
  };

  const handleEnroll = (id) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, enrolled: !course.enrolled } : course
      )
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header and Filters */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Course Catalog
        </Typography>
        <TextField
          label="Search Courses"
          variant="outlined"
          size="small"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>

      {/* Category Tabs */}
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        sx={{ mb: 3 }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>

      {/* Admin Controls */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
        <Button variant="contained" startIcon={<Add />} onClick={handleCreate}>
          Add New Course
        </Button>
      </Box>

      {/* Course Grid */}
      <Grid container spacing={3}>
        {filteredCourses.map((course) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.thumbnail}
                alt={course.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Chip label={course.category} size="small" color="primary" />
                </Box>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h3"
                  sx={{ mt: 1 }}
                >
                  {course.title}
                </Typography>

                <Divider sx={{ my: 2 }} />
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  size="small"
                  color={course.enrolled ? "success" : "primary"}
                  onClick={() => handleEnroll(course.id)}
                >
                  {course.enrolled ? "Enrolled" : "Enroll"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CourseManagement;
