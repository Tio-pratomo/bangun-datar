import TwoDimensional from '../two-dimentional.js';

class Circle extends TwoDimensional {
    displayAreaOfCircle(...elements) {
        const [area1, area2] = elements;
        const [circleRadius] = this.inputUser;

        if (circleRadius.value % 7 === 0) {
            area1.innerText = `Luas = 22/7 x ${Number(circleRadius.value).toLocaleString('id-ID')} x ${Number(
                circleRadius.value
            ).toLocaleString('id-ID')}`;

            const result = (22 / 7) * Math.pow(circleRadius.value, 2);

            area2.innerText = `Luas = ${result.toLocaleString('id-ID')}`;
        } else {
            area1.innerText = `Luas = 3,14 x ${Number(circleRadius.value).toLocaleString('id-ID')} x ${Number(
                circleRadius.value
            ).toLocaleString('id-ID')}`;

            const result = 3.14 * Math.pow(circleRadius.value, 2);
            area2.innerText = `Luas = ${result.toLocaleString('id-ID')}`;
        }
    }

    displayPerimeterOfCircle(...elements) {
        const [perimeter1, perimeter2] = elements;
        const [circleRadius] = this.inputUser;

        if (circleRadius.value % 7 === 0) {
            perimeter1.innerText = `Keliling = 2 x 22/7 x ${Number(circleRadius.value).toLocaleString('id-ID')}`;

            const result = 2 * 22 * (circleRadius.value / 7);
            perimeter2.innerText = `Keliling = ${result.toLocaleString('id-ID')}`;
        } else {
            perimeter1.innerText = `Keliling = 2 x 3,14 x ${Number(circleRadius.value).toLocaleString('id-ID')}`;

            const result = 2 * 3.14 * circleRadius.value;
            perimeter2.innerText = `Keliling = ${result.toLocaleString('id-ID')}`;
        }
    }
}

export default Circle;
