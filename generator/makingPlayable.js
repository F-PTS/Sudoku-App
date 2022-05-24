import {completedSudoku, fillSudoku}  from "./sudokuGenerator.js";

const removeRandom = (solvedMap, holes) => {
    const removedValues = []

    while (removedValues.length < holes){
        const value = Math.floor(Math.random() * 81)
        const randomRowIndex = Math.floor(value / 9)
        const randomColumnIndex = value % 9
    

        if(!solvedMap[randomRowIndex]) continue; // jeśli nie ma takiego rzędu to go nie usuniemy
        if(solvedMap[randomRowIndex][randomColumnIndex] == 0) continue; // nie ma co dodawać zera

        removedValues.push({
            rowIndex: randomRowIndex,
            columnIndex: randomColumnIndex,
            value: solvedMap[randomRowIndex][randomColumnIndex]
        })
        solvedMap[randomRowIndex][randomColumnIndex] = 0 // usuwamy pole z wartością

        const proposedMap = solvedMap.map(row => row.slice())
        
        // teraz, korzystając z algorytmu backtrackingowego próbujemy rozwiązać clonedMap.
        // jeżeli nie da się, przywracamy usuniętą wartość i usuwamy ją z listy
        if( !fillSudoku(proposedMap) ){
            solvedMap[randomRowIndex][randomColumnIndex] = removedValues.pop().value
        }
    }

    return [removedValues, solvedMap]
}

let chwilowa = completedSudoku();

console.log(chwilowa);
console.log('\n \n \n ______________________ \n \n \n')
console.log(removeRandom(chwilowa, 5));