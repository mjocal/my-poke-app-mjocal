import React, { useState } from "react";
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
  FormHelperText,
} from "@mui/material";
import banner from "./../store/images/sign-in/sign-in-banner.png";
import { Container } from "@mui/system";
import { useFirebaseAuth } from "../contexts/FirebaseContext";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const MIN_PASSWORD_CHARACTERS = 8;

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Please check email").required(),
  password: Yup.string()
    .required()
    .matches(
      RegExp(
        `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#a$%^&*])(?=.{${MIN_PASSWORD_CHARACTERS},})`
      ),
      "Password should be at least 8 characters long"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export default function SignIn() {
  const { signin } = useFirebaseAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      await signin(values.email, values.password);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setError("Account creation failed");
    }
  };

  return (
    <main>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
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
                    <FormHelperText id="component-error-text">
                      {touched.email && errors.email}
                    </FormHelperText>
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
                  <br />
                  <FormControl variant="standard" fullWidth={true}>
                    <InputLabel htmlFor="confirmPassword">
                      Confirm Password
                    </InputLabel>
                    <Input
                      id="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                    />
                  </FormControl>
                  <FormHelperText id="component-error-text">
                    {touched.confirmPassword && errors.confirmPassword}
                  </FormHelperText>
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
        )}
      </Formik>
    </main>
  );
}
