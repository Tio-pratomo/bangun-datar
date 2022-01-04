import TwoDimensional from '../two-dimentional.js';

class Cube extends TwoDimensional {
    #processInputValue() {
        const [sideS] = this.inputUser;
        const s = Number(sideS.value).toLocaleString('id-ID');
        const volume = Math.pow(Number(sideS.value), 3).toLocaleString('id-ID');
        const area = (Math.pow(sideS.value, 2) * 6).toLocaleString('id-ID');

        return { s, volume, area };
    }

    displayVolumeCube(...elements) {
        const [volume1, volume2] = elements;
        const data = this.#processInputValue();

        volume1.innerText = `Volume = ${data.s} x ${data.s} x ${data.s}`;
        volume2.innerText = `Volume = ${data.volume}`;
    }

    displayAreaOfCube(...elements) {
        const [area1, area2] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas Permukaan = ${data.s} x ${data.s} x 6`;
        area2.innerText = `Luas Permukaan = ${data.area}`;
    }
}

export default Cube;
