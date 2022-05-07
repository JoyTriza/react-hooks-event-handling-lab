// Code EyesOnMe Component Here
import React from `react`;

function EyesOnMe () {
    function showFocus() {
        console.log("Good!");
    }

    function showBlur() {
        console.log("Hey! Eyes on me!");
    }

    return (
        <button onFocus={showFocus} onBlur={showBlur}>
            Eyes on me
        </button>
    );

}
export default EyesOnMe;