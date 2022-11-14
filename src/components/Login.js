import React, { useState } from "react";
import "../styles/global.scss";
import {
  CardMedia,
  CardContent,
  Alert,
  Typography,
  CardActions,
  Button,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import banner from "./../store/images/sign-in/banner.jpg";
import { Container } from "@mui/system";
import { useFirebaseAuth } from "../contexts/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import StyledFormCard from "./shared/styledFormCard";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Please check email").required(),
  password: Yup.string().required(),
});

export default function Login() {
  const { login } = useFirebaseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      await login(values.email, values.password, navigate, "/home");
    } catch (error) {
      alert("failed login");
      console.error(error);
      setError("Login failed");
    }
  };

  return (
    <main>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleFormSubmit}
        validateOnBlur
        validateOnChange
        validateOnMount
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
          isValidating,
        }) => (
          <StyledFormCard>
            <CardMedia component="img" image={banner} alt="pokemon banner" />
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
                      error={touched.email && !!errors.email}
                      required
                      label="Email"
                      type="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                  </FormControl>
                  <br />
                  <FormControl variant="standard" fullWidth={true}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input
                      id="password"
                      error={touched.password && !!errors.password}
                      required
                      label="Password"
                      type="password"
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                    />
                    <FormHelperText id="component-error-text">
                      {touched.password && errors.password}
                    </FormHelperText>
                  </FormControl>
                  <Button
                    loading={isSubmitting || isValidating}
                    disabled={!isValid}
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
          </StyledFormCard>
        )}
      </Formik>
    </main>
  );
}
