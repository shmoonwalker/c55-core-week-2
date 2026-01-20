// Do not change the line below
import { errorMessage, successMessage } from './app.js';

let incorrectAttempts = 0;
let isBlock = false;

function onLogin(username, password) {
  if (isBlock) {
    errorMessage("Login blocked: Too many incorrect attempts")
  }
  else {
    if ((username === "admin" && password === "Hack1234") || (username === "user" && password === "7654321")) {
      successMessage("Logged in successfully")
    }
    else if ((username === "admin" && password != "Hack1234") || (username === "user" && password != "7654321")) {
      incorrectAttempts++;
      errorMessage("Incorrect credentials")
    }
    else {
      errorMessage("Incorrect credentials")
    }
    if (incorrectAttempts > 3) {
      isBlock = true;
    }
  }
}

// Do not change the line below
export { onLogin };
