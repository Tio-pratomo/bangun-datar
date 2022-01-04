import Cube from './three-dimension/cube.js';

import { getCurrentYear, expElement } from './misc.js';
import Beam from './three-dimension/beam.js';

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

/* -------------------------------------------------- SECTION BEAM -------------------------------------------------- */
const beam = new Beam(document.querySelector('.explaination-beam'), expElement('beam', 5), [
    document.querySelector('#beam-p'),
    document.querySelector('#beam-l'),
    document.querySelector('#beam-t'),
]);

const buttonBeam = document.querySelector('button.beam');
buttonBeam.addEventListener('click', function () {
    beam.sanitizeInputUser();
    beam.displayCalculate();
    beam.displayVolumeOfBeam(document.querySelector('.beam-0'), document.querySelector('.beam-1'));
    beam.displayAreaOfBeam(
        document.querySelector('.beam-2'),
        document.querySelector('.beam-3'),
        document.querySelector('.beam-4')
    );
});
