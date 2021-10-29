/* ------------------------------------------------------------------------------------------------------------------ */
/*                                              VARIABLE AT SCOPE GLOBAL                                              */
/* ------------------------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------ CIRCLE SECTION ----------------------------------------------- */
//* EXPLAINATION CIRCLE SECTION
const listGroupCircle = /* html */ `
<ul class="list-group list-group-flush">
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

//* SELECT ELEMENT HAS CLASS EXPLAINATION CIRCLE
const explainationCircle = document.querySelector('.explaination-circle');

//* SELECTION ELEMENT INPUT CIRCLE
const inputCircle = document.querySelector('input[name = "number-circle"]');
/* ----------------------------------------------- END CIRCLE SECTION ----------------------------------------------- */

/* ------------------------------------------------ SQUARE SECTION ----------------------------------------------- */
//* EXPLAINATION Square SECTION
const listGroupSquare = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = <span class="lateral"></span> x <span class="lateral"></span> = <span class="square-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="lateral"></span> x 4 = <span class="perimeter-of-square"></span>
    </li>
</ul>
`;

//* SELECT ELEMENT HAS CLASS EXPLAINATION Square
const explainationSquare = document.querySelector('.explaination-square');

//* SELECT INPUT ELEMENT Square SECTION
const inputSquare = document.querySelector('input[name = "number-square"]');

/* ---------------------------------------------- END Square SECTION --------------------------------------------- */

/* ------------------------------------------------ RECTANGLE SECTION ----------------------------------------------- */
//* EXPLANIATION RECTANGLE SECTION
const listGroupRectangle = /* html */ `
<ul class="list-group list-group-flush">
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

//* SELECT ELEMENT HAS CLASS EXPLAINATION RECTANGLE
const explainationRectangle = document.querySelector('.explaination-rectangle');

//* SELECT INPUT ELEMENT RECTANGLE SECTION
const inputRectangleWidth = document.querySelector(
    'input[name = "number-width"]'
);

const inputRectangleHeight = document.querySelector(
    'input[name = "number-height"]'
);

/* ---------------------------------------------- END RECTANGLE SECTION --------------------------------------------- */

/* --------------------------------------------- START TRIANGLE SECTION --------------------------------------------- */
//* EXPLAINATION FOR TRIANGLE
const listGroupTriangle = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-base"></span> x <span class="triangle-height"></span>
    </li>
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-sum-at"></span> = <span class="triangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="triangle-base"></span> x <span class="triangle-b"></span> x <span class="triangle-c"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-triangle"></span>
    </li>
</ul>
`;

//* EXPLAINATION TRIANGLE SECTION
const explainationTriangle = document.querySelector('.explaination-triangle');

//* SELECT INPUT OF TRIANGLE
const inputOfTriangle = [
    ...document.querySelectorAll('.form-group.triangle input'),
];

/* ---------------------------------------------- END TRIANGLE SECTION ---------------------------------------------- */

/* ------------------------------------------------ SELECT ALL BUTTON ----------------------------------------------- */
const buttons = [...document.querySelectorAll('button')];

/* ------------------------------------------------------------------------------------------------------------------ */
/*                                            END VARIABLE AT SCOPE GLOBAL                                            */
/* ------------------------------------------------------------------------------------------------------------------ */

/* --------------------------------------- CALCULATE IF BUTTON CLICKED BY USER -------------------------------------- */
buttons.forEach((button) => {
    button.addEventListener('click', function (event) {
        /* ------------------------------------------------ CIRCLE CALCULATE ------------------------------------------------ */
        if (event.target.classList.contains('circle')) {
            //* IF USER INPUT NUMBER < 0, CHANGE POSITIVE NUMBER
            if (inputCircle.value < 0) {
                inputCircle.value *= -1;
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

            //* IF THE INPUT VALUE IS NOT ENTERED (EMPTY)
            if (inputCircle.value === '') {
                inputCircle.value = 0;
            }

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
            if (inputSquare.value < 0) {
                inputSquare.value *= -1;
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
            if (inputRectangleWidth.value < 0) {
                inputRectangleWidth.value *= -1;
            }

            if (inputRectangleHeight.value < 0) {
                inputRectangleHeight.value *= -1;
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
            inputOfTriangle.forEach((input) => {
                if (input.value < 0) {
                    input.value = 0;
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
        }
    });
});
