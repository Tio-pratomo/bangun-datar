import TwoDimensional from '../two-dimentional.js';

class Parallelogram extends TwoDimensional {
    #processInputValue() {
        const [inputA, inputHeight, inputB] = this.inputUser;
        const a = Number(inputA.value).toLocaleString('id-ID');
        const h = Number(inputHeight.value).toLocaleString('id-ID');
        const b = Number(inputB.value).toLocaleString('id-ID');

        const area = (inputA.value * inputHeight.value).toLocaleString('id-ID');
        const resultPerimeter =
            Number(inputA.value) + Number(inputB.value) + Number(inputA.value) + Number(inputB.value);
        const perimeter = resultPerimeter.toLocaleString('id-ID');

        return { a, h, b, area, perimeter };
    }

    displayAreaOfParallelogram(...elements) {
        const [area1, area2] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas = ${data.a} X ${data.h}`;
        area2.innerText = `Luas = ${data.area}`;
    }

    displayPerimeterOfParallelogram(...elements) {
        const [perimeter1, perimeter2] = elements;
        const data = this.#processInputValue();

        perimeter1.innerText = `Keliling = ${data.a} + ${data.b} + ${data.a} + ${data.b}`;
        perimeter2.innerText = `Keliling = ${data.perimeter}`;
    }
}

export default Parallelogram;
