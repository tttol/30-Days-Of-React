import Box from "./Box";
import './Numbers.css'
import './Box.css'

function Numbers() {
    const SIZE = 32;
    const numbers = [...Array(SIZE)].map((_, i) => i);
    const style = {
        prime: "prime",
        even: "even",
        odd: "odd"
    };

    const getNumberInfo = (number) => {
        const isEven = number % 2 === 0;

        if (isPrime(number)) {
            return {number: number, styleClass: style.prime};
        } else if (isEven) {
            return {number: number, styleClass: style.even};
        } else {
            return {number: number, styleClass: style.odd};
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
            numberBoxes.push(<Box domObj={getNumberInfo(element)} />)
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