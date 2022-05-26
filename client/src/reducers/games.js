const gamesReducer = (games = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return games;
        default:
            return games;
    }
}

export default gamesReducer;