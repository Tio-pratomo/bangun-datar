import { getCurrentYear } from './misc.js';

class Faktorial {
    constructor(boxExp, inputUser) {
        this.boxExp = boxExp;
        this.inputUser = inputUser;
    }

    sanitizeInputUser(...elements) {
        const [parentNode, elementBefore, button] = elements;

        if (this.inputUser.value === '' || this.inputUser.value === '0') {
            this.inputUser.value = 0;
        } else if (this.inputUser.value < 0 || this.inputUser.value > 50) {
            parentNode.insertBefore(this.createElementAlert(), elementBefore);
            button.disabled = true;
        } else if (this.inputUser.value.charAt(0) === '0') {
            const tempArr = this.inputUser.value.split('');
            tempArr.shift();
            this.inputUser.value = tempArr.join('');

            if (this.inputUser.value > 50) {
                parentNode.insertBefore(this.createElementAlert(), elementBefore);
                button.disabled = true;
            }
        }
    }

    createElementAlert() {
        const div = document.createElement('div');
        div.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
        div.setAttribute('role', 'alert');

        div.innerHTML = /* html */ `
        <strong>Pastikan angkanya antara 0 sampai 50, klik tanda x di samping untuk melanjutkan</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="close" aria-hidden="true">&times;</span>
        </button>
        `;

        return div;
    }

    displayFaktorial() {
        const tempArr = [];
        const userValue = Number(this.inputUser.value);

        if (userValue === 0) {
            this.boxExp.innerHTML = /* html */ `<span class="fade-in">0 ! = 1</span>`;
        } else if (userValue === 1) {
            this.boxExp.innerHTML = /* html */ `<span class="fade-in">1 ! = 1</span>`;
        } else if (userValue > 0 && userValue < 51) {
            let displayString = `${this.inputUser.value} ! = `;
            const x = ' x ';

            let i = Number(this.inputUser.value);

            for (i; i > 0; i--) {
                tempArr.push(i);
            }

            tempArr.forEach((value) => {
                displayString += value;
                displayString += x;
            });

            const result = tempArr.reduce((acc, currVal) => acc * currVal);

            let finalString = displayString.slice(0, -2);

            finalString += ` = ${result.toLocaleString('id-ID')}`;

            const span = /* html */ `<span class="fade-in">${finalString}</span>`;

            this.boxExp.innerHTML = span;
        }
    }
}

const faktorial = new Faktorial(
    document.querySelector('.explaination-faktorial'),
    document.querySelector('#input-faktorial')
);

const buttonFaktorial = document.querySelector('button.faktorial');
buttonFaktorial.addEventListener('click', function () {
    faktorial.sanitizeInputUser(
        document.querySelector('.parent-alert'),
        document.querySelector('label[for="input-faktorial"]'),
        buttonFaktorial
    );

    faktorial.displayFaktorial();
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
        document.querySelector('#input-faktorial').value = '';
        buttonFaktorial.disabled = false;

        faktorial.boxExp.innerText = '';
    }
});

/* ---------------------------------------------------- COPYRIGHT --------------------------------------------------- */
getCurrentYear(document.querySelector('span.copy-right'));
