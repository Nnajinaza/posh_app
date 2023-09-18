import * as React from "react";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Meta from "../component/Meta";
import { NavLink } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("hello");
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get("username"),
      password: data.get("password"),
    });
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Meta title={"Login"} />

        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 10,
            flexDirection: "column",
            backgroundColor: "offwhite",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            alignItems="center"
            textTransform={"uppercase"}
            fontWeight={800}
            fontFamily={"lucida grand"}
            marginBottom={5}
            justifyContent={"center"}
            
          >
            LOGIN
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginBottom: 1}}>
                <TextField
                  name="Username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 2}}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sx={{ marginBottom: 1}}>
                <Link
                  to="/forgotpassword"
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="secondary"
                >
                  Forgot password
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  flexDirection: "row",
                  float: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "space-between",
                  gap: 1,
                  marginBottom: 15
                }}
                spacing={5}
              >
                <Button
                  type="submit"
                  variant="contained"
                  xs={12}
                  sx={{ width: 195, mb: 2 }}
                >
                  Login
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  xs={12}
                  sx={{ width: 195, mb: 2, float: "right", mr: 0}}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
