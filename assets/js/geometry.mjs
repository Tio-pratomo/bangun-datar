import Cube from './cube.js';

/* ---------------------------------------------------- COPYRIGHT --------------------------------------------------- */
const currentYear = new Date().getFullYear();
document.querySelector('span.copy-right').innerText = currentYear;

/* -------------------------------------------------- SECTION CUBE -------------------------------------------------- */
const expElementCube = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item volume-cube1"></li>
    <li class="list-group-item volume-cube2"></li>
    <li class="list-group-item area-cube1"></li>
    <li class="list-group-item area-cube2"></li>
</ul>
`;

const cube = new Cube(document.querySelector('.explaination-cube'), expElementCube, [document.querySelector('#cube')]);

const buttonCube = document.querySelector('button.cube');
buttonCube.addEventListener('click', function () {
    cube.sanitizeInputUser();
    cube.displayCalculate();
    cube.displayVolumeCube(document.querySelector('.volume-cube1'), document.querySelector('.volume-cube2'));
    cube.displayAreaOfCube(document.querySelector('.area-cube1'), document.querySelector('.area-cube2'));
});
