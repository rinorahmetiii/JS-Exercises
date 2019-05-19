document.getElementById('button1').addEventListener('click' , loadCustomer);
document.getElementById('button2').addEventListener('click' , loadCustomers);
document.getElementById('buttonAck').addEventListener('click' , loadAckMembers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , '../json/customer.json' , true);

    xhr.onload = function() {
        if(this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output = `
            <hr style="border: 2px solid#5b9aa0;" />
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('costumer').innerHTML = output;
        }
    }

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , '../json/customers.json' , true);

    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
                output += `
                <hr style="border: 2px solid#5b9aa0;" />
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `;
            });
            document.getElementById('costumers').innerHTML = output;
        }
    }

    xhr.send();
}

function loadAckMembers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET' , '../json/customers.json' , true);

    xhr.onload = function() {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer) {
                if (customer.company === 'ACK') {
                    output += `
                    <hr style="border: 2px solid#5b9aa0;" />
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Company: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                    `;
                }
            });
            document.getElementById('ackmembers').innerHTML = output;
        }
    }
    
    xhr.send();
}