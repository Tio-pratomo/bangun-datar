import TwoDimensional from '../two-dimentional.js';

class Triangle extends TwoDimensional {
    displayAreaOfTriangle(...elements) {
        const [area1, area2, area3] = elements;
        const [sideA, height, ,] = this.inputUser;

        const totalAT = sideA.value * height.value;
        const result = totalAT / 2;

        area1.innerText = `Luas = 1/2 x ${Number(sideA.value).toLocaleString('id-ID')} x ${Number(
            height.value
        ).toLocaleString('id-ID')}`;

        area2.innerText = `Luas = 1/2 x ${totalAT.toLocaleString('id-ID')}`;
        area3.innerText = `Luas = ${result.toLocaleString('id-ID')}`;
    }

    displayPerimeterOfTriangle(...elements) {
        const [perimeter1, perimeter2] = elements;
        const [sideA, , sideB, sideC] = this.inputUser;

        const result = Number(sideA.value) + Number(sideB.value) + Number(sideC.value);

        perimeter1.innerText = `Keliling = ${Number(sideA.value).toLocaleString('id-ID')} + ${Number(
            sideB.value
        ).toLocaleString('id-ID')} + ${Number(sideC.value).toLocaleString('id-ID')}`;

        perimeter2.innerText = `Keliling = ${result.toLocaleString('id-ID')}`;
    }
}

export default Triangle;
