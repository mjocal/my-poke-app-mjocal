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
import banner from "./../store/images/sign-in/banner.jpg";
import { Container } from "@mui/system";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Log in failed");
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
              Welcome back!
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
              <Button
                size="medium"
                variant="contained"
                type="submit"
                disabled={loading}
                style={{
                  marginTop: "1rem",
                }}
              >
                Log in
              </Button>
            </form>
          </CardContent>
          <CardActions>
            <Typography variant="body2" color="text.secondary">
              New to Pokemanazos ?
            </Typography>
            <Button component={Link} to="/register" size="small">
              Register here
            </Button>
          </CardActions>
        </Container>
      </Card>
    </>
  );
}
