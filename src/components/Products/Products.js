import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/product/Product.actions';
import { addProduct, getCart } from '../../store/cart/Cart.actions';
import ProductDetail from '../ProductDetails/ProductDetails';

const Products = () => {
    const dispatch = useDispatch();
    const { error, products } = useSelector(state => state.product);
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
            await dispatch(addProduct({product_id: id, qty: qty}));
            await dispatch(getCart());
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h2>Products</h2>

            <div>{error}</div>

            {products.map((product, index) => (
                <div>    
                    <ProductDetail
                        key={product.id} 
                        product={product}
                        isAuthenticated={isAuthenticated}
                        onAddToCart={onAddToCart}
                    />
                </div>
            ))}
        </div>
    );
}

export default Products;