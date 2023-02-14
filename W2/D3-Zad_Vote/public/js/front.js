const numberAInput = document.querySelector('#number-a');
const numberBInput = document.querySelector('#number-b');
const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');


    
}

form.addEventListener('submit', async event => {
    event.preventDefault();

    const numberA = Number(numberAInput.value);
    const numberB = Number(numberBInput.value);
    resultDiv.innerText = 'Loading...'
    resultDiv.style.border = 'none';
    console.log({numberA, numberB});

    const result = await fetch('/calc/check', {
        method: 'POST',
        body: JSON.stringify({numberA, numberB}),
        headers: {'Content-Type': 'application/json'},
    })
    const data = await result.json();
    if (data.divider) {
        resultDiv.innerText = 'Number B is divider of Number A';
        resultDiv.style.border = '2px solid green';
    } else {resultDiv.innerText = 'Number B is not a divider of Number A';
    resultDiv.style.border = '2px solid red';}
})



