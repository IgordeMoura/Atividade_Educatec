const matriculaService = require('../services/matriculaService');

const createMatricula = async (req, res) => {
  try {
    const matricula = await matriculaService.createMatricula(req.body);
    res.status(201).json(matricula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMatriculas = async (req, res) => {
  try {
    const matriculas = await matriculaService.getMatriculas();
    res.status(200).json(matriculas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createMatricula, getMatriculas };
