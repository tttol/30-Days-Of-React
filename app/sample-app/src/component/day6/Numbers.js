import Box from "./Box";
import './Box.css'

function Numbers() {
    const SIZE = 32;
    const numbers = [...Array(SIZE)].map((_, i) => i);
    const style = {
        prime: "#f52c2c",
        even: "#30ba43",
        odd: "#f5d63d"
    };

    const getNumberInfo = (number) => {
        const isEven = number % 2 === 0;

        if (isPrime(number)) {
            return {value: number, style: style.prime};
        } else if (isEven) {
            return {value: number, style: style.even};
        } else {
            return {value: number, style: style.odd};
        }
    }

    const isPrime = (number) => {
        if (number < 2) return false;
        
        for (let i = 2; i < number; i++) {
            if (number % i === 0) return false;   
        }
        return true;
    }

    const numberBoxes = [];
    numbers.forEach((element, index) => {
            numberBoxes.push(<Box domObj={getNumberInfo(element)} styleClass="numberBox" />)
            if ((index + 1) % 8 === 0) numberBoxes.push(<br/>)
        }
    )
    return (
        <div className="containerBox">
            <h1>Number Generator</h1>
            {numberBoxes}
        </div>
    );
}

export default Numbers;