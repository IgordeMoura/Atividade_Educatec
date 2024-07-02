const authService = require('../services/loginService');

const login = async (req, res) => {
  const { login, senha } = req.body;
  try {
    const { token, tipo_usuario } = await authService.login(login, senha);
    res.status(200).json({ token, tipo_usuario });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = { login };
