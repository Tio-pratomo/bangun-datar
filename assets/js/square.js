import TwoDimensional from './two-dimentional.js';

class Square extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayPerimeterOfSquare(element) {
        const result = this.inputUser[0].value * 4;
        element.innerText = result;
    }

    displayLateral(elements) {
        elements.forEach((el) => {
            el.innerText = this.inputUser[0].value;
        });
    }

    displayAreaOfSquare(element) {
        const result = Math.pow(Number(this.inputUser[0].value), 2);
        element.innerText = result;
    }
}

export default Square;
