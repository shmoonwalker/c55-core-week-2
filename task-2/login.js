// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;
let isBlock = false;

function onLogin(username, password) {
  if (isBlock) {
    errorMessage("Login blocked: Too many incorrect attempts");
    return;
  }

  if (
    (username === "admin" && password === "Hack1234") ||
    (username === "user" && password === "7654321")
  ) {
    successMessage("Logged in successfully");
  } else {
    incorrectAttempts++

  
    if (incorrectAttempts >= 4) {
      isBlock = true;
      errorMessage("Login blocked: Too many incorrect attempts");
    } else {
      errorMessage("Incorrect credentials");
    }
  }
}

export { onLogin };
