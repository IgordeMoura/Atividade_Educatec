const notaService = require('../services/notaService');

const createNota = async (req, res) => {
  try {
    const nota = await notaService.createNota(req.body);
    res.status(201).json(nota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createNota };
