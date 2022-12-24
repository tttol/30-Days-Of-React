import './Color.css'
import React from 'react';

const getColorCodeHex = () => {
    return '#' + Math.random().toString(16).slice(2, 8);
}

// function Color() {
//     const colorCode = getColorCodeHex();
//     return(
//         <div className='colorBox' style={{backgroundColor: colorCode}}>{colorCode}</div>
//     );
// }

class Color extends React.Component {
    render() {
        const colorCode = getColorCodeHex();
        return (
            <div className='colorBox' style={{backgroundColor: colorCode}}>{colorCode}</div>
        )
    }
}

export default Color;