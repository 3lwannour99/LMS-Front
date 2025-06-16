import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Paper, 
  Divider,
  IconButton,
  TextField,
  Button,
  Stack
} from '@mui/material';
import { Email, Edit, CameraAlt, Save, Cancel } from '@mui/icons-material';

const MyProfile = () => {
  // User state with default values
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'Software developer passionate about creating beautiful user interfaces with React and Material-UI.'
  });

  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [tempBio, setTempBio] = useState(user.bio);
  const [tempAvatar, setTempAvatar] = useState(user.avatarUrl);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes
  const handleSave = () => {
    setUser({
      ...user,
      avatarUrl: tempAvatar,
      bio: tempBio
    });
    setEditMode(false);
  };

  // Cancel editing
  const handleCancel = () => {
    setTempBio(user.bio);
    setTempAvatar(user.avatarUrl);
    setEditMode(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          width: '100%',
          textAlign: 'center',
          borderRadius: 2
        }}
      >
        {/* Profile Picture Section */}
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <Avatar
            alt={user.name}
            src={editMode ? tempAvatar : user.avatarUrl}
            sx={{
              width: 120,
              height: 120,
              margin: '0 auto 16px',
              border: '3px solid #3f51b5'
            }}
          />
          {editMode && (
            <>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar-upload"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="avatar-upload">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    backgroundColor: 'white',
                    boxShadow: 1
                  }}
                >
                  <CameraAlt />
                </IconButton>
              </label>
            </>
          )}
        </Box>
        
        <Typography variant="h4" component="h1" gutterBottom>
          {user.name}
        </Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <IconButton aria-label="email" color="primary">
            <Email />
          </IconButton>
          <Typography variant="body1" color="text.secondary">
            {user.email}
          </Typography>
        </Box>
        
        {/* Bio Section */}
        {editMode ? (
          <TextField
            label="Bio"
            multiline
            rows={4}
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
        ) : (
          <Typography variant="body1" sx={{ mb: 3, textAlign: 'left', whiteSpace: 'pre-line' }}>
            {user.bio}
          </Typography>
        )}
        
        {/* Edit/Save Buttons */}
        {!editMode ? (
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </Button>
        ) : (
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              startIcon={<Save />}
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Cancel />}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Stack>
        )}
      </Paper>
    </Box>
  );
};

export default MyProfile;