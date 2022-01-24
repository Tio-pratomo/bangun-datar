import TwoDimensional from '../two-dimentional.js';

class Ball extends TwoDimensional {
    #processInputValue() {
        const [radius] = this.inputUser;
        const r = Number(radius.value).toLocaleString('id-ID');
        const phi = Number(radius.value) % 7 === 0 ? '22/7' : '3,14';

        let volume;
        let area;

        let volume1;
        let area1;

        if (Number(radius.value) % 7 === 0) {
            const resultVolume = (((4 / 3) * 22) / 7) * Math.pow(radius.value, 3);
            const resultvolume1 = (22 / 7) * Math.pow(radius.value, 3);
            const resultArea = ((4 * 22) / 7) * Math.pow(radius.value, 2);
            const resultArea1 = 4 * Math.pow(radius.value, 2);

            volume = resultVolume.toLocaleString('id-ID');
            volume1 = resultvolume1.toLocaleString('id-ID');

            area = resultArea.toLocaleString('id-ID');
            area1 = resultArea1.toLocaleString('id-ID');
        } else {
            const resultVolume = (4 / 3) * 3.14 * Math.pow(radius.value, 3);
            const resultvolume1 = (22 / 7) * Math.pow(radius.value, 3);
            const resultArea = ((4 * 22) / 7) * Math.pow(radius.value, 2);
            const resultArea1 = 4 * Math.pow(radius.value, 2);

            volume = resultVolume.toLocaleString('id-ID');
            volume1 = resultvolume1.toLocaleString('id-ID');

            area = resultArea.toLocaleString('id-ID');
            area1 = resultArea1.toLocaleString('id-ID');
        }

        return { r, phi, volume, volume1, area, area1 };
    }

    displayVolumeOfBall(...elements) {
        const [vol1, vol2, vol3] = elements;
        const data = this.#processInputValue();

        vol1.innerText = `Volume = 4/3 x ${data.phi} x ${data.r} x ${data.r} x ${data.r}`;
        vol2.innerText = `Volume = 4/3 x ${data.volume1}`;
        vol3.innerText = `Volume = ${data.volume}`;
    }

    displayAreaOfBall(...elements) {
        const [area1, area2, area3] = elements;
        const data = this.#processInputValue();

        area1.innerText = `Luas Permukaan = 4 x ${data.phi} x ${data.r} x ${data.r}`;
        area2.innerText = `Luas Permukaan = ${data.phi} x ${data.area1}`;
        area3.innerText = `Luas Permukaan = ${data.area}`;
    }
}

export default Ball;
