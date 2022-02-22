import Circle from './two-dimensional/circle.js';
import Square from './two-dimensional/square.js';
import Rectangle from './two-dimensional/rectangle.js';
import Triangle from './two-dimensional/triangle.js';
import Trapezoid from './two-dimensional/trapezoid.js';
import Parallelogram from './two-dimensional/parallelogram.js';
import Rhombus from './two-dimensional/rhombus.js';
import Kite from './two-dimensional/kite.js';
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

/* ------------------------------------------------- SECTION CIRCLE ------------------------------------------------- */
const circle = new Circle(document.querySelector('.explaination-circle'), expElement('circle', 4), [
    document.querySelector('#circle'),
]);

const buttonCircle = document.querySelector('button.circle');
buttonCircle.addEventListener('click', function () {
    circle.sanitizeInputUser();
    circle.displayCalculate();
    circle.displayAreaOfCircle(document.querySelector('.circle-0'), document.querySelector('.circle-1'));
    circle.displayPerimeterOfCircle(document.querySelector('.circle-2'), document.querySelector('.circle-3'));
});

/* ------------------------------------------------- SECTION SQUARE ------------------------------------------------- */

const square = new Square(document.querySelector('.explaination-square'), expElement('square', 4), [
    document.querySelector('#square'),
]);

const buttonSquare = document.querySelector('button.square');
buttonSquare.addEventListener('click', function () {
    square.sanitizeInputUser();
    square.displayCalculate();
    square.displayAreaOfSquare(document.querySelector('.square-0'), document.querySelector('.square-1'));
    square.displayPerimeterOfSquare(document.querySelector('.square-2'), document.querySelector('.square-3'));
});

/* ------------------------------------------------ SECTION RECTANGLE ----------------------------------------------- */
const rectangle = new Rectangle(document.querySelector('.explaination-rectangle'), expElement('rectangle', 4), [
    document.querySelector('#number-width'),
    document.querySelector('#number-height'),
]);

const buttonRectangle = document.querySelector('button.rectangle');
buttonRectangle.addEventListener('click', function () {
    rectangle.sanitizeInputUser();
    rectangle.displayCalculate();
    rectangle.displayAreaOfRectangle(document.querySelector('.rectangle-0'), document.querySelector('.rectangle-1'));
    rectangle.displayPerimeterOfRectangle(
        document.querySelector('.rectangle-2'),
        document.querySelector('.rectangle-3')
    );
});

/* ------------------------------------------------ SECTION TRIANGLE ------------------------------------------------ */
const triangle = new Triangle(document.querySelector('.explaination-triangle'), expElement('triangle', 5), [
    document.querySelector('#triangle-base'),
    document.querySelector('#triangle-height'),
    document.querySelector('#triangle-side-b'),
    document.querySelector('#triangle-side-c'),
]);

const buttonTriangle = document.querySelector('button.triangle');
buttonTriangle.addEventListener('click', function () {
    triangle.sanitizeInputUser();
    triangle.displayCalculate();
    triangle.displayAreaOfTriangle(
        document.querySelector('.triangle-0'),
        document.querySelector('.triangle-1'),
        document.querySelector('.triangle-2')
    );
    triangle.displayPerimeterOfTriangle(document.querySelector('.triangle-3'), document.querySelector('.triangle-4'));
});

/* ------------------------------------------------ SECTION TRAPEZOID ----------------------------------------------- */
const trapezoid = new Trapezoid(document.querySelector('.explaination-trapezoid'), expElement('trapezoid', 5), [
    document.querySelector('#trapezoid-a'),
    document.querySelector('#trapezoid-height'),
    document.querySelector('#trapezoid-side-b'),
    document.querySelector('#trapezoid-side-c'),
]);

const buttonTrapezoid = document.querySelector('button.trapezoid');
buttonTrapezoid.addEventListener('click', function () {
    trapezoid.sanitizeInputUser();
    trapezoid.displayCalculate();
    trapezoid.displayAreaOfTrapezoid(
        document.querySelector('.trapezoid-0'),
        document.querySelector('.trapezoid-1'),
        document.querySelector('.trapezoid-2')
    );
    trapezoid.displayPerimeterOfTrapezoid(
        document.querySelector('.trapezoid-3'),
        document.querySelector('.trapezoid-4')
    );
});

/* ---------------------------------------------- SECTION PARALLELOGRAM --------------------------------------------- */
const parallelogram = new Parallelogram(
    document.querySelector('.explaination-parallelogram'),
    expElement('parallelogram', 4),
    [
        document.querySelector('#parallelogram-a'),
        document.querySelector('#parallelogram-height'),
        document.querySelector('#parallelogram-b'),
    ]
);

const buttonParallelogram = document.querySelector('button.parallelogram');
buttonParallelogram.addEventListener('click', function () {
    parallelogram.sanitizeInputUser();
    parallelogram.displayCalculate();

    parallelogram.displayAreaOfParallelogram(
        document.querySelector('.parallelogram-0'),
        document.querySelector('.parallelogram-1')
    );

    parallelogram.displayPerimeterOfParallelogram(
        document.querySelector('.parallelogram-2'),
        document.querySelector('.parallelogram-3')
    );
});

/* ------------------------------------------------- SECTION RHOMBUS ------------------------------------------------ */
const rhombus = new Rhombus(document.querySelector('.explaination-rhombus'), expElement('rhombus', 4), [
    document.querySelector('#rhombus-d1'),
    document.querySelector('#rhombus-d2'),
    document.querySelector('#rhombus-s'),
]);

const buttonRhombus = document.querySelector('button.rhombus');
buttonRhombus.addEventListener('click', function () {
    rhombus.sanitizeInputUser();
    rhombus.displayCalculate();
    rhombus.displayAreaOfRhombus(document.querySelector('.rhombus-0'), document.querySelector('.rhombus-1'));
    rhombus.displayPerimeterOfRhombus(document.querySelector('.rhombus-2'), document.querySelector('.rhombus-3'));
});

/* -------------------------------------------------- SECTION KITE -------------------------------------------------- */
const kite = new Kite(document.querySelector('.explaination-kite'), expElement('kite', 4), [
    document.querySelector('#kite-d1'),
    document.querySelector('#kite-d2'),
    document.querySelector('#kite-a'),
    document.querySelector('#kite-b'),
]);

const buttonKite = document.querySelector('button.kite');
buttonKite.addEventListener('click', function () {
    kite.sanitizeInputUser();
    kite.displayCalculate();
    kite.displayAreaOfKite(document.querySelector('.kite-0'), document.querySelector('.kite-1'));
    kite.displayPerimeterOfKite(document.querySelector('.kite-2'), document.querySelector('.kite-3'));
});
