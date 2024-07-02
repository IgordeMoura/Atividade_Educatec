const express = require('express');
const router = express.Router();

const loginController = require('./controllers/loginController');
const alunoController = require('./controllers/alunoController');
const professorController = require('./controllers/professorController');
const turmaController = require('./controllers/turmaController');
const matriculaController = require('./controllers/matriculaController');
const notaController = require('./controllers/notaController');
const boletimController = require('./controllers/boletimController');

router.post('/login', loginController.login);
router.post('/alunos', alunoController.createAluno);
router.get('/alunos', alunoController.getAlunos);
router.post('/professores', professorController.createProfessor);
router.get('/professores', professorController.getProfessores);
router.post('/turmas', turmaController.createTurma);
router.get('/turmas', turmaController.getTurmas);
router.post('/matriculas', matriculaController.createMatricula);
router.get('/matriculas', matriculaController.getMatriculas);
router.post('/notas', notaController.createNota);
router.get('/boletim/:idAluno', boletimController.getBoletim);

module.exports = router;
