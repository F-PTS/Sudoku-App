import { safeToPlace } from "./placementCriteria.js";

const BLANK_BOARD = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// żeby wypełnić randomowymi wartościami (funkcja fillSudoku), najpierw musimy sprawić 
// czy wszystkie komórki z wartością 0 zostały wskazane przez funkcję nextEmptyCell.
// następnie musimy wylosować random liczbę sprzedziału (0, 9>
// czyli w naszym wypadku posibbleNumbers

const posibbleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const nextEmptyCell = mapToSolve => {
    const emptyCell = {rowIndex: "", columnIndex: ""}

    mapToSolve.forEach( (row, rowIndex) => {
        if(emptyCell.columnIndex !== "") return
        
        let firstZero = row.find(column => column === 0)
    
        //jeśli nie ma więcej zer
        if(!firstZero) return
        emptyCell.rowIndex = rowIndex
        emptyCell.columnIndex = row.indexOf(firstZero)
    })

    if (emptyCell.columnIndex !== "") return emptyCell
    // jeśli emptycell jest puste to znaczy że nie ma już żadnych zer
    return false
}
