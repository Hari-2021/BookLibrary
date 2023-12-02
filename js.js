function addBook() {
    var bookName = document.getElementById('bookName').value;
    var author = document.getElementById('author').value;
    var publicationYear = document.getElementById('publicationYear').value;

    if (!bookName || !author || !publicationYear) {
        alert('Please fill in all fields');
        return;
    }

    var table = document.getElementById('bookList');
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = '<b>bookName</b>';
    cell2.innerHTML = 'by ' + author + ',' + 'Year ' + publicationYear;
    cell3.innerHTML = '<button class="btn btn-danger" onclick="removeBook(this)">Remove</button>';

    // Show the box after adding a book
    document.querySelector('.box').style.display = 'block';
}

function removeBook(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    // no more rows hide the box
    var table = document.getElementById('bookList');
    if (table.rows.length === 0) {
        document.querySelector('.box').style.display = 'none';
    }
}
