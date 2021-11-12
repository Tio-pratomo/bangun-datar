/* ------------------------------------------------ SELECT ALL BUTTON ----------------------------------------------- */
const buttons = [...document.querySelectorAll('button')];

/* ------------------------------------------- IMPORT FROM CIRCLE SECTION ------------------------------------------- */
import { listGroupCircle, explainationCircle, inputCircle } from './circle.mjs';

/* ------------------------------------------- IMPORT FROM SQUARE SECTION ------------------------------------------- */
import { listGroupSquare, explainationSquare, inputSquare } from './square.mjs';

/* ------------------------------------------ IMPORT FROM RECTANGLE SECTION ----------------------------------------- */
import {
    listGroupRectangle,
    explainationRectangle,
    inputRectangleWidth,
    inputRectangleHeight,
} from './rectangle.mjs';

/* ---------------------------------------------- IMPORT FROM TRIANGLE ---------------------------------------------- */
import {
    listGroupTriangle,
    explainationTriangle,
    inputOfTriangle,
} from './triangle.mjs';

/* ---------------------------------------------- IMPORT FROM TRAPEZOID --------------------------------------------- */
import {
    listGroupTrapezoid,
    explainationTrapezoid,
    inputOfTrapezoid,
} from './trapezoid.mjs';

/* -------------------------------------------- IMPORT FROM PARALLELOGRAM ------------------------------------------- */
import {
    listGroupParallelogram,
    explainationParallelogram,
    inputOfParallelogram,
} from './parallelogram.mjs';

/* --------------------------------------- CALCULATE IF BUTTON CLICKED BY USER -------------------------------------- */
buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        //* VALIDATION WHEN BUTTON HAS CLICKED BY USER
        const inputAllSection = [...document.querySelectorAll('input')];

        inputAllSection.forEach((inUser) => {
            // WHEN USER INSERT UNDER ZERO NUMBER
            if (inUser.value < 0) {
                inUser.value *= -1;
            }
        });

        /* ------------------------------------------------ CIRCLE CALCULATE ------------------------------------------------ */
        if (event.target.classList.contains('circle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (inputCircle.value === '') {
                inputCircle.value = 0;
            }

            //* DISPLAY EXPLANATION CALCULATION OF CIRCLE
            explainationCircle.innerHTML = listGroupCircle;

            //* SELECT ELEMENT SPAN.PHI
            const spanPhi = [...document.querySelectorAll('.phi')];

            // * SELECT ELEMENT SPAN INPUT USER
            const spanInputCircle = [
                ...document.querySelectorAll('.input-circle'),
            ];

            // * TOTAL AREA CIRCLE
            const spanTotalAreaCircle = document.querySelector('.total-circle');

            //* TOTAL CIRCUMFERENCE(KELILING) CIRCLE
            const spanTotalCircumferenceCircle =
                document.querySelector('.total-circle-k');

            spanPhi.forEach((sPHI) => {
                parseInt(inputCircle.value) % 7 === 0
                    ? (sPHI.innerHTML = '22/7')
                    : (sPHI.innerHTML = '3.14');
            });

            spanInputCircle.forEach((inCircle) => {
                inCircle.innerHTML = parseInt(inputCircle.value);
            });

            if (inputCircle.value % 7 === 0) {
                spanTotalAreaCircle.innerHTML =
                    (parseInt(spanPhi[1].innerHTML) / 7) *
                    Math.pow(spanInputCircle[1].innerHTML, 2);

                spanTotalCircumferenceCircle.innerHTML =
                    ((2 * parseInt(spanPhi[2].innerHTML)) / 7) *
                    spanInputCircle[3].innerHTML;
            } else {
                spanTotalAreaCircle.innerHTML =
                    spanPhi[1].innerHTML *
                    Math.pow(spanInputCircle[1].innerHTML, 2);

                spanTotalCircumferenceCircle.innerHTML = (
                    2 *
                    spanPhi[2].innerHTML *
                    spanInputCircle[3].innerHTML
                ).toFixed(2);
            }
        }

        /* ------------------------------------------------ SQUARE CALCULATE ------------------------------------------------ */
        if (event.target.classList.contains('square')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (inputSquare.value === '') {
                inputSquare.value = 0;
            }

            //* DISPLAY Square CALCULATION
            explainationSquare.innerHTML = listGroupSquare;

            //* LATERAL OF SQUARE
            const lateral = [...document.querySelectorAll('.lateral')];

            //* SQUARE AREA
            const squareArea = document.querySelector('.square-area');

            //* PERIMETER OF SQUARE
            const perimeterOfSquare = document.querySelector(
                '.perimeter-of-square'
            );

            lateral.forEach((lat) => {
                lat.innerHTML = inputSquare.value;
            });

            squareArea.innerHTML = Math.pow(parseInt(inputSquare.value), 2);

            perimeterOfSquare.innerHTML = parseInt(inputSquare.value) * 4;
        }

        /* ----------------------------------------------- RECTANGLE CALCULATE ---------------------------------------------- */
        if (event.target.classList.contains('rectangle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (inputRectangleWidth.value === '') {
                inputRectangleWidth.value = 0;
            }

            if (inputRectangleHeight.value === '') {
                inputRectangleHeight.value = 0;
            }

            //* DISPLAY RECTANGLE CALCULATION
            explainationRectangle.innerHTML = listGroupRectangle;

            const spanRectangleWidth =
                document.querySelectorAll('.rectangle-width');
            const spanrectangleHeight =
                document.querySelectorAll('.rectangle-height');
            const rectangleArea = document.querySelector('.rectangle-area');
            const sumRectangleWidth = document.querySelector(
                '.sum-rectangle-width'
            );
            const sumRectangleHeight = document.querySelector(
                '.sum-rectangle-height'
            );
            const perimeterOfRectangle = document.querySelector(
                '.perimeter-of-rectangle'
            );

            spanRectangleWidth.forEach((spanRW) => {
                spanRW.innerHTML = inputRectangleWidth.value;
            });

            spanrectangleHeight.forEach((spanRH) => {
                spanRH.innerHTML = inputRectangleHeight.value;
            });

            rectangleArea.innerHTML =
                spanRectangleWidth[0].innerHTML *
                spanrectangleHeight[0].innerHTML;

            sumRectangleWidth.innerHTML = 2 * inputRectangleWidth.value;
            sumRectangleHeight.innerHTML = 2 * inputRectangleHeight.value;

            perimeterOfRectangle.innerHTML =
                parseInt(sumRectangleWidth.innerHTML) +
                parseInt(sumRectangleHeight.innerHTML);
        }

        /* ----------------------------------------------- TRIANGLE CALCULATE ----------------------------------------------- */
        if (event.target.classList.contains('triangle')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            inputOfTriangle.forEach((inTriangle) => {
                if (inTriangle.value === '') {
                    inTriangle.value = 0;
                }
            });

            explainationTriangle.innerHTML = listGroupTriangle;

            const spanTriangleBase = [
                ...document.querySelectorAll('span.triangle-base'),
            ];

            const spanTriangleHeight = document.querySelector(
                'span.triangle-height'
            );
            const spanTriangleSumAt = document.querySelector(
                'span.triangle-sum-at'
            );
            const spanTriangleArea =
                document.querySelector('span.triangle-area');

            const spanTriangleB = document.querySelector('span.triangle-b');

            const spanTriangleC = document.querySelector('span.triangle-c');

            const spanPerimeterOfTriangle = document.querySelector(
                'span.perimeter-of-triangle'
            );

            spanTriangleBase.forEach((spanTB) => {
                spanTB.innerHTML = inputOfTriangle[0].value;
            });

            spanTriangleHeight.innerHTML = inputOfTriangle[1].value;

            spanTriangleSumAt.innerHTML =
                parseInt(spanTriangleBase[0].innerHTML) *
                parseInt(spanTriangleHeight.innerHTML);

            spanTriangleArea.innerHTML =
                (1 * parseInt(spanTriangleSumAt.innerHTML)) / 2;

            spanTriangleB.innerHTML = inputOfTriangle[2].value;
            spanTriangleC.innerHTML = inputOfTriangle[3].value;

            spanPerimeterOfTriangle.innerHTML =
                parseInt(spanTriangleBase[1].innerHTML) +
                parseInt(spanTriangleB.innerHTML) +
                parseInt(spanTriangleC.innerHTML);
        }

        /* ------------------------------------------- TRAPEZOID CALCULATE ------------------------------------------ */
        if (event.target.classList.contains('trapezoid')) {
            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            inputOfTrapezoid.forEach((inTrapezoid) => {
                if (inTrapezoid.value === '') {
                    inTrapezoid.value = 0;
                }
            });

            //* when user click button at trapezoid section, included explaination of trapezoid
            explainationTrapezoid.innerHTML = listGroupTrapezoid;

            //* SELECT ALL TAG SPAN CONTAIN class = "trapezoid-side-a"
            const spanTrapezoidSideA = [
                ...document.querySelectorAll('.trapezoid-side-a'),
            ];

            const spanTrapezoidSideB = [
                ...document.querySelectorAll('.trapezoid-side-b'),
            ];

            const spanTrapezoidSideC =
                document.querySelector('.trapezoid-side-c');

            const spanTrapezoidHeight = [
                ...document.querySelectorAll('.trapezoid-height'),
            ];

            const calculateTrapezoidA = document.querySelector(
                '.calculate-trapezoid-a'
            );

            const trapezoidArea = document.querySelector('.trapezoid-area');

            const perimeterOfTrapezoid = document.querySelector(
                '.perimeter-of-trapezoid'
            );

            //* INSERT ALL TAG SPAN class="trapezoid-side-a" ACCORDING INPUT USER
            spanTrapezoidSideA.forEach((sideA) => {
                sideA.innerHTML = inputOfTrapezoid[0].value;
            });

            spanTrapezoidSideB.forEach((sideB) => {
                sideB.innerHTML = inputOfTrapezoid[2].value;
            });

            spanTrapezoidSideC.innerHTML = inputOfTrapezoid[3].value;

            spanTrapezoidHeight.forEach((spanHeight) => {
                spanHeight.innerHTML = inputOfTrapezoid[1].value;
            });

            calculateTrapezoidA.innerHTML =
                (parseInt(spanTrapezoidSideA[0].innerHTML) +
                    parseInt(spanTrapezoidSideB[0].innerHTML)) *
                parseInt(spanTrapezoidHeight[0].innerHTML);

            trapezoidArea.innerHTML =
                parseInt(calculateTrapezoidA.innerHTML) / 2;

            perimeterOfTrapezoid.innerHTML =
                parseInt(spanTrapezoidSideA[0].innerHTML) +
                parseInt(spanTrapezoidSideB[0].innerHTML) +
                parseInt(spanTrapezoidSideC.innerHTML) +
                parseInt(spanTrapezoidHeight[0].innerHTML);
        }

        /* ---------------------------------------- PARALLELOGRAM CALCULATION --------------------------------------- */
        if (event.target.classList.contains('parallelogram')) {
            //* VALIDATION IF USER DIDNT INSERT INPUT VALUE
            inputOfParallelogram.forEach((input) => {
                if (input.value === '') {
                    input.value = 0;
                }
            });

            //* EXPLAINATION FOR CALCULATION OF PARALLELOGRAM
            explainationParallelogram.innerHTML = listGroupParallelogram;

            //* INSERT TAG SPAN class="parallelogram-side-a"
            const parallelogramA = [
                ...document.querySelectorAll('.parallelogram-side-a'),
            ];

            parallelogramA.forEach((sideA) => {
                sideA.innerHTML = inputOfParallelogram[0].value;
            });

            //* INSERT TAG SPAN class="parallelogram-side-b"
            const parallelogramB = [
                ...document.querySelectorAll('.parallelogram-side-b'),
            ];

            parallelogramB.forEach((sideB) => {
                sideB.innerHTML = inputOfParallelogram[2].value;
            });

            //* PARALLELOGRAM AREA
            const parallelogramHeight = document.querySelector(
                '.parallelogram-height'
            );
            const parallelogramArea = document.querySelector(
                '.parallelogram-area'
            );

            parallelogramHeight.innerHTML = inputOfParallelogram[1].value;
            parallelogramArea.innerHTML =
                parseInt(parallelogramA[0].innerHTML) *
                parseInt(parallelogramHeight.innerHTML);

            //* PERIMETER OF PARALLELOGRAM
            const perimeterOfParallelogram = document.querySelector(
                '.perimeter-of-parallelogram'
            );

            perimeterOfParallelogram.innerHTML =
                2 * inputOfParallelogram[0].value +
                2 * inputOfParallelogram[2].value;
        }
    });
});
