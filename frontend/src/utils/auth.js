import api from './api';

const register = async (username, email, password) => {
  try {
    const response = await api.post('/register', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const login = async (email, password) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });
    localStorage.setItem('authToken', response.data.token);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logout = () => {
  localStorage.removeItem('authToken');
};

const checkAuth = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return false;
  }

  try {
    const response = await api.get('/auth/check', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    localStorage.removeItem('authToken');
    return false;
  }
};

const getCurrentUser = async () => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return null;
  }

  try {
    const response = await api.get('/auth/user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    localStorage.removeItem('authToken');
    return null;
  }
};

export { register, login, logout, checkAuth, getCurrentUser };
