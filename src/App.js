import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/Login/Login';
import CadastroAlunoADM from './components/Admin/CadastroAluno';
import CadastroProfessorADM from './components/Admin/CadastroProfessor';
import ListarAlunosADM from './components/Admin/ListarAlunos';
import ListarProfessoresADM from './components/Admin/ListarProfessores';
import ListarTurmasADM from './components/Admin/ListarTurmas';
import BoletimADM from './components/Admin/Boletim';
import Dashboard from './pages/Admin/Dashboard';
import DashboardProfessor from './pages/Professor/DashboardProfessor';
import DashboardAluno from './pages/Aluno/DashboardAluno';
import ListarAlunos from './components/Professor/ListarAlunos';
import LancarNotas from './components/Professor/Boletim';
import ListarProfessores from './components/Aluno/ListarProfessores';
import VisualizarNotas from './components/Aluno/Boletim';
import './styles/style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cadastro-aluno/admin" element={<CadastroAlunoADM />} />
          <Route path="/cadastro-professor/admin" element={<CadastroProfessorADM />} />
          <Route path="/listar-alunos/admin" element={<ListarAlunosADM />} />
          <Route path="/listar-professores/admin" element={<ListarProfessoresADM />} />
          <Route path="/listar-turmas/admin" element={<ListarTurmasADM />} />
          <Route path="/boletim/admin" element={<BoletimADM />} />

          <Route path="/professor/dashboard" element={<DashboardProfessor/>} />
          <Route path="/professor/listar-alunos" element={<ListarAlunos/>} />
          <Route path="/professor/lancar-notas" element={<LancarNotas/>} />
          <Route path="/aluno/dashboard" element={<DashboardAluno/>} />
          <Route path="/aluno/listar-professores" element={<ListarProfessores/>} />
          <Route path="/aluno/visualizar-notas" element={<VisualizarNotas/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
