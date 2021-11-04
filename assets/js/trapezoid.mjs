/* --------------------------------------------- START TRAPEZOID SECTION --------------------------------------------- */
//* EXPLAINATION FOR TRAPEZOID
const listGroupTrapezoid = /* html */ `
<ul class="list-group list-group-flush">
    <li class="list-group-item">
        Luas = ( <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> ) x <span class="trapezoid-height"></span> ÷ 2
    </li>
    <li class="list-group-item">
        Luas = <span class="calculate-trapezoid-a"></span> ÷ 2 =  <span class="trapezoid-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="trapezoid-side-a"></span> + <span class="trapezoid-side-b"></span> + <span class="trapezoid-side-c"></span> + <span class="trapezoid-height"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-trapezoid"></span>
    </li>
</ul>
`;

//* EXPLAINATION TRAPEZOID
const explainationTrapezoid = document.querySelector('.explaination-trapezoid');

//* SELECT INPUT FOR TRAPEZOID
const inputOfTrapezoid = [
    ...document.querySelectorAll('.form-group.trapezoid input'),
];

/* ---------------------------------------------- END TRAPEZOID SECTION --------------------------------------------- */
export { listGroupTrapezoid, explainationTrapezoid, inputOfTrapezoid };
