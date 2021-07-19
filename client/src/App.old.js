import React, { useEffect, useState } from 'react';

import { Container, AppBar, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/ghidator.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import UseStyles from './styles';



const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = UseStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);


  return (

    <Container maxWidth="lg">

      <AppBar position="static" color="inherit" className={classes.appBar}>
        <img src={memories} alt="memories" height="100" className={classes.image}/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>

            <Grid item xs={12} sm={10} md={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>

    </Container>
  );
}
 
export default App;