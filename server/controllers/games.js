import game from '../models/gameTemplate.js'

//logic for routes/games.js.

export const getGames = async (req, res) => {
    try {
        //find all games in database
        const games = await game.find();

        res.status(200).json(games);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createGame = async (req, res) => {
    const game_req = req.body;
    
    // create new game using game schema and data from game_req
    const newGame = new game(game_req);

    try {
        await newGame.save();

        res.status(201).json(newGame);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}