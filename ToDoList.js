document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const itemInput = document.getElementById('itemInput').value;
    addItemToList(itemInput);
    document.getElementById('itemInput').value = ''; 
});

function addItemToList(item) {
    const shoppingList = document.getElementById('shoppingList');
    const newItem = document.createElement('div');
    newItem.textContent = item;
    shoppingList.appendChild(newItem);
}
