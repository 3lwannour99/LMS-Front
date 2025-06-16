import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Stack,
  Divider,
  Alert,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Email,
  Edit,
  Save,
  Cancel,
  Visibility,
  VisibilityOff,
  Lock,
  Person
} from '@mui/icons-material';

const SettingsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // User data state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Edit mode and UI states
  const [editNameMode, setEditNameMode] = useState(false);
  const [editPasswordMode, setEditPasswordMode] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    
    if (editNameMode && !user.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (editPasswordMode) {
      if (!user.currentPassword) {
        newErrors.currentPassword = 'Current password is required';
      }
      if (!user.newPassword) {
        newErrors.newPassword = 'New password is required';
      } else if (user.newPassword.length < 8) {
        newErrors.newPassword = 'Password must be at least 8 characters';
      }
      if (user.newPassword !== user.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Save name changes
  const handleSaveName = () => {
    if (!validate()) return;
    
    // Here you would typically call an API to update the name
    setSuccessMessage('Name updated successfully');
    setEditNameMode(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Save password changes
  const handleSavePassword = () => {
    if (!validate()) return;
    
    // Here you would typically call an API to update the password
    setSuccessMessage('Password updated successfully');
    setUser(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
    setEditPasswordMode(false);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditNameMode(false);
    setEditPasswordMode(false);
    setErrors({});
    setUser(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
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
          p: { xs: 2, sm: 4 }, // Responsive padding
          width: '100%',
          maxWidth: 600,
          borderRadius: 2
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 3 }}>
          Account Settings
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mb: 3 }}>
            {successMessage}
          </Alert>
        )}

        {/* Email (non-editable) */}
        <Typography variant="subtitle1" gutterBottom>
          Email
        </Typography>
        <TextField
          value={user.email}
          fullWidth
          disabled
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Responsive Name Section */}
        <Typography variant="subtitle1" gutterBottom>
          Name
        </Typography>
        {editNameMode ? (
          <Box sx={{ mb: 3 }}>
            <TextField
              name="name"
              value={user.name}
              onChange={handleChange}
              fullWidth
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Stack 
              direction={isMobile ? "column" : "row"} 
              spacing={2} 
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<Save />}
                onClick={handleSaveName}
                fullWidth={isMobile}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Cancel />}
                onClick={handleCancel}
                fullWidth={isMobile}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        ) : (
          <Stack 
            direction={isMobile ? "column" : "row"} 
            spacing={2} 
            alignItems={isMobile ? "stretch" : "center"}
            sx={{ mb: 3 }}
          >
            <TextField
              value={user.name}
              fullWidth
              disabled
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="outlined"
              startIcon={<Edit />}
              onClick={() => setEditNameMode(true)}
              fullWidth={isMobile}
            >
              Edit
            </Button>
          </Stack>
        )}

        <Divider sx={{ my: 3 }} />

        {/* Password Section */}
        <Typography variant="subtitle1" gutterBottom>
          Password
        </Typography>
        {editPasswordMode ? (
          <Box sx={{ mb: 3 }}>
            <TextField
              name="currentPassword"
              label="Current Password"
              type={showCurrentPassword ? "text" : "password"}
              value={user.currentPassword}
              onChange={handleChange}
              fullWidth
              error={!!errors.currentPassword}
              helperText={errors.currentPassword}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
              name="newPassword"
              label="New Password"
              type={showNewPassword ? "text" : "password"}
              value={user.newPassword}
              onChange={handleChange}
              fullWidth
              error={!!errors.newPassword}
              helperText={errors.newPassword}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
              name="confirmPassword"
              label="Confirm New Password"
              type={showConfirmPassword ? "text" : "password"}
              value={user.confirmPassword}
              onChange={handleChange}
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              sx={{ mb: 2 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock color="action" />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            
            <Stack 
              direction={isMobile ? "column" : "row"} 
              spacing={2} 
              justifyContent="flex-end"
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<Save />}
                onClick={handleSavePassword}
                fullWidth={isMobile}
              >
                Change Password
              </Button>
              <Button
                variant="outlined"
                color="error"
                startIcon={<Cancel />}
                onClick={handleCancel}
                fullWidth={isMobile}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        ) : (
          <Button
            variant="outlined"
            startIcon={<Edit />}
            onClick={() => setEditPasswordMode(true)}
            sx={{ mb: 3 }}
            fullWidth={isMobile}
          >
            Change Password
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default SettingsPage;