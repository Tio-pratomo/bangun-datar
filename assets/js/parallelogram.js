import TwoDimensional from './two-dimentional.js';

class Parallelogram extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayAreaOfParallelogram(...elements) {
        const [sideA, height, area] = elements;
        const [a, h] = this.inputUser;

        sideA.innerText = a.value;
        height.innerText = h.value;
        area.innerText = sideA.innerText * height.innerText;
    }

    displayPerimeterOfParallelogram(...elements) {
        const [[sideA, sideA1], [sideB, sideB1], perimeterOfParallelogram] = elements;
        const [a, , b] = this.inputUser;

        sideA.innerText = a.value;
        sideA1.innerText = a.value;
        sideB.innerText = b.value;
        sideB1.innerText = b.value;

        perimeterOfParallelogram.innerText =
            Number(sideA.innerText) + Number(sideA1.innerText) + Number(sideB.innerText) + Number(sideB1.innerText);
    }
}

export default Parallelogram;
