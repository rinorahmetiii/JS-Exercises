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

    e.preventDefault();
}

