/* ---------------------------------------- FUNCTION TO GENERATE CURRENT YEAR --------------------------------------- */
const getCurrentYear = function (element) {
    const currentYear = new Date().getFullYear();
    element.innerText = currentYear;
};

/* 
    FUNCTION FOR EXPLAINATION ELEMENT
    NEED 2 ARGUMENT -> NAME OF TWO DIMENSIONAL OR GEOMETRY NEED NUMBER OF ELEMENT LI
*/
const expElement = function (name, numberOfLi) {
    let li = '';

    for (let i = 0; i < numberOfLi; i++) {
        li += /* html */ `<li class="list-group-item ${name}-${i}"></li>`;
    }

    const ul = /* html */ `
    <ul class="list-group list-group-flush fade-in">
        ${li}
    </ul>
    `;

    return ul;
};

/* 
OPEN SIDE BAR
*/

function openSideBar(element) {
    element.style.width = '200px';
}

function closingSideBar(element) {
    element.style.width = '0';
}

export { getCurrentYear, expElement, openSideBar, closingSideBar };
