import TwoDimensional from './two-dimentional.js';

class Kite extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayAreaOfKite(...elements) {
        const [area1, area2] = elements;
        const [d1, d2] = this.inputUser;

        area1.innerText = `Luas = 1/2 x ${d1.value} x ${d2.value}`;
        area2.innerText = `Luas = ${(1 / 2) * d1.value} x ${d2.value} = ${(1 / 2) * d1.value * d2.value}`;
    }

    displayPerimeterOfKite(...elements) {
        const [perimeter1, perimeter2] = elements;
        const [, , a, b] = this.inputUser;

        perimeter1.innerText = `Keliling = (2 x ${a.value}) + (2 x ${b.value})`;
        perimeter2.innerText = `Keliling = ${2 * a.value} + ${2 * b.value} = ${2 * a.value + 2 * b.value}`;
    }
}

export default Kite;
