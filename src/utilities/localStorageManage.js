const setDataToLocalStorage = (id) => {
    // =======> for basic learning <============
    //==========================================
    // const quantity = localStorage.getItem(id)
    // if (quantity) {
    //     let newQuantity = parseInt(quantity) + 1;
    //     //---- // let newQuantity = +quantity + 1;
    //     localStorage.setItem(id, newQuantity)
    // } else {
    //     localStorage.setItem(id, 1)
    // }

    // =============> advanced way <=================
    //===============================================
    let shoppingCart = {};

    // ---> get items'
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart)
    }


    // ---> set items
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

}



// =====> remove from local storage
const removeDataFromLocalStorage = (id) => {
    const storeCart = localStorage.getItem('shopping-cart');
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart);
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}




// =======> reduce handle
const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + +current.balance;
    const total = products.reduce(reducer, 0)
    return total

}




export {
    setDataToLocalStorage,
    removeDataFromLocalStorage,
    getTotalPrice as totalPrice
}