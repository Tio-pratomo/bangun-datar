import TwoDimensional from './two-dimentional.js';

class Triangle extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayAreaOfTriangle(...elements) {
        const [base, sideHeight, sumAt, area] = elements;
        const [sideA, height, ,] = this.inputUser;
        base.innerText = sideA.value;
        sideHeight.innerText = height.value;
        sumAt.innerText = base.innerText * sideHeight.innerText;
        area.innerText = sumAt.innerText / 2;
    }

    displayPerimeterOfTriangle(...elements) {
        const [a, b, c, perimeterOfTriangle] = elements;
        const [sideA, , sideB, sideC] = this.inputUser;

        a.innerText = sideA.value;
        b.innerText = sideB.value;
        c.innerText = sideC.value;

        perimeterOfTriangle.innerText = Number(sideA.value) + Number(sideB.value) + Number(sideC.value);
    }
}

export default Triangle;
