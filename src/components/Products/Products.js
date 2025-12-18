import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/product/Product.actions';
import { addProduct, getCart, updateProduct } from '../../store/cart/Cart.actions';
import ProductDetail from '../ProductDetails/ProductDetails';
import "./Products.css"

const Products = () => {
    const dispatch = useDispatch();
    const { error, products } = useSelector(state => state.product);
    const { cartProducts } = useSelector(state => state.cart);
    const { isAuthenticated } = useSelector(state => state.user);

    useEffect(() => {
        const getProductInfo = async () => {
            try {
                await dispatch(getProducts());
            } catch(err) {
                console.log(err);
            }
        };

        getProductInfo();
    }, []);

    const onAddToCart = async (id, qty) => {
        try {
            const product = cartProducts.find(product => product.product_id === id)

            if (product)
            {
                await dispatch(updateProduct({product_id: id, qty: product.qty + qty}));
            } else 
            {
                await dispatch(addProduct({product_id: id, qty: qty}));
            }
            await dispatch(getCart());
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className='products'>
            <h2>Products</h2>

            <div>{error}</div>

            <div className='productgrid'>
                {products.map((product, index) => (    
                    <ProductDetail
                        key={product.id} 
                        product={product}
                        isAuthenticated={isAuthenticated}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;