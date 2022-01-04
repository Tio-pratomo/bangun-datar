import TwoDimensional from '../two-dimentional.js';

class Beam extends TwoDimensional {
    #processInputValue() {
        const [sideP, sideL, sideT] = this.inputUser;
        const p = Number(sideP.value).toLocaleString('id-ID');
        const l = Number(sideL.value).toLocaleString('id-ID');
        const t = Number(sideT.value).toLocaleString('id-ID');

        const volume = (sideP.value * sideL.value * sideT.value).toLocaleString('id-ID');
        const resultArea =
            2 * sideP.value * sideL.value + 2 * sideL.value * sideT.value + 2 * sideP.value * sideT.value;
        const area = resultArea.toLocaleString('id-ID');

        const totalP = (2 * sideP.value * sideL.value).toLocaleString('id-ID');
        const totalL = (2 * sideL.value * sideT.value).toLocaleString('id-ID');
        const totalT = (2 * sideP.value * sideT.value).toLocaleString('id-ID');

        return { p, l, t, volume, area, totalP, totalL, totalT };
    }

    displayVolumeOfBeam(...elements) {
        const [volume1, volume2] = elements;
        const data = this.#processInputValue();

        volume1.innerText = `Volume = ${data.p} x ${data.l} x ${data.t}`;
        volume2.innerText = `Volume = ${data.volume}`;
    }

    displayAreaOfBeam(...elements) {
        const [area1, area2, area3] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas Permukaan = ( 2 x ${data.p} x ${data.l} ) + ( 2 x ${data.l} x ${data.t} ) + ( 2 x ${data.p} x ${data.t} )`;
        area2.innerText = `Luas Permukaan = ${data.totalP} + ${data.totalL} + ${data.totalT}`;
        area3.innerText = `Luas Permukaan = ${data.area}`;
    }
}

export default Beam;
