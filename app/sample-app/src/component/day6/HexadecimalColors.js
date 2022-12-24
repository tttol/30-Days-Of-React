import Box from "./Box";
import './Box.css'

function HexadecimalColors() {
    const SIZE = 32;
    const numbers = [...Array(SIZE)].map((_, i) => i);

    const colorBoxes = [];
    numbers.forEach((element, index) => {
            const colorCodeHex = '#' + Math.random().toString(16).slice(2, 8);
            colorBoxes.push(<Box domObj={{value: colorCodeHex, style: colorCodeHex}} styleClass="hexadecimalColorBox" />)
            if ((index + 1) % 8 === 0) colorBoxes.push(<br/>)
        }
    )

    return (
        <div className="containerBox">
            <h1>Hexadecimal Colors</h1>
            {colorBoxes}
        </div>
    );
}

export default HexadecimalColors;