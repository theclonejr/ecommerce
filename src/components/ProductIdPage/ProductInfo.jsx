import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCartThunk } from '../../store/slices/cart.slice'

const ProductInfo = ({ product }) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleMinus = () => {
        if (quantity - 1 >= 1) {
            setQuantity(quantity -1)
        }
    }

    const handlePlus = () => setQuantity(quantity + 1)

    const handleAddToCart = () => {
        dispatch(addProductToCartThunk(product?.id, quantity))
    }

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <div>
                <span>Price</span>
                <span>{product?.price}</span>
            </div>
            <div>
                <button onClick={handleMinus}>-</button>
                <div>{quantity}</div>
                <button onClick={handlePlus}>+</button>
            </div>
            <button onClick={handleAddToCart}>Add to cart <i className='bx bx-cart'></i></button>
        </footer>
    </article>
  )
}

export default ProductInfo