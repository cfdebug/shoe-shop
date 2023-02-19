import React from 'react';
const loading_spinner = require("../Loading.gif")

const Spinner = () => {
    return (
        <div>
            <img src={loading_spinner} alt="loading..." />
        </div>
    )
}

export default Spinner
