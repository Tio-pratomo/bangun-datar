class TwoDimensional {
    /* 
        boxExp berupa element container penjelasan perhitungan.
        element berupa element list yang menjelaskan isinya ketika tombol di klik
        input user harus berupa array untuk kebutuhan sanitasi input user dan data-data lainnnya.
    */
    constructor(boxExp, element, inputUser) {
        this.boxExp = boxExp;
        this.element = element;
        this.inputUser = inputUser;
    }

    sanitizeInputUser() {
        this.inputUser.forEach((element) => {
            if (element.value === '' || element.value === '0') {
                element.value = 0;
            } else if (element.value < 0) {
                element.value *= -1;
            } else if (element.value.charAt(0) === '0') {
                const tempArr = element.value.split('');
                tempArr.shift();
                element.value = tempArr.join('');
            }
        });
    }

    displayCalculate() {
        this.boxExp.innerHTML = this.element;
    }
}

export default TwoDimensional;
