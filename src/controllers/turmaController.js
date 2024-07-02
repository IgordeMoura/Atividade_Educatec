const turmaService = require('../services/turmaService');

const createTurma = async (req, res) => {
  try {
    const turma = await turmaService.createTurma(req.body);
    res.status(201).json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTurmas = async (req, res) => {
  try {
    const turmas = await turmaService.getTurmas();
    res.status(200).json(turmas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTurma, getTurmas };
