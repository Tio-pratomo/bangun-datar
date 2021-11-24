/* --------------------------------------------- START TRIANGLE SECTION --------------------------------------------- */
//* EXPLAINATION FOR TRIANGLE
const listGroupTriangle = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-base"></span> x <span class="triangle-height"></span>
    </li>
    <li class="list-group-item">
        Luas = 1/2 x <span class="triangle-sum-at"></span> = <span class="triangle-area"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="triangle-base"></span> + <span class="triangle-b"></span> + <span class="triangle-c"></span>
    </li>
    <li class="list-group-item">
        Keliling = <span class="perimeter-of-triangle"></span>
    </li>
</ul>
`;

//* EXPLAINATION TRIANGLE SECTION
const explainationTriangle = document.querySelector('.explaination-triangle');

//* SELECT INPUT OF TRIANGLE
const inputOfTriangle = [...document.querySelectorAll('.form-group.triangle input')];

/* ---------------------------------------------- END TRIANGLE SECTION ---------------------------------------------- */

export { listGroupTriangle, explainationTriangle, inputOfTriangle };
