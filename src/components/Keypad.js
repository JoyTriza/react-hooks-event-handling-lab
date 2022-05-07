// Code Keypad Component Here
import React from `react`;

function Keypad() {
    function changesMade() {
        console.log ("Entering Password...")
    }

    return (
        <input type = "password" onChange={changesMade}/>
    )
}

export default Keypad;