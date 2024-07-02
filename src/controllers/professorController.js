const professorService = require('../services/professorService');

const createProfessor = async (req, res) => {
  try {
    const professor = await professorService.createProfessor(req.body);
    res.status(201).json(professor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfessores = async (req, res) => {
  try {
    const professores = await professorService.getProfessores();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createProfessor, getProfessores };
