document.querySelector('.get-jokes').addEventListener('click' , getJokes);

function getJokes(e) {
    const number = document.getElementById('number').value;

    const xhr = new XMLHttpRequest();
    // Api qe gjeneron jokes te chuck norris
    xhr.open('GET' , `http://api.icndb.com/jokes/random/${number}` , true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            let output = '';

            if(response.type === 'success' && number) {
                response.value.forEach(function(joke) {
                    output += `
                    <hr style="border: 2px solid green;" />
                    <li>${joke.joke}</li>
                    `;
                });
            } else {
                output += '<li>Something went wrong</li>'
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    // Shembull i asynchronous code ,kjo shfaqet e para deri sa api kryen punen me te dhena
    document.querySelector('.jokess').innerHTML = '<div><h1>This is being displayed first , asynchronous code next</h1></div>';

    e.preventDefault();
}

