let shoppingList = []
let newItem = prompt("please add item ")

while(newItem !== "") {
    shoppingList.push(newItem);
    alert(shoppingList);
    newItem = prompt("Please add new item ");
};

alert(shoppingList)