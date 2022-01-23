import TwoDimensional from '../two-dimentional.js';

class Kite extends TwoDimensional {
    #processInputValue() {
        const [diag1, diag2, sideA, sideB] = this.inputUser;
        const d1 = Number(diag1.value).toLocaleString('id-ID');
        const d2 = Number(diag2.value).toLocaleString('id-ID');
        const a = Number(sideA.value).toLocaleString('id-ID');
        const b = Number(sideB.value).toLocaleString('id-ID');
        const area = ((diag1.value * diag2.value) / 2).toLocaleString('id-ID');
        const resultPerimeter = 2 * sideA.value + 2 * sideB.value;
        const perimeter = resultPerimeter.toLocaleString('id-ID');
        const divideD1 = (diag1.value / 2).toLocaleString('id-ID');
        const totalLengthA = (2 * sideA.value).toLocaleString('id-ID');
        const totalLengthB = (2 * sideB.value).toLocaleString('id-ID');

        return { d1, d2, a, b, area, perimeter, divideD1, totalLengthA, totalLengthB };
    }

    displayAreaOfKite(...elements) {
        const [area1, area2] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas = 1/2 x ${data.d1} x ${data.d2}`;
        area2.innerText = `Luas = ${data.divideD1} x ${data.d2} = ${data.area}`;
    }

    displayPerimeterOfKite(...elements) {
        const [perimeter1, perimeter2] = elements;
        const data = this.#processInputValue();

        perimeter1.innerText = `Keliling = ( 2 x ${data.a} ) + ( 2 x ${data.b} )`;
        perimeter2.innerText = `Keliling = ${data.totalLengthA} + ${data.totalLengthB} = ${data.perimeter}`;
    }
}

export default Kite;
