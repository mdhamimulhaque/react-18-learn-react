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
    const shoppingCart = {};

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))




    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    // const quantity = localStorage.getItem(id)
    // if (quantity) {
    //     let newQuantity = parseInt(quantity) + 1;
    //     // localStorage.setItem(id, newQuantity)
    // } else {
    //     // localStorage.setItem(id, 1)
    // }

}

export { setDataToLocalStorage }