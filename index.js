//console.log('hello world');

const STORE = [
    { name: "apples", checked: false },
    { name: "oranges", checked: false },
    { name: "milk", checked: true },
    { name: "bread", checked: false }
];

function renderShoppingList() {
    // this function will be responsible for rendering the shopping list in
    // the DOM
    //find where the shopping list items want to go 
    $('.shopping-list').html(shoppingListString);
    const shoppingListString = '<li>apples</li>';
    //when we find it, how can we make sure we are where we need to be?

    //we found it and edited it to confirm, and then add something relevant
    console.log('`renderShoppingList` ran');
}


function handleNewItemSubmit() {
    // this function will be responsible for when users add a new shopping list item
    console.log('`handleNewItemSubmit` ran');
}


function handleItemCheckClicked() {
    // this function will be responsible for when users click the "check" button on
    // a shopping list item.
    console.log('`handleItemCheckClicked` ran');
}


function handleDeleteItemClicked() {
    // this function will be responsible for when users want to delete a shopping list
    // item
    console.log('`handleDeleteItemClicked` ran')
}

// this function will be our callback when the page loads. it's responsible for
// initially rendering the shopping list, and activating our individual functions
// that handle new item submission and user clicks on the "check" and "delete" buttons
// for individual shopping list items.
function handleShoppingList() {
    renderShoppingList();
    handleNewItemSubmit();
    handleItemCheckClicked();
    handleDeleteItemClicked();

}

// when the page loads, call `handleShoppingList`
$(handleShoppingList);