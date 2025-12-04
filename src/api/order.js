export const getDBOrders = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/orders`, {
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

export const getDBOrderDetails = async (order_id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/orders/${order_id}`, {
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