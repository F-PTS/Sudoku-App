import { accordionActionsClasses } from "@mui/material";

const gamesReducer = (games = [], actions) => {
    switch(actions.type) {
        case 'FETCH_ALL':
            return actions.payload;
        case 'CREATE':
            return [ ...games, actions.payload ];
        default:
            return games;
    }
}

export default gamesReducer;