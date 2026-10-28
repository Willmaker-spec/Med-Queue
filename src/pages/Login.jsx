import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Checkbox, 
  CssBaseline, 
  FormControlLabel, 
  Grid,  
  TextField, 
  Typography 
} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios';

 

export default function Login () {
  const navigate = useNavigate();
  const[email, setEmail] = useState("")
 const [password, setPassword] = useState("") 
//  message state for error handling 
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false);
  // loading state
   const [loading, setLoading] = useState(false);
  //  remember me state
    const [rememberMe, setRememberMe] = useState(false);
    // handle form submission
      const handleLoginSubmit = async (e) => {
        try{
          e.preventDefault();
          // set loading state to true
          setLoading(true);
          // clear message and error state
          setMessage("");
          setError(false);

          // frontend validation
      if (!email || !password) {
        setMessage("Please fill in all the fields");
        setError(true);
        setLoading(false);
        return;
      }
      // Login Payload
      const payload = {
        email,
        password,
      };
      console.log(payload);
      // send login request to backend
  let data = await axios.post('https://students-learning-api.onrender.com/api/auth/login',
  payload,);
  console.log(data);
  
  setLoading(false);
  setMessage("Login successful!, Welcome Back")
  // save User data to Local storage
  localStorage.setItem("user", JSON.stringify(data.data))
  // clear form fields
  setEmail("");
  setPassword("");
  // login successful, redirect to home

  navigate("/");

        } catch (error) {
          console.log(error);
          // handle error response from backend
          if (error.response && error.response.data) {
            setMessage(error.response.data.message);
          } else {
            setMessage("An error occured. Please try again.");
          }
          setError(true);
          setLoading(false);
       
        }   
      };
     

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      
      {/* Left Column: Visual branding area */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://unsplash.com)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#111',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          p: 6,
          color: '#fff',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 900, letterSpacing: '-0.05em', mb: 1 }}>
          Med Queue.
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
          ©️ 2026 INTERNAL HEALTH SYSTEM.
        </Typography>
      </Grid>

      {/* Right Column: Sharp Login Form */}
      <Grid 
        item 
        xs={12} 
        sm={8} 
        md={5} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          px: { xs: 4, md: 10 },
          backgroundColor: '#fff'
        }}
      >
        <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 800, mb: 1, letterSpacing: '-0.03em' }}>
            SIGN IN
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Please enter your credentials to access your profile.
          </Typography>
          {/* success and error messages */}
          {message && (
            <Typography
            variant='body2'
            color='success'
            sx={{ mb: 2}}
            >
              {message}
            </Typography>
          )}
          {error && (
            <Typography
            variant='body2'
            color='error'
            sx={{ mb: 2}}
            >
              {error}
            </Typography>
          )}

           
          <Box component="form" onSubmit={handleLoginSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="EMAIL ADDRESS"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{ sx: { letterSpacing: '0.1em', fontSize: '0.75rem' } }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#000', borderWidth: '1px' },
                  '&:hover fieldset': { borderColor: '#000', borderWidth: '2px' },
                  '&.Mui-focused fieldset': { borderColor: '#000', borderWidth: '2px' },
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
              InputProps={{ sx: { borderRadius: 0 } }}
              InputLabelProps={{ sx: { letterSpacing: '0.1em', fontSize: '0.75rem' } }}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#000', borderWidth: '1px' },
                  '&:hover fieldset': { borderColor: '#000', borderWidth: '2px' },
                  '&.Mui-focused fieldset': { borderColor: '#000', borderWidth: '2px' },
                }
              }}
            />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, mb: 3 }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="default" sx={{ '& .MuiSvgIcon-root': { borderRadius: 0 } }} />}
                label={<Typography variant="body2" sx={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>REMEMBER ME</Typography>}
              />
              <Link href="#" variant="body2" color="inherit" sx={{ fontSize: '0.75rem', underline: 'always', letterSpacing: '0.05em' }}>
                FORGOT PASSWORD?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                mb: 3,
                py: 1.5,
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: 0,
                fontWeight: 700,
                letterSpacing: '0.1em',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#222',
                  boxShadow: 'none',
                },
              }}
            >
             {loading ? "LOADING..." : "SUBMIT"}
            </Button>

            <Typography variant="body2" align="center" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
              {'DON\'T HAVE AN ACCOUNT? '}
              <Link to='/RegisterScreen' color="inherit" sx={{ fontWeight: 700 }}>
                REGISTER
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );

}


