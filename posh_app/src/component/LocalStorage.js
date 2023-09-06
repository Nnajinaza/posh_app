export function addToLocalStorage(newProduct) {
    let product = JSON.parse(localStorage.getItem("product"))
    if (!product) {
        product = []
    }
    product.push(newProduct)
    localStorage.setItem("product", JSON.stringify(product))
}

export function viewFromLocalStorage(id) {
    const product = JSON.parse(localStorage.getItem("product"))
    return product
}