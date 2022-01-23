import TwoDimensional from '../two-dimentional.js';

class Rectangle extends TwoDimensional {
    displayAreaOfRectangle(...elements) {
        const [width, height] = this.inputUser;
        const [area1, area2] = elements;

        area1.innerText = `Luas = ${Number(width.value).toLocaleString('id-ID')} x ${Number(
            height.value
        ).toLocaleString('id-ID')}`;

        const result = width.value * height.value;
        area2.innerText = `Luas = ${result.toLocaleString('id-ID')}`;
    }

    displayPerimeterOfRectangle(...elements) {
        const [width, height] = this.inputUser;
        const [perimeter1, perimeter2] = elements;

        perimeter1.innerText = `Keliling = (2 x ${Number(width.value).toLocaleString('id-ID')}) + (2 + ${Number(
            height.value
        ).toLocaleString('id-ID')})`;

        const totalWidth = 2 * width.value;
        const totalHeight = 2 * height.value;
        const result = totalWidth + totalHeight;
        perimeter2.innerText = `Keliling = ${totalWidth.toLocaleString('id-ID')} + ${totalHeight.toLocaleString(
            'id-ID'
        )} = ${result.toLocaleString('id-ID')}`;
    }
}

export default Rectangle;
