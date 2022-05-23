import express from 'express';

// routes logic
import { getGames, createGame } from '../controllers/games.js';

const router = express.Router();

// routes
router.get('/', getGames);
router.post('/', createGame);

export default router;