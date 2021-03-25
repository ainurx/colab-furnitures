import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

// SCSS
import './scss/_style.scss'

// COMPONENTS
import Jumbotron from './components/Jumbotron'
import Product from './components/Product'
import Furniture from './components/Furniture'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar>
          <Container>
            <img src="logo.png"/>
            {/* <Typography variant="h6" className={classes.title}>
              News
            </Typography> */}
          </Container>
          <a className="btn-none text-primary">Sign Up</a>
          <a className="btn-orange text-orange">Sign In</a>
        </Toolbar>
      </AppBar>
      <Jumbotron/>
      <Product/>
      <Furniture/>
    </div>
  );
}

export default App;
