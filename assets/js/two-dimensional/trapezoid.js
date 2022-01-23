import TwoDimensional from '../two-dimentional.js';

class Trapezoid extends TwoDimensional {
    #processInputValue() {
        const [inputA, inputHeight, inputB, inputC] = this.inputUser;
        const a = Number(inputA.value).toLocaleString('id-ID');
        const h = Number(inputHeight.value).toLocaleString('id-ID');
        const b = Number(inputB.value).toLocaleString('id-ID');
        const c = Number(inputC.value).toLocaleString('id-ID');

        const resultArea = ((Number(inputA.value) + Number(inputB.value)) * inputHeight.value) / 2;
        const area = resultArea.toLocaleString('id-ID');
        const resultPerimeter =
            Number(inputA.value) + Number(inputB.value) + Number(inputC.value) + Number(inputHeight.value);
        const perimeter = resultPerimeter.toLocaleString('id-ID');

        const sumAB = (Number(inputA.value) + Number(inputB.value)).toLocaleString('id-ID');
        const multipleABH = ((Number(inputA.value) + Number(inputB.value)) * inputHeight.value).toLocaleString('id-ID');

        return { a, h, b, c, area, perimeter, sumAB, multipleABH };
    }

    displayAreaOfTrapezoid(...elements) {
        const [area1, area2, area3] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas = ( ${data.a} + ${data.b} ) x ${data.h} ÷ 2`;
        area2.innerText = `Luas = ${data.sumAB} x ${data.h} ÷ 2`;
        area3.innerText = `Luas = ${data.multipleABH} ÷ 2 = ${data.area}`;
    }

    displayPerimeterOfTrapezoid(...elements) {
        const [perimeter1, perimeter2] = elements;
        const data = this.#processInputValue();

        perimeter1.innerText = `Keliling = ${data.a} + ${data.b} + ${data.c} + ${data.h}`;
        perimeter2.innerText = `Keliling = ${data.perimeter}`;
    }
}

export default Trapezoid;
