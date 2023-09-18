import * as React from 'react'
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Meta from '../component/Meta';


const defaultTheme = createTheme()

export default function Register() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log("hello")
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  }


    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" >
        <Meta title={"Register"} />
          <CssBaseline />
            <Box
              sx={{display: 'flex',
                alignItems: 'center',
                marginTop: 10,
                flexDirection: 'column'}}
            >
              <Typography variant='h4' 
                    component="h1" 
                    align='center'
                    marginLeft={-8} 
                    textTransform={'uppercase'} 
                    fontWeight={800} 
                    fontFamily={'lucida grand'}
                    marginBottom={5}
              >Register</Typography>

              <Box component="form" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="username"
                      required
                      fullWidth
                      id="username"
                      label="username"
                      autoFocus
                      />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField 
                      name='firstname'
                      label="First Name"
                      required
                      fullWidth
                      autoComplete='first-name'/>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField 
                      name='lastname'
                      label="Last Name"
                      required
                      fullWidth/>
                  </Grid>

                  <Grid item xs={12}>
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

                  <Grid sx={{flexDirection: "row", 
                            float: "left", 
                            ml: 2, 
                            display: "flex", 
                            alignItems: "center", 
                            justifyItems: "space-between",
                          gap: 8}} 
                            spacing={5}
                            >
                  <Button
                            type="submit"
                            variant="contained"
                            xs={7}
                            sx={{ mt: 3, mb: 2, }}
                  >Sign Up</Button>
                  <NavLink to="/login" variant="body2" sx={{mr: 7, pl: 10, fontWeight: 300, pb: 1}}>
                    Already have an account? Log in
                  </NavLink>
                </Grid>
              </Grid>
              </Box>
            </Box>
        </Container>
      </ThemeProvider>
    );
  }
