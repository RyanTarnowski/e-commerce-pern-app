export const getDBCart = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    const data = await response.json();
    return {status: response.status, data: data }

  } catch (error) {
    throw error;
  }
};

export const AddProductToCart = async (product) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        product_id: product.product_id,
        qty: product.qty,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    const data = await response.json();
    return {status: response.status, data: data }

  } catch (error) {
    throw error;
  }
};

export const UpdateProductInCart = async (product) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart`, {
      method: "PUT",
      credentials: 'include',
      body: JSON.stringify({
        product_id: product.product_id,
        qty: product.qty,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    const data = await response.json();
    return {status: response.status, data: data }

  } catch (error) {
    throw error;
  }
};

export const DeleteProductFromCart = async (product_id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/${product_id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    const data = await response.json();
    return {status: response.status, data: data }

  } catch (error) {
    throw error;
  }
};

export const CheckoutCart = async (cardInfo) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cart/checkout`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
      card_holder: cardInfo.name,
      card_number: cardInfo.number,
      card_cvv: cardInfo.cvv
      }),
      headers: {
      "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    const data = await response.json();
    return {status: response.status, data: data }
    
  } catch (error) {
    throw error;
  }
};

