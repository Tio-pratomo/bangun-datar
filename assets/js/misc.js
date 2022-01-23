/* ---------------------------------------- FUNCTION TO GENERATE CURRENT YEAR --------------------------------------- */
const getCurrentYear = function (element) {
    const currentYear = new Date().getFullYear();
    element.innerText = currentYear;
};

/* 
    FUNCTION FOR EXPLAINATION ELEMENT
    NEED 2 ARGUMENT NAME OF TWO DIMENSIONAL , NEED NUMBER OFELEMENT LI
*/
const expElement = function (name, numberOfLi) {
    let li = '';

    for (let i = 0; i < numberOfLi; i++) {
        li += /* html */ `<li class="list-group-item ${name}-${i}"></li>`;
    }

    const ul = /* html */ `
    <ul class="list-group list-group-flush animate__animated animate__fadeIn">
        ${li}
    </ul>
    `;

    return ul;
};

export { getCurrentYear, expElement };