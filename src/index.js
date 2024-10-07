import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWhishList = [];

const item1 = await createItem("caneta bic", 5.00, 1);
const item2 = await createItem("lápis fabercastel", 3.00, 5);
const item3 = await createItem("borracha fabercastel", 4.00, 2);
const item4 = await createItem("bloco anotação", 6.00, 1);

await cartService.addItem(myWhishList, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.addItem(myCart, item4);
console.log(await cartService.calculateTotal(myCart));
await cartService.deleteItem(myCart, item3.name);
console.log(await cartService.calculateTotal(myCart));
await cartService.displayCart(myCart);
await cartService.decreaseQuantity(myCart, item2);
await cartService.displayCart(myCart);