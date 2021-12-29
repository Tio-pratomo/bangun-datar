import TwoDimensional from './two-dimentional.js';

class Circle extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    perimeterOfCircle() {
        if (this.inputUser[0].value % 7 === 0) {
            const result = (this.inputUser[0].value / 7) * 22 * 2;
            return result;
        } else {
            const result = 2 * 3.14 * this.inputUser[0].value;
            return result.toFixed(2);
        }
    }

    areaOfCircle() {
        if (this.inputUser[0].value % 7 === 0) {
            const result = (this.inputUser[0].value / 7) * this.inputUser[0].value * 22;
            return result;
        } else {
            const result = 3.14 * Math.pow(Number(this.inputUser[0].value), 2);
            return result.toFixed(2);
        }
    }

    displayAreaOfCircle(total) {
        total.innerText = this.areaOfCircle();
    }

    displayPerimeterOfCircle(total) {
        total.innerText = this.perimeterOfCircle();
    }

    displayPhi(elements) {
        elements.forEach((el) => {
            el.innerText = `${this.inputUser[0].value % 7 === 0 ? '22/7' : '3,14'}`;
        });
    }

    displayInputCircle(elements) {
        elements.forEach((el) => {
            el.innerText = `${this.inputUser[0].value}`;
        });
    }
}

export default Circle;
