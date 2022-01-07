import TwoDimensional from '../two-dimentional.js';

class Tube extends TwoDimensional {
    #processInputValue() {
        const [radius, height] = this.inputUser;
        const r = Number(radius.value).toLocaleString('id-ID');
        const t = Number(height.value).toLocaleString('id-ID');

        const phi = Number(radius.value) % 7 === 0 ? '22/7' : '3,14';

        const resultVolume =
            Number(radius.value) % 7 === 0
                ? (22 / 7) * Math.pow(radius.value, 2) * height.value
                : 3.14 * Math.pow(radius.value, 2) * height.value;

        const volume = resultVolume.toLocaleString('id-ID');

        const resultArea =
            Number(radius.value) % 7 === 0
                ? ((2 * 22) / 7) * radius.value * (Number(radius.value) + Number(height.value))
                : 2 * 3.14 * radius.value * (Number(radius.value) + Number(height.value));

        const area = resultArea.toLocaleString('id-ID');

        const resultVol1 =
            Number(radius.value) % 7 === 0 ? (22 / 7) * Math.pow(radius.value, 2) : 3.14 * Math.pow(radius.value, 2);

        const totalVol1 = resultVol1.toLocaleString('id-ID');

        const resultArea1 = Number(radius.value) % 7 === 0 ? ((2 * 22) / 7) * radius.value : 2 * 3.14 * radius.value;
        const resultArea2 = Number(radius.value) + Number(height.value);

        const totalArea1 = resultArea1.toLocaleString('id-ID');
        const totalArea2 = resultArea2.toLocaleString('id-ID');

        return { phi, r, t, volume, totalVol1, area, totalArea1, totalArea2 };
    }

    displayVolumeOfTube(...elements) {
        const [volume1, volume2, volume3] = elements;
        const data = this.#processInputValue();

        volume1.innerText = `Volume = ${data.phi} x ${data.r} x ${data.r} x ${data.t}`;
        volume2.innerText = `Volume = ${data.totalVol1} x ${data.t}`;
        volume3.innerText = `Volume = ${data.volume}`;
    }

    displayAreaOfTube(...elements) {
        const [area1, area2, area3] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas Permukaan = ( 2 x ${data.phi} x ${data.r} ) x ( ${data.r} + ${data.t} )`;
        area2.innerText = `Luas Permukaan = ( ${data.totalArea1} ) x ( ${data.totalArea2} )`;
        area3.innerText = `Luas Permukaan = ${data.area}`;
    }
}

export default Tube;
