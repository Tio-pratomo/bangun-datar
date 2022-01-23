import TwoDimensional from '../two-dimentional.js';

class Cone extends TwoDimensional {
    #processInputValue() {
        const [radius, height, coneBlanket] = this.inputUser;
        const r = Number(radius.value).toLocaleString('id-ID');
        const t = Number(height.value).toLocaleString('id-ID');
        const s = Number(coneBlanket.value).toLocaleString('id-ID');
        const phi = Number(radius.value) % 7 === 0 ? '22/7' : '3,14';

        const resultVolume =
            Number(radius.value) % 7 === 0
                ? ((22 / 7) * Math.pow(radius.value, 2) * height.value) / 3
                : (3.14 * Math.pow(radius.value, 2) * height.value) / 3;

        const volume = resultVolume.toLocaleString('id-ID');

        const resultArea =
            Number(radius.value) % 7 === 0
                ? (22 / 7) * radius.value * (Number(coneBlanket.value) + Number(radius.value))
                : 3.14 * radius.value * (Number(coneBlanket.value) + Number(radius.value));

        const area = resultArea.toLocaleString('id-ID');

        const resultVol1 =
            Number(radius.value) % 7 === 0
                ? (22 / 7) * Math.pow(radius.value, 2) * height.value
                : 3.14 * Math.pow(radius.value, 2) * height.value;

        const vol1 = resultVol1.toLocaleString('id-ID');

        const resultArea1 = Number(coneBlanket.value) + Number(radius.value);
        const area1 = resultArea1.toLocaleString('id-ID');

        return { r, t, s, phi, volume, area, vol1, area1 };
    }

    displayVolumeOfCone(...elements) {
        const [vol1, vol2, vol3] = elements;
        const data = this.#processInputValue();

        vol1.innerText = `Volume = 1/3 x ${data.phi} x ${data.r} x ${data.r} x ${data.t}`;
        vol2.innerText = `Volume = 1/3 x ${data.vol1}`;
        vol3.innerText = `Volume = ${data.volume}`;
    }

    displayAreaOfCone(...elements) {
        const [area1, area2, area3] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas Permukaan = ${data.phi} x ${data.r} x ( ${data.s} + ${data.r} )`;
        area2.innerText = `Luas Permukaan = ${data.phi} x ${data.r} x ${data.area1}`;
        area3.innerText = `Luas Permukaan = ${data.area}`;
    }
}

export default Cone;
