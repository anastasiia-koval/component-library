import axios from "axios";

const API_KEY = "AIzaSyA6DIBshv4ityqdW5Zf4nDWveAEaZz_OPc";

export async function createUser(email, password, userName) {
  const responseCreateUser = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      displayName: userName,
      returnSecureToken: true,
    }
  );

  const responseUpdateUser = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
    {
      idToken: responseCreateUser.data.idToken,
      displayName: userName,
      returnSecureToken: true,
    }
  );

  const token = responseCreateUser.data.idToken;
  return token;
}

export async function login(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  const token = response.data.idToken;
  return token;
}
