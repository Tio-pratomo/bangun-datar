import TwoDimensional from './two-dimentional.js';

class Rectangle extends TwoDimensional {
    constructor(boxExp, element, inputUser) {
        super(boxExp, element, inputUser);
    }

    displayRectangleWidth(elements) {
        const [width] = this.inputUser;
        elements.forEach((el) => {
            el.innerText = width.value;
        });
    }

    displayRectangleHeight(elements) {
        const [, height] = this.inputUser;
        elements.forEach((el) => {
            el.innerText = height.value;
        });
    }

    displayAreaOfRectangle(element) {
        const [width, height] = this.inputUser;
        const result = width.value * height.value;

        element.innerText = result;
    }

    displayPerimeterOfRectangle(elements) {
        const [width, height] = this.inputUser;
        const [totalWidth, totalHeight, perimeterOfRectangle] = elements;

        totalWidth.innerText = 2 * width.value;
        totalHeight.innerText = 2 * height.value;
        perimeterOfRectangle.innerText = Number(totalWidth.innerText) + Number(totalHeight.innerText);
    }
}

export default Rectangle;
