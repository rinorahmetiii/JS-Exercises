//Book Constructor
function Book(title , author , isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() {}

//Add book to list
UI.prototype.addBookToList   = function (book) {
    const list = document.getElementById('book-list');
    //Create tr Element
    const row = document.createElement('tr');
    //Isert cols
    row.innerHTML = `
    <td>${book.title}</td> 
    <td>${book.author}</td> 
    <td>${book.isbn}</td> 
    <td><a href ="#" class="delete">X</a></td> 
    `;
    
    list.appendChild(row);
}

//Show Alert
UI.prototype.showAlert = function(message , className) {
    const div = document.createElement('div');
    //Add classname
    div.className = `alert ${className}`;
    //Add text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //Get the form(we want to put the div before the form)
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div , form);
    //Time out after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').remove();
    } , 1000);
}

//Delete Book
UI.prototype.deleteBook = function(target) {
    if (target.className === 'delete') {
        if(confirm('Are you sure ?')){
            const ui = new UI();
            ui.showAlert('Book Removed !' , 'error');
            target.parentElement.parentElement.remove();
        }
    }
}

//Clear List
UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listener for add Book
document.getElementById('book-form').addEventListener('submit' , function(e) {
    //Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    //Instantiate book
    const book = new Book(title , author , isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error Alert
        ui.showAlert('Please fill in all fields' , 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //Show alert
        ui.showAlert('Book added sucessfuly' , 'success');

        //Clear Fields
        ui.clearFields();


    }
    e.preventDefault();
});


//Event Listener for add Book
document.getElementById('book-form').addEventListener('submit' , function(e) {
    //Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value

    //Instantiate book
    const book = new Book(title , author , isbn);

    //Instantiate UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error Alert
        ui.showAlert('Please fill in all fields' , 'error');
    } else {
        //Add book to list
        ui.addBookToList(book);

        //Show alert
        ui.showAlert('Book added sucessfuly' , 'success');

        //Clear Fields
        ui.clearFields();


    }
    e.preventDefault();
});


//Event Listener for delete
document.getElementById('book-list').addEventListener('click' , function(e){
    //Instantiate book
    const ui = new UI();

    ui.deleteBook(e.target);
    
    e.preventDefault();
});