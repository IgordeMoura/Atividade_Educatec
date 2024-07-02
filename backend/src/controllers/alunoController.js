const alunoService = require('../services/alunoService');

const createAluno = async (req, res) => {
  try {
    const aluno = await alunoService.createAluno(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlunos = async (req, res) => {
  try {
    const alunos = await alunoService.getAlunos();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAlunos, createAluno };
