import { useState } from "react";
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import medQueueMark from "../assets/logo/medqueue-mark.svg";
import { registerDemoAccount } from "../utils/demoAuth";

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError("Please complete all required fields.");
      return;
    }

    setLoading(true);
    try {
      await registerDemoAccount(
        { firstName, lastName, email, phoneNumber, address },
        password,
      );
      navigate("/patient-dashboard", { replace: true });
    } catch (signupError) {
      setError(signupError.message || "Unable to create the demo account.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
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
            Create one browser-only demo account. Do not use real patient information or passwords.
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
      <Footer />
    </>
  );
}
