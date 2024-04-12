function addNote() {
    var noteInput = document.getElementById('noteInput');
    var noteText = noteInput.value;

    if (noteText.trim() !== '') { // Check if the input is not empty
        var listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = noteText; // Set the text content of the list item
        document.getElementById('noteList').appendChild(listItem); // Append the list item to the note list
        noteInput.value = '';
    } else {
        alert('Please enter a note.');
    }
}
