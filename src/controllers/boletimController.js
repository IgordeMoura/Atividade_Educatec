const boletimService = require('../services/boletimService');

const getBoletim = async (req, res) => {
  const { idAluno } = req.params;
  try {
    const boletim = await boletimService.getBoletim(idAluno);
    res.status(200).json(boletim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBoletim };
