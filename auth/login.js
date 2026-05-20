function validateLogin(username, password) {
  if (!username || !password) {
    return false;
  }

  return true;
}

module.exports = { validateLogin };
