import React from "react"

function Keypad() {
    function handleSearch(e) {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={handleSearch} />
    )
}

export default Keypad;