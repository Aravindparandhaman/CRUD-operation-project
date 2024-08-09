const itemList = document.getElementById('itemList');
const itemInput = document.getElementById('itemInput');

function addItem() {
    const itemText = itemInput.value.trim();
    if (itemText === '') return;

    const li = document.createElement('li');
    li.innerHTML = `${itemText}
        <button onclick="editItem(this)">Edit</button>
        <button onclick="deleteItem(this)">Delete</button>`;
    itemList.appendChild(li);
    itemInput.value = '';
}

function editItem(button) {
    const li = button.parentElement;
    const newItemText = prompt('Edit item:', li.firstChild.textContent.trim());
    if (newItemText !== null && newItemText.trim() !== '') {
        li.firstChild.textContent = newItemText;
    }
}

function deleteItem(button) {
    const li = button.parentElement;
    itemList.removeChild(li);
}
