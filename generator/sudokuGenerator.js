import { safeToPlace } from "./placementCriteria.js";

const blankMap = [
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

let counter;

// żeby wypełnić randomowymi wartościami (funkcja fillSudoku), najpierw musimy sprawić 
// czy wszystkie komórki z wartością 0 zostały wskazane przez funkcję nextEmptyCell.
// następnie musimy wylosować liczbę sprzedziału (0, 9> czyli posibbleNumbers

// najpierw musimy przetasować possibleNUmbers
const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const shuffle = array => {
    let sortedArray = [...array] // klonujemy possibleNumbers, by wykonywać operacje na nowej tablicy.

    for(let i = sortedArray.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [ sortedArray[i], sortedArray[j] ] = [ sortedArray[j], sortedArray[i] ]; // przypisanie wielu zmiennych na raz
    }

    return sortedArray;
}

const nextEmptyCell = mapToSolve => {
    const emptyCell = {rowIndex: "", columnIndex: ""}

    mapToSolve.forEach( (row, rowIndex) => {
        if(emptyCell.columnIndex !== "") return;
        
        let firstZero = row.find(column => column == 0)
    
        //jeśli nie ma więcej zer
        if(firstZero === undefined) return;
        emptyCell.rowIndex = rowIndex
        emptyCell.columnIndex = row.indexOf(firstZero)
    })

    if (emptyCell.columnIndex !== "") return emptyCell

    // jeśli emptyCell jest puste to znaczy że nie ma już żadnych zer
    return false
}

const fillSudoku = mapToFill => {
    const emptyCell = nextEmptyCell(mapToFill);

    if (!emptyCell) return mapToFill

    for(let numberToPlace of shuffle(possibleNumbers)){

        counter++

        if ( counter > 20_000_000 ) throw new Error ("Recursion Timeout") // jeśli tego nie dodamy, stworzymy rekurencyjny loop

        if (safeToPlace(mapToFill, emptyCell, numberToPlace)){
            // wstaw numberToPlace
            mapToFill[emptyCell.rowIndex][emptyCell.columnIndex] = numberToPlace
        
            // rekurencja funkcji, żeby wypełnić pozostałę emptyCell w mapToFill
            if(fillSudoku(mapToFill)) return mapToFill
    
            // jeśli nie da się wypełnić następnego pola numberToPlace, to numberToPlace ma złą wartość
            // dzięki algorytmowi backtrackingowmu resetujemy całą akcję i próbujeny z następnym numerem
            mapToFill[emptyCell.rowIndex][emptyCell.columnIndex] = 0
        }
    }

    // kolejny element backtrackingu, gdy nie możemy wpisać żadnego numeru zwracamy fałsz,
    // co sprawia, że poprzedni cykl wstawiania się resetuje i zaczynamy następny
    return false
}

const newSolvedMap = () => {
    const newMap = blankMap.map( row => row.slice() ) // nie użyłem [...blankMap] bo słabo nadaje się to do klonowania wielowymiarowych tablic.
    const filledMap = fillSudoku(newMap)
    return filledMap
}

console.log(newSolvedMap());

