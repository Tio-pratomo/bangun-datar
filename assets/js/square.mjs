/* ------------------------------------------------ SQUARE SECTION ----------------------------------------------- */
//* EXPLAINATION Square SECTION
const listGroupSquare = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
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

export { listGroupSquare, explainationSquare, inputSquare };
