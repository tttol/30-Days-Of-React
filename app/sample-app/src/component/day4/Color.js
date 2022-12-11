import './Color.css'

const getColorCodeHex = () => {
    return '#' + Math.random().toString(16).slice(2, 8);
}

function Color() {
    const colorCode = getColorCodeHex();
    return(
        <div className='box' style={{backgroundColor: colorCode}}>{colorCode}</div>
    );
}

export default Color;