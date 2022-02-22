import Cube from './three-dimension/cube.js';
import Beam from './three-dimension/beam.js';
import Tube from './three-dimension/tube.js';
import Cone from './three-dimension/cone.js';
import Ball from './three-dimension/ball.js';

import { getCurrentYear, expElement, openSideBar, closingSideBar } from './misc.js';

/* ---------------------------------------------------- COPYRIGHT --------------------------------------------------- */
getCurrentYear(document.querySelector('.copy-right'));

/* ------------------------------------------------- OPEN SIDE BAR ------------------------------------------------- */

const sideBar = document.querySelector('.open-bar');
sideBar.addEventListener('click', function () {
    openSideBar(document.querySelector('.side-nav'));
});

/* ------------------------------------------------- CLOSE SIDE BAR ------------------------------------------------- */
const closeSideBar = document.querySelector('.close');
closeSideBar.addEventListener('click', function () {
    closingSideBar(document.querySelector('.side-nav'));
});

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

/* -------------------------------------------------- SECTION TUBE -------------------------------------------------- */
const tube = new Tube(document.querySelector('.explaination-tube'), expElement('tube', 6), [
    document.querySelector('#tube-r'),
    document.querySelector('#tube-t'),
]);

const buttonTube = document.querySelector('button.tube');
buttonTube.addEventListener('click', function () {
    tube.sanitizeInputUser();
    tube.displayCalculate();
    tube.displayVolumeOfTube(
        document.querySelector('.tube-0'),
        document.querySelector('.tube-1'),
        document.querySelector('.tube-2')
    );
    tube.displayAreaOfTube(
        document.querySelector('.tube-3'),
        document.querySelector('.tube-4'),
        document.querySelector('.tube-5')
    );
});

/* -------------------------------------------------- SECTION CONE -------------------------------------------------- */
const cone = new Cone(document.querySelector('.explaination-cone'), expElement('cone', 6), [
    document.querySelector('#cone-r'),
    document.querySelector('#cone-t'),
    document.querySelector('#cone-s'),
]);

const buttonCone = document.querySelector('button.cone');
buttonCone.addEventListener('click', function () {
    cone.sanitizeInputUser();
    cone.displayCalculate();
    cone.displayVolumeOfCone(
        document.querySelector('.cone-0'),
        document.querySelector('.cone-1'),
        document.querySelector('.cone-2')
    );
    cone.displayAreaOfCone(
        document.querySelector('.cone-3'),
        document.querySelector('.cone-4'),
        document.querySelector('.cone-5')
    );
});

/* -------------------------------------------------- SECTION BALL -------------------------------------------------- */
const ball = new Ball(document.querySelector('.explaination-ball'), expElement('ball', 6), [
    document.querySelector('#ball'),
]);

const buttonBall = document.querySelector('button.ball');
buttonBall.addEventListener('click', function () {
    ball.sanitizeInputUser();
    ball.displayCalculate();
    ball.displayVolumeOfBall(
        document.querySelector('.ball-0'),
        document.querySelector('.ball-1'),
        document.querySelector('.ball-2')
    );
    ball.displayAreaOfBall(
        document.querySelector('.ball-3'),
        document.querySelector('.ball-4'),
        document.querySelector('.ball-5')
    );
});
