const reducer = (games = [], action) => {
    if(action.type === 'CREATE') return games;
    if(action.type === 'FETCH_ALL') return games;

    return games;
}
export default reducer;