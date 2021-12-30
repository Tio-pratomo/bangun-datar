import TwoDimensional from './two-dimentional.js';

class Cube extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayVolumeCube(...elements) {
        const [s] = this.inputUser;
        const [volume1, volume2] = elements;

        volume1.innerText = `Volume = ${s.value} x ${s.value} x ${s.value}`;
        volume2.innerText = `Volume = ${Math.pow(Number(s.value), 3)}`;
    }

    displayAreaOfCube(...elements) {
        const [s] = this.inputUser;
        const [area1, area2] = elements;

        area1.innerText = `Luas Permukaan = ${s.value} x ${s.value} x 6`;
        area2.innerText = `Luas Permukaan = ${Math.pow(Number(s.value), 2) * 6}`;
    }
}

export default Cube;
