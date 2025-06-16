import loginImage from "../assets/login.png";
import {
  Container,
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
  Link,
  Paper
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 2,
        backgroundColor: '#f8f9fa'
      }}
    >
      <Grid 
        container 
        spacing={4} 
        alignItems="center" 
        justifyContent="center"
        sx={{ 
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {/* Image Section */}
        <Grid 
          item 
          xs={12} 
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            component="img"
            src={loginImage}
            alt="Login illustration"
            sx={{ 
              width: { xs: '70%', sm: '60%', md: '90%' },
              maxWidth: '500px',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </Grid>
        
        {/* Form Section */}
        <Grid 
          item 
          xs={12} 
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: '100%',
              maxWidth: 450,
              p: { xs: 3, sm: 4 },
              mx: { xs: 2, sm: 0 },
              borderRadius: 2
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
              sx={{
                mb: 4,
                fontWeight: 600,
                color: 'primary.main',
                fontSize: { xs: '1.8rem', sm: '2rem' }
              }}
            >
              Welcome Back
            </Typography>

            <Box component="form" noValidate>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{
                  mb: 3,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'grey.50',
                  }
                }}
              >
                Sign in with Google
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  OR
                </Typography>
              </Divider>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="medium"
                sx={{ mb: 2 }}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="medium"
                sx={{ mb: 2 }}
              />

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 2
                }}
              >
                <Link href="#" variant="body2" sx={{ fontWeight: 500 }}>
                  Forgot password?
                </Link>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ 
                  mt: 2,
                  mb: 3,
                  py: 1.5,
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                  boxShadow: 2,
                  '&:hover': {
                    boxShadow: 4
                  }
                }}
              >
                Login
              </Button>

              <Typography 
                variant="body2" 
                align="center"
                sx={{ 
                  fontSize: { xs: '0.85rem', sm: '0.9rem' },
                  fontWeight: 500
                }}
              >
                Don't have an account?{' '}
                <Link 
                  href="/signup" 
                  color="error"
                  sx={{ 
                    fontWeight: 600,
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;