import * as React from 'react'
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from "@mui/material/styles";


const defaultTheme = createTheme()

export default function Register({props}) {
  const [firstName, setfirstName] = React.useRef


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
          <CssBaseline />
            <Box
              sx={{display: 'flex',
                alignItems: 'center',
                marginTop: 10,
                flexDirection: 'column',
                backgroundColor: 'offwhite'}}
            >
              <Typography variant='h4' 
                    component="h1" 
                    align='center'
                    marginLeft={-8} 
                    textTransform={'uppercase'} 
                    fontWeight={800} 
                    fontFamily={'lucida grand'}
                    marginBottom={5}
              >Login</Typography>

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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    fullWidth
                    />
                  </Grid> 
                  <Grid item xs={12}>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                    >Login</Button>
                </Grid>   

              </Grid>
              </Box>
            </Box>
        </Container>
      </ThemeProvider>
    );
  }
