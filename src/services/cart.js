async function addItem(userCart, item){
    userCart.push(item);
}

async function deleteItem(userCart, itemName){
    const index = userCart.findIndex((item) => item.name === itemName);
    if(index != -1){
        userCart.splice(index,1);
    }
}

async function decreaseQuantity(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity --;
    }
    else{
        await deleteItem(userCart, item.name);
    }
}

async function calculateTotal(userCart){
    return userCart.reduce((total, item) => total + item.subtotal(), 0);
}

async function displayCart(userCart){
    console.log("Sua lista de compras:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} / Qtd: ${item.quantity} / Subtotal: R$ ${item.subtotal()}`);
    })
}

export {
    addItem, deleteItem, decreaseQuantity, calculateTotal, displayCart
}