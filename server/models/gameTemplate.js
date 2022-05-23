import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
    map_ID: String,
    user_ID: String,
    name: String,
    isSolved: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Game = mongoose.model('Game', gameSchema);

export default Game;