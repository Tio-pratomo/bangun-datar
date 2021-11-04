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
export {
    listGroupRectangle,
    explainationRectangle,
    inputRectangleWidth,
    inputRectangleHeight,
};
