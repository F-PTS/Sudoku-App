import React from 'react'
import { useSelector } from 'react-redux'

import Game from './Game/Game'

// import gamesClasses from './components/Games/style'

const Games = () => {

    const games = useSelector((state) => state.games)

    console.log(games)

    return (
        <>
            <h1>GAMES</h1>
            <Game />
            <Game />
        </>
    )
}

export default Games