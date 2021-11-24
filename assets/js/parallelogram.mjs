/* ------------------------------------------- START PARALLELOGRAM SECTION ------------------------------------------ */
//* EXPLAINATION FOR PARALLELOGRAM
const listGroupParallelogram = /* html */ `
<ul class="list-group list-group-flush animate__animated animate__fadeIn">
    <li class="list-group-item">
        Luas = <span class="parallelogram-side-a"></span> x <span class="parallelogram-height"></span> = <span class="parallelogram-area"></span>
    </li>
    
    <li class="list-group-item">
        Keliling = <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span> + <span class="parallelogram-side-a"></span> + <span class="parallelogram-side-b"></span>
    </li>

    <li class="list-group-item">
        Keliling = <span class="perimeter-of-parallelogram"></span>
    </li>
</ul>
`;

//* PARENT PARALLELOGRAM
const explainationParallelogram = document.querySelector('.explaination-parallelogram');

//* SELECT ALL INPUT PARALLELOGRAM
const inputOfParallelogram = [...document.querySelectorAll('.form-group.parallelogram input')];
/* -------------------------------------------- END PARALLELOGRAM SECTION ------------------------------------------- */

export { listGroupParallelogram, explainationParallelogram, inputOfParallelogram };
