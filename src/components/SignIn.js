import React, { useRef, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Alert,
  Typography,
  CardActions,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import banner from "./../store/images/sign-in/sign-in-banner.png";
import { Container } from "@mui/system";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Account creation failed");
    }

    setLoading(false);
  }

  return (
    <>
      <Card sx={{ minWidth: 345, maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="140"
          image={banner}
          alt="pokemon banner"
        />
        <Container>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Enter a new account
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleSubmit}>
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel htmlFor="component-simple">Email</InputLabel>
                <Input id="email" type="email" inputRef={emailRef} required />
              </FormControl>
              <br />
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel htmlFor="component-simple">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  inputRef={passwordRef}
                  required
                />
              </FormControl>
              <br />
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel htmlFor="component-simple">
                  Confirm Password
                </InputLabel>
                <Input
                  id="confirmPassword"
                  type="password"
                  inputRef={passwordConfirmationRef}
                  required
                />
              </FormControl>
              <Button
                size="medium"
                variant="contained"
                type="submit"
                disabled={loading}
                style={{
                  marginTop: "1rem",
                }}
              >
                Register
              </Button>
            </form>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              Already have an account?
            </Typography>
            <Button component={Link} to="/login" size="small">
              Sign in here
            </Button>
          </CardActions>
        </Container>
      </Card>
    </>
  );
}
