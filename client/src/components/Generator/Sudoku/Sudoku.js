import React from "react";
import SudokuCell from './SudokuCell/SudokuCell'

import { removeRandom, completedSudoku } from '../../../generator/makingPlayable.js'

const Sudoku = () => {

    const sudokuMap = removeRandom(completedSudoku(), 25)

    console.log('SUDOKU:', sudokuMap)

    return (
        <div>
            {sudokuMap[1].map(row => {
                let i = 0
                
                return row.map(number => {
                    if(i % 9 == 0) {
                        { i++ }
                        return(
                            <>
                                <br />
                                <SudokuCell value={number}/>
                            </>
                        )
                    } 

                    { i++ }

                    return (
                        <>
                            <SudokuCell value={number}/>
                        </>
                    )
                });
            })}
        </div>
    )
}

export default Sudoku;