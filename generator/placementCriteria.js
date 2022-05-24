// z zasad sudoku wynika, że aby liczba numberToPlace mogła zostać dodana to musi 
// spełniać 3 warunki:

// 1. numberToPlace nie może istnieć w rzędzie.
// 2. numberToPlace nie może istnieć w kolumnie
// 3. numberToPlace nie może istnieć w tym samym małym kwadracie 3x3.


// 1. numberToPlace nie może istnieć w rzędzie
const isRowSafe = (mapToSolve, emptyCell, numberToPlace) => {
    // jesli rząd mapy, w którym program nie znajdzie numberToPlace zwróci false
    return mapToSolve[emptyCell.rowIndex].find(num => num == numberToPlace) == -1
}

// 2. numberToPlace nie może istnieć w kolumnie.
const isColumnSafe = (mapToSolve, emptyCell, numberToPlace) => {
    // żeby sprawdzić czy numberToPlace istnieje w kolumnie, trzeba
    // przeiterować przez każdy row tablicy mapToSolve (rowToCheck) i wtedy sprawdzić,
    // czy w każdym z rowToCheck[emptyCell.columnIndex] jest już numberToPlace
    return !mapToSolve.some(rowToCheck[emptyCell.columnIndex] == numberToPlace) 
}

// 3. numberToPlace nie może istnieć w tym samym, małym kwadracie 3x3
    // aby to zacząć, najpierw musimy w jakiś sposób wybrać który kwadrat chcemy sprawdzić.
const isBoxSafe = (mapToSolve, emptyCell, numberToPlace) => {
    // te dwie zmienne zwrócą nam kordynaty do lewej górnej komórki małego kwadratu 3x3
    
    //  | X |   |   |
    //  -------------
    //  |   |   |   |
    //  -------------
    //  |   |   |   |

    boxStartRow = emptyCell.rowIndex - (emptyCell.rowIndex % 3) // musimy odejmować index % 3 bo js indexuje od 0
    boxStartColumn = emptyCell.columnIndex - (emptyCell.rowIndex % 3) // musimy odejmować index % 3 bo js indexuje od 0
    let isSafe = true

    for(boxRow of [0, 1, 2]) {
        for(boxColumn of [0, 1, 2]) {
            if(mapToSolve[boxStartRow + boxRow][boxStartColumn + boxColumn] == numberToPlace){
                isSafe = false
            }
        }
    }

    return isSafe
}

// sprawdzamy czy numer mapa i kordynaty pustej komórki tworzą kombinację
// która nie łamie żadnych zasad
export const safeToPlace = (mapToSolve, emptyCell, numberToPlace) => {
    return isRowSafe(mapToSolve, emptyCell, numberToPlace) &&
            isColumnSafe(mapToSolve, emptyCell, numberToPlace) &&
            isBoxSafe(mapToSolve, emptyCell, numberToPlace)
}