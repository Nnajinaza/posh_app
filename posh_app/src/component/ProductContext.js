import React, { useContext, createContext, useState, useEffect } from 'react'
// import api from '../component/server/products'

const ProductContext = createContext({items: [],
    getProductQuantity: () => {},
    addToCart: () => {},
    removeFromCart: () => {},
    deleteAll: () => {},
    getTotalCost: () => {}
})

export function useProductCart() {
    return useContext(ProductContext)
}

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('/api/products/')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])

    const [cartItems, setCartItems] = useState([])

    function getProductQuantity(id) {
        const quantity = cartItems.find(product => product.id === id)?.quantity;

        if (quantity === undefined){
            return 0;
        }
        return quantity;
    }

    function addToCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 0) {
            setCartItems([...cartItems, {id: id, quantity: 1}])
        }
        else {
            setCartItems(
                cartItems.map(product => 
                    product.id === id 
                    ? { ...product, quantity: product.quantity + 1} 
                    : product)
            )
        }
    }

    function removeFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1) {
            deleteAll(id)
        }
        else {
            setCartItems(
                cartItems.map(product =>
                    product.id === id 
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteAll(id) {
        setCartItems(
            cartItems => 
            cartItems.filter(currentProduct => {
                return currentProduct.id !== id
            })
        )
    }

    function getTotalCost() {
        let totalCost = 0
        cartItems.map((cartItem) => {
            const productData = products(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        })
        return totalCost;
    }

    const contextValue = {
        getProductQuantity: [],
        addToCart,
        removeFromCart,
        deleteAll,
        getTotalCost
    }

    return (
        <ProductContext.Provider value={{ cartItems, setCartItems}}>
            {children}
        </ProductContext.Provider>
    )
}
