import Cube from './three-dimension/cube.js';

import { getCurrentYear, expElement } from './misc.js';

/* ---------------------------------------------------- COPYRIGHT --------------------------------------------------- */
getCurrentYear(document.querySelector('.copy-right'));

/* -------------------------------------------------- SECTION CUBE -------------------------------------------------- */
const cube = new Cube(document.querySelector('.explaination-cube'), expElement('cube', 4), [
    document.querySelector('#cube'),
]);

const buttonCube = document.querySelector('button.cube');
buttonCube.addEventListener('click', function () {
    cube.sanitizeInputUser();
    cube.displayCalculate();
    cube.displayVolumeCube(document.querySelector('.cube-0'), document.querySelector('.cube-1'));
    cube.displayAreaOfCube(document.querySelector('.cube-2'), document.querySelector('.cube-3'));
});
