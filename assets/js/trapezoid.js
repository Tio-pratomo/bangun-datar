import TwoDimensional from './two-dimentional.js';

class Trapezoid extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayAreaOfTrapezoid(...elements) {
        const [sideA, sideB, height, calculateA, areaOfTrapezoid] = elements;
        const [inputA, inputHeight, inputB] = this.inputUser;

        sideA.innerText = inputA.value;
        sideB.innerText = inputB.value;
        height.innerText = inputHeight.value;

        calculateA.innerText = (Number(sideA.innerText) + Number(sideB.innerText)) * height.innerText;
        areaOfTrapezoid.innerText = calculateA.innerText / 2;
    }

    displayPerimeterOfTrapezoid(...elements) {
        const [a, b, c, h, perimeterOfTraperzoid] = elements;
        const [inputA, inputHeight, inputB, inputC] = this.inputUser;

        a.innerText = inputA.value;
        b.innerText = inputB.value;
        c.innerText = inputC.value;
        h.innerText = inputHeight.value;

        perimeterOfTraperzoid.innerText =
            Number(a.innerText) + Number(b.innerText) + Number(c.innerText) + Number(h.innerText);
    }
}

export default Trapezoid;
