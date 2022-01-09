import {Card, TextField, Typography, CardActions, CardContent, Button, Container, Grid} from "@material-ui/core";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import {login} from '../actions/auth'
import {Navigate} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 400,
    padding: 25,
  },
  dBlock: {
    display: "block",
  },
  title: {
    fontSize: 14,
  },
  py5: {
    paddingBottom: 5,
    paddingTop: 5,
  }
}));

function Login() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const onSubmit = e => {
    e.preventDefault();
    const form = {username, password};
    dispatch(login(form));
  }

  if (isAuthenticated) {
    return <Navigate to="/tours"/>
  }

  return (
      <Container>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight: '100vh'}}
        >
          <form onSubmit={onSubmit}>
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2" className={classes.py5}>
                  Login to continue
                </Typography>
                <div className={classes.py5}>
                  <TextField
                      label="Username"
                      variant="outlined"
                      placeholder="Enter your username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className={classes.py5}>
                  <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

              </CardContent>
              <CardActions className={classes.dBlock}>
                <Button variant="contained" color="primary" type="submit">
                  Login
                </Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      </Container>
  );
}

export default Login