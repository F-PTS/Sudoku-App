import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, ButtonGroup, Container, TextField, Paper, Typography } from '@mui/material'

import { createGame } from '../../actions/games'
import Sudoku from './Sudoku/Sudoku';

const Generator = () => {

    const [gameData, setGameData] = useState({
        name: '',
        date: new Date(),
        isSolved: false,
        mapID: ''
        //userID
    });
    
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();

        dispatch(createGame(gameData));
    }

    const clear = () => {

    }

    return (
        <Paper sx={{padding: '25px 0'}}>
            <Container align="center">
                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <Typography variant='h5'>Create new Sudoku game!</Typography>

                    <Sudoku />

                    <TextField name="name"
                            variant="outlined"
                            label="Name" 
                            size="small"
                            fullWidth="true"
                            value={gameData.name}
                            onChange={e => setGameData({...gameData, name: e.target.value})}
                            sx={{margin: '25px 0'}}/>

                    <ButtonGroup variant="contained" size="small" xs={12} sm={7}> 
                        <Button size="small" color="error" onclick={clear}>dalate game</Button>
                        <Button size="small">generate new map</Button>
                        <Button size="small" color="success" type="submit">save game</Button>
                    </ButtonGroup>
                </form>
            </Container>
        </Paper>
    );
}

export default Generator;