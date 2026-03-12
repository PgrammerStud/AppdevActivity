const BASE_URL = 'http://192.168.1.148:8000/api';
const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export async function authLogin({ username, email, password }) {
  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    ...options,
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  let data;
  try {
    data = await response.json();
  } catch (e) {
    console.error('Failed to parse response as JSON:', response.status, response.statusText);
    throw new Error('Invalid response from server');
  }

  if (response.ok) {
    return data;
  } else {
    console.error('Login failed with status:', response.status, 'data:', data);
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