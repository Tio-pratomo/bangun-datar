import TwoDimensional from '../two-dimentional.js';

class Rhombus extends TwoDimensional {
    #processInputValue() {
        const [diag1, diag2, sideS] = this.inputUser;
        const d1 = Number(diag1.value).toLocaleString('id-ID');
        const d2 = Number(diag2.value).toLocaleString('id-ID');
        const s = Number(sideS.value).toLocaleString('id-ID');
        const area = ((diag1.value * diag2.value) / 2).toLocaleString('id-ID');
        const perimeter = (4 * sideS.value).toLocaleString('id-ID');
        const divideD1 = (diag1.value / 2).toLocaleString('id-ID');

        return { d1, d2, s, area, perimeter, divideD1 };
    }

    displayAreaOfRhombus(...elements) {
        const [area1, area2] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas = 1/2 x ${data.d1} x ${data.d2}`;
        area2.innerText = `Luas = ${data.divideD1} x ${data.d2} = ${data.area}`;
    }

    displayPerimeterOfRhombus(...elements) {
        const [perimeter1, perimeter2] = elements;
        const data = this.#processInputValue();

        perimeter1.innerText = `Keliling = 4 x ${data.s}`;
        perimeter2.innerText = `Keliling = ${data.perimeter}`;
    }
}

export default Rhombus;
