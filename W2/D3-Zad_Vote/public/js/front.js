const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

function setResult(text, color) {
    resultDiv.innerText = text
    resultDiv.style.border = `3px solid ${color}`
};

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);
    setResult('Loading...', 'transparent')

    console.log({numberA, numberB});

    const result = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({numberA, numberB}),
        headers: {'Content-Type': 'application/json'},
    })
    const data = await result.json();
    if (data.divider) {
        setResult('Number B is divider of Number A', 'green');
    } else {
        setResult('Number B is not a divider of Number A', 'red');
    }
})



