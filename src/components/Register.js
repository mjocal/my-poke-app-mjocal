import React, { useRef, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import banner from "./../images/sign-in/banner.jpg";
import { Container } from "@mui/system";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { register } = useAuth;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Account creation failed");
    }
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
              Sign Up
            </Typography>
            <Container></Container>
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
                id="password"
                type="password"
                inputRef={passwordConfirmationRef}
                required
              />
            </FormControl>
            <Button
              size="medium"
              variant="contained"
              disabled
              style={{
                marginTop: "1rem",
              }}
            >
              Register
            </Button>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              Already have an account?
            </Typography>
            <div />
            <Button size="small">Sign in here</Button>
          </CardActions>
        </Container>
      </Card>
    </>
  );
}
