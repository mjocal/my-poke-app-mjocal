import React, { useRef, useState } from "react";
import "../styles/global.scss";
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
import { useFirebaseAuth } from "../contexts/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const MIN_PASSWORD_CHARACTERS = 8;

export default function Login() {
  const { login } = useFirebaseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (email, password) => {
    try {
      await login(email, password);
    } catch (error) {
      setError("Log in failed");
    }
  };

  //termina forma antigua

  // // version majo
  //   async function handleSubmit(e) {
  //     e.preventDefault();

  //     try {
  //       setError("");
  //       setLoading(true);
  //       await login(emailRef.current.value, passwordRef.current.value);
  //       navigate("/home");
  //     } catch {
  //       setError("Log in failed");
  //     }
  //     setLoading(false);
  //   }

  return (
    <main>
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
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  type="email"
                  // inputRef={emailRef}
                  // onChange={handleEmailChange}
                  required
                />
              </FormControl>
              <br />
              <FormControl variant="standard" fullWidth={true}>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  // inputRef={passwordRef}
                  // onChange={handlePasswordChange}
                  required
                />
              </FormControl>
              <Button
                size="medium"
                variant="contained"
                type="submit"
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
            <Button component={Link} to="/signin" size="small">
              Register here
            </Button>
          </CardActions>
        </Container>
      </Card>
    </main>
  );
}
