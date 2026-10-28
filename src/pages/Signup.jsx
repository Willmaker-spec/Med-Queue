import React, { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import medQueueMark from "../assets/logo/medqueue-mark.svg";
// import axios from "axios";


export default function Signup  ()  {
  const navigate = useNavigate();
// State for form data
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");

//  message state for form submission feedback
const [message, setMessage] = useState("");
const [error, setError] = useState("");
// loading state for form submission
const [loading, setLoading] = useState("");

// handle form submission
const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      //clear previous message
      setMessage("");
      setLoading(true);
      setError("");
      //validate form data
      if (!firstName.trim()) {
        setError("First name is required");
        setLoading(false);
        return;
      }
      if (!lastName.trim()) {
        setError("Last name is required");
        setLoading(false);
        return;
      }
      if (!email.trim()) {
        setError("Email is required");
        setLoading(false);
        return;
      }
      if (!password.trim()) {
        setError("Password is required");
        setLoading(false);
        return;
      }
      let payload = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address,
      };
      console.log(payload);
      // send data to backend API
      const res = await axios.post(
        "https://students-learning-api.onrender.com/api/auth",
        payload,
      );
      console.log(res);
      //success message
      setMessage("Account created successfully!");
      setLoading(false);
      navigate("/")
      //clear form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setAddress("");
    } catch (error) {
      console.error(error);
      setError("An error occurred while creating the account.");
      setLoading(false);
    }
    // handle backend errors
    if (error.response && error.response.data && error.response.data.message) {
      setError(error.response.data.message);
    } else {
      setError("An error occurred while creating the account.");
    }
    setLoading(false);
  };


  return (
    <Grid container component="main" sx={{ minHeight: "100vh" }}>
      <CssBaseline />

      {/* LEFT SIDE */}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          position: "relative",
          overflow: "hidden",
          minHeight: 480,
          background: "linear-gradient(145deg, #066d5c 0%, #07866f 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 6,
          color: "#fff",
        }}
      >
        <Box
          component="img"
          src={medQueueMark}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.65,
            pointerEvents: "none",
          }}
        />
        <Typography
          variant="h3"
          component="h1"
          sx={{
            position: "relative",
            color: "#fff",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            mb: 1,
          }}
        >
          Med Queue.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em",
          }}
        >
          ©️ 2026 INTERNAL HEALTH SYSTEM.
        </Typography>
      </Grid>

      {/* RIGHT SIDE */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 4, md: 10 },
          py: 5,
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ maxWidth: 400, width: "100%", mx: "auto" }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 1,
              letterSpacing: "-0.03em",
            }}
          >
            CREATE ACCOUNT
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Register to access your patient portal account.
          </Typography>
         {/* success message */}
         {message && (
            <Typography
            variant="body2"
            color= "success.main"
            sx={{ mb: 2, fontWeight: 700}}
            >
             {message}   
            </Typography>
         )}
         {/* error message */}
         { error && (
            <Typography
            variant="body2"
            color="error"
            sx={{ mb: 2, fontWeight: 700}}
            >
            {error}
            </Typography>
         )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#e5ecea" },
                "&:hover fieldset": { borderColor: "#07866f" },
                "&.Mui-focused fieldset": { borderColor: "#07866f" },
              },
            }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="FIRST NAME"
              name="firstName"
               value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              label="LAST NAME"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="email"
              label="EMAIL ADDRESS"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              type="password"
              label="PASSWORD"
              name="password"
              value={password}
               onChange={(event) => setPassword(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="PHONE NUMBER"
              name="phoneNumber"
             value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="ADDRESS"
              name="address"
               value={address}
              onChange={(event) => setAddress(event.target.value)}
              InputProps={{
                sx: { borderRadius: 0 },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 3,
                py: 1.5,
                backgroundColor: "#07866f",
                color: "#fff",
                borderRadius: 0,
                fontWeight: 700,
                letterSpacing: "0.1em",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#066d5c",
                  boxShadow: "none",
                },
              }}
            >
            
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </Button>

     <Typography
          variant="body2"
              align="center"
              color="text.secondary"
              sx={{ fontSize: "0.75rem" }}
            >
              ALREADY HAVE AN ACCOUNT?{" "}
              <Link to="/login" style={{ color: "#07866f", fontWeight: 700 }}>
                SIGN IN
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
