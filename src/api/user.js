//TODO move the API_ENDPOINT to the config file.

//const userEndPoint = process.env.API_ENDPOINT + '/users';


export const register = async (credentials) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/register`, {
      method: "POST",
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const responseMsg = await response.text();

    if(!response.ok){
      throw new Error(responseMsg);
    }

    return responseMsg;

  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/login`, {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
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

export const logout = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/logout`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(!response.ok){
      const errMsg = await response.text();
      throw new Error(errMsg);
    }

    return {status: response.status }

  } catch (error) {
    throw error;
  }
};

export const status = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/status`, {
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

export const info = async (user) => {
  try {
    const response = await fetch(`http://localhost:3000/api/users/${user.id}`, {
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


