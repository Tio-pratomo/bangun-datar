import TwoDimensional from './two-dimentional.js';

class Rhombus extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayAreaOfRhombus(...elements) {
        const [area1, area2] = elements;
        const [d1, d2] = this.inputUser;
        const resultArea = (1 / 2) * d1.value * d2.value;

        area1.innerText = `Luas = 1/2 x ${d1.value} x ${d2.value}`;
        area2.innerText = `Luas = ${(1 / 2) * d1.value} x ${d2.value} = ${resultArea}`;
    }

    displayPerimeterOfRhombus(...elements) {
        const [perimeter1, perimeter2] = elements;
        const [, , s] = this.inputUser;

        perimeter1.innerText = `Keliling = 4 x ${s.value}`;
        perimeter2.innerText = `Keliling = ${4 * s.value}`;
    }
}

export default Rhombus;
