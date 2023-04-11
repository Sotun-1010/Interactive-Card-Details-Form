// incomplete section
let incomplete = document.querySelector('.incomplete');
// complete section
let complete = document.querySelector('.complete')


// cardholder name stuff
let cardholderName = document.querySelector('#card-name-p');
let cardHolderNameInput = document.querySelector('#cardholder-name');

// card number stuff
let cardNumber = document.querySelector('#card-number1');
let cardNumberInput = document.querySelector('#card-number');

// month
let month = document.querySelector('#month');
let monthInput = document.querySelector('#month-input');

// year
let year = document.querySelector('#year');
let yearInput = document.querySelector('#year-input');

// cvc
let cvc = document.querySelector('.crv-no');
let cvcInput = document.querySelector('#cvc-input');

// Form
let form = document.querySelector('#input-form');

//  button
let button = document.querySelector('#btn');

// continue button
let Continue = document.querySelector('.continue');




// functions
cardHolderNameInput.oninput = () => {
    cardholderName.innerText = cardHolderNameInput.value
};

cardNumberInput.oninput = () => {
    cardNumber.innerText = cardNumberInput.value
};

monthInput.oninput = () => {
    month.innerText = monthInput.value
};

yearInput.oninput = () => {
    year.innerText = yearInput.value
};

cvcInput.oninput = () => {
    cvc.innerText = cvcInput.value
};

cardNumberInput.addEventListener("keyup", (e) => {
    if (!e.target.value) {
        cardNumber.innerText = "0000 0000 0000 0000";
    } else {
        const valuesOfInput = e.target.value.replaceAll(" ", "");

        if (e.target.value.length > 14) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
            cardNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3 $4");
        } else if (e.target.value.length > 9) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
            cardNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{4})(\d{0,4})/, "$1 $2 $3");
        } else if (e.target.value.length > 4) {
            e.target.value = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
            cardNumber.innerHTML = valuesOfInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
        } else {
            cardNumber.innerHTML = valuesOfInput
        }
    }
});

function displayComplete(){
    complete.style.display = 'flex';
    incomplete.style.display = 'none';
};

form.addEventListener('submit', function(event){
    event.preventDefault();
    displayComplete();
});

Continue.addEventListener('click', () => {
    window.location.reload(true);
});
