/* ------------------------------------------------ CIRCLE SECTION ----------------------------------------------- */
//* EXPLAINATION CIRCLE SECTION
const listGroupCircle = /* html */ `
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

//* SELECT ELEMENT HAS CLASS EXPLAINATION CIRCLE
const explainationCircle = document.querySelector('.explaination-circle');

//* SELECTION ELEMENT INPUT CIRCLE
const inputCircle = document.querySelector('input[name = "number-circle"]');
/* ----------------------------------------------- END CIRCLE SECTION ----------------------------------------------- */

export { listGroupCircle, explainationCircle, inputCircle };
