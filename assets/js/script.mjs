import Circle from './circle.js';
import Square from './square.js';
import Rectangle from './rectangle.js';
import Triangle from './triangle.js';
import Trapezoid from './trapezoid.js';
import Parallelogram from './parallelogram.js';
import Rhombus from './rhombus.js';
import Kite from './kite.js';

/* ---------------------------------------------------- COPYRIGHT --------------------------------------------------- */
const currentYear = new Date().getFullYear();
document.querySelector('span.copy-right').innerText = currentYear;

/* ------------------------------------------------- SECTION CIRCLE ------------------------------------------------- */
const expElementCircle = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = <span class="phi"></span> x <span class="input-circle"></span><sup>2</sup>
    </li>
    <li class="list-group-item">
        Luas = <span class="phi"></span> x <span class="input-circle"></span> x <span class="input-circle"></span> = <span
            class="total-circle"></span>
    </li>
    <li class="list-group-item">
        Keliling = 2 x <span class="phi"></span> x <span class="input-circle"></span> =
        <span class="total-circle-k"></span>
    </li>
</ul>
`;

const circle = new Circle(document.querySelector('.explaination-circle'), expElementCircle, [
    document.querySelector('#circle'),
]);

const buttonCircle = document.querySelector('button.circle');
buttonCircle.addEventListener('click', function () {
    circle.sanitizeInputUser();
    circle.displayCalculate();
    circle.displayPhi(document.querySelectorAll('.phi'));
    circle.displayInputCircle(document.querySelectorAll('.input-circle'));
    circle.displayAreaOfCircle(document.querySelector('.total-circle'));
    circle.displayPerimeterOfCircle(document.querySelector('.total-circle-k'));
});

/* ------------------------------------------------- SECTION SQUARE ------------------------------------------------- */
const expElementSquare = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = <span class="lateral"></span> x <span class="lateral"></span> = <span class="square-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="lateral"></span> x 4 = <span class="perimeter-of-square"></span>
    </li>
</ul>
`;
const square = new Square(document.querySelector('.explaination-square'), expElementSquare, [
    document.querySelector('#square'),
]);

const buttonSquare = document.querySelector('button.square');
buttonSquare.addEventListener('click', function () {
    square.sanitizeInputUser();
    square.displayCalculate();
    square.displayPerimeterOfSquare(document.querySelector('.perimeter-of-square'));
    square.displayLateral(document.querySelectorAll('.lateral'));
    square.displayAreaOfSquare(document.querySelector('.square-area'));
});

/* ------------------------------------------------ SECTION RECTANGLE ----------------------------------------------- */
const expElementRectangle = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = <span class="rectangle-width"></span> x <span class="rectangle-height"></span> = <span class="rectangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = ( 2 x <span class="rectangle-width"></span> ) + ( 2 x <span class="rectangle-height"></span> )
    </li>
    <li class="list-group-item">
        Keliling = <span class="sum-rectangle-width"></span> + <span class="sum-rectangle-height"></span> = <span class="perimeter-of-rectangle"></span>
    </li>
</ul>
`;

const rectangle = new Rectangle(document.querySelector('.explaination-rectangle'), expElementRectangle, [
    document.querySelector('#number-width'),
    document.querySelector('#number-height'),
]);

const buttonRectangle = document.querySelector('button.rectangle');
buttonRectangle.addEventListener('click', function () {
    rectangle.sanitizeInputUser();
    rectangle.displayCalculate();
    rectangle.displayRectangleWidth(document.querySelectorAll('.rectangle-width'));
    rectangle.displayRectangleHeight(document.querySelectorAll('.rectangle-height'));
    rectangle.displayAreaOfRectangle(document.querySelector('.rectangle-area'));
    rectangle.displayPerimeterOfRectangle([
        document.querySelector('.sum-rectangle-width'),
        document.querySelector('.sum-rectangle-height'),
        document.querySelector('.perimeter-of-rectangle'),
    ]);
});

/* ------------------------------------------------ SECTION TRIANGLE ------------------------------------------------ */
const expElementTriangle = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-base"></span> x <span class="triangle-height"></span>
    </li>
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-sum-at"></span> = <span class="triangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="triangle-a"></span> + <span class="triangle-b"></span> + <span class="triangle-c"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-triangle"></span>
    </li>
</ul>
`;

const triangle = new Triangle(document.querySelector('.explaination-triangle'), expElementTriangle, [
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
        document.querySelector('.triangle-base'),
        document.querySelector('.triangle-height'),
        document.querySelector('.triangle-sum-at'),
        document.querySelector('.triangle-area')
    );
    triangle.displayPerimeterOfTriangle(
        document.querySelector('.triangle-a'),
        document.querySelector('.triangle-b'),
        document.querySelector('.triangle-c'),
        document.querySelector('.perimeter-of-triangle')
    );
});

/* ------------------------------------------------ SECTION TRAPEZOID ----------------------------------------------- */
const expElementTrapezoid = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = ( <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> ) x <span class="trapezoid-height"></span> ÷ 2
    </li>
    <li class="list-group-item">
        Luas = <span class="calculate-trapezoid-a"></span> ÷ 2 =  <span class="trapezoid-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="trapezoid-a"></span> + <span class="trapezoid-b"></span> + <span class="trapezoid-c"></span> + <span class="trapezoid-h"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-trapezoid"></span>
    </li>
</ul>
`;

const trapezoid = new Trapezoid(document.querySelector('.explaination-trapezoid'), expElementTrapezoid, [
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
        document.querySelector('.trapezoid-side-a'),
        document.querySelector('.trapezoid-side-b'),
        document.querySelector('.trapezoid-height'),
        document.querySelector('.calculate-trapezoid-a'),
        document.querySelector('.trapezoid-area')
    );
    trapezoid.displayPerimeterOfTrapezoid(
        document.querySelector('.trapezoid-a'),
        document.querySelector('.trapezoid-b'),
        document.querySelector('.trapezoid-c'),
        document.querySelector('.trapezoid-h'),
        document.querySelector('.perimeter-of-trapezoid')
    );
});

/* ---------------------------------------------- SECTION PARALLELOGRAM --------------------------------------------- */

const expElementParallelogram = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = <span class="parallelogram-side-a"></span> x <span class="parallelogram-height"></span> = <span class="parallelogram-area"></span>
    </li>
    
    <li class="list-group-item">
        Keliling = <span class="parallelogram-a"></span> + <span class="parallelogram-b"></span> + <span class="parallelogram-a"></span> + <span class="parallelogram-b"></span>
    </li>

    <li class="list-group-item">
        Keliling = <span class="perimeter-of-parallelogram"></span>
    </li>
</ul>
`;

const parallelogram = new Parallelogram(
    document.querySelector('.explaination-parallelogram'),
    expElementParallelogram,
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
        document.querySelector('.parallelogram-side-a'),
        document.querySelector('.parallelogram-height'),
        document.querySelector('.parallelogram-area')
    );

    parallelogram.displayPerimeterOfParallelogram(
        document.querySelectorAll('.parallelogram-a'),
        document.querySelectorAll('.parallelogram-b'),
        document.querySelector('.perimeter-of-parallelogram')
    );
});

/* ------------------------------------------------- SECTION RHOMBUS ------------------------------------------------ */

const expElementRhombus = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item rhombus-area1"></li>
    
    <li class="list-group-item rhombus-area2"></li>

    <li class="list-group-item perimeter-of-rhombus1"></li>

    <li class="list-group-item perimeter-of-rhombus2"></li>
</ul>
`;

const rhombus = new Rhombus(document.querySelector('.explaination-rhombus'), expElementRhombus, [
    document.querySelector('#rhombus-d1'),
    document.querySelector('#rhombus-d2'),
    document.querySelector('#rhombus-s'),
]);

const buttonRhombus = document.querySelector('button.rhombus');
buttonRhombus.addEventListener('click', function () {
    rhombus.sanitizeInputUser();
    rhombus.displayCalculate();
    rhombus.displayAreaOfRhombus(document.querySelector('.rhombus-area1'), document.querySelector('.rhombus-area2'));
    rhombus.displayPerimeterOfRhombus(
        document.querySelector('.perimeter-of-rhombus1'),
        document.querySelector('.perimeter-of-rhombus2')
    );
});

/* -------------------------------------------------- SECTION KITE -------------------------------------------------- */
const expElementKite = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item kite-area1"></li>
    
    <li class="list-group-item kite-area2"></li>

    <li class="list-group-item perimeter-of-kite1"></li>

    <li class="list-group-item perimeter-of-kite2"></li>
</ul>
`;

const kite = new Kite(document.querySelector('.explaination-kite'), expElementKite, [
    document.querySelector('#kite-d1'),
    document.querySelector('#kite-d2'),
    document.querySelector('#kite-a'),
    document.querySelector('#kite-b'),
]);

const buttonKite = document.querySelector('button.kite');
buttonKite.addEventListener('click', function () {
    kite.sanitizeInputUser();
    kite.displayCalculate();
    kite.displayAreaOfKite(document.querySelector('.kite-area1'), document.querySelector('.kite-area2'));
    kite.displayPerimeterOfKite(
        document.querySelector('.perimeter-of-kite1'),
        document.querySelector('.perimeter-of-kite2')
    );
});
