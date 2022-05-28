import React from "react";
import { TextField, Box } from "@mui/material"; 

const SudokuCell = (props) => {

    if(props.value == 0){
        return (
            <TextField defaultValue="" sx={{width: '50px', textAlign: "center"}}/>
        )
    } else {
        return (
            <TextField value={props.value} sx={{width: '50px', textAlign: "center"}}/>
        )
    }
}

export default SudokuCell