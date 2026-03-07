const BASE_URL = 'http://192.168.1.148:8000/api';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export async function authLogin({ email, password }) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      email,
      password,
    }),
  });
  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Invalid response from server');
  }

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Login failed');
  }
}

export async function authRegister({ firstName, lastName, email, password }) {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      name: `${firstName} ${lastName}`,
      email,
      password,
    }),
  });
  let data;
  try {
    data = await response.json();
  } catch (e) {
    throw new Error('Invalid response from server');
  }

  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message || 'Registration failed');
  }
}