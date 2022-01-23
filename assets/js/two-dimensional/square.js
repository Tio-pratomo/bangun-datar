import TwoDimensional from '../two-dimentional.js';

class Square extends TwoDimensional {
    displayAreaOfSquare(...elements) {
        const [lateral] = this.inputUser;
        const [area1, area2] = elements;

        area1.innerText = `Luas = ${Number(lateral.value).toLocaleString('id-ID')} x ${Number(
            lateral.value
        ).toLocaleString('id-ID')}`;

        const result = Math.pow(lateral.value, 2);
        area2.innerText = `Luas = ${result.toLocaleString('id-ID')}`;
    }

    displayPerimeterOfSquare(...elements) {
        const [lateral] = this.inputUser;
        const [perimeter1, perimeter2] = elements;

        perimeter1.innerText = `Keliling = ${Number(lateral.value).toLocaleString('id-ID')} x 4`;

        const result = 4 * lateral.value;
        perimeter2.innerText = `Keliling = ${result.toLocaleString('id-ID')}`;
    }
}

export default Square;
