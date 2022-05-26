import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getGames } from './actions/games';

import Games from './components/Games/Games';
// import Game from './components/Games/Game/Game'
// import Generator from './components/Generator/Generator'

import classes from './styles.js';
// import gamesClasses from './components/Games/style'
// import gameClasses from './components/Games/Game/style'

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar sx={classes.appBar} position='static' color='inherit'>
                <Typography sx={classes.heading} variant='h3' align='center'>Portfolio Sudoku Project</Typography>
                <Typography sx={classes.bottomText} variant='subtitle1'>
                    Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. 
                    Magni quo eaque quisquam labore!
                    Magni optio nemo quisquam iure
                    recusandae ut perspiciatis obcaecati, 
                    similique et excepturi!
                </Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={2}>
                        <Grid item xs={12} sm={7}>
                            <Games />
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            {
                                // add href to the button below
                            }
                            <Button variant="contained">Create new game</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;