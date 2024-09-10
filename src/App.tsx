import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ProblemSet from './components/ProblemSet';
import QuestionBoard from './components/QuestionBoard';
import LearningMaterials from './components/LearningMaterials';
import RankingSystem from './components/RankingSystem';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A237E', // 진한 남색
    },
    secondary: {
      main: '#E74C3C', // 강조색 (변경 없음)
    },
    background: {
      default: '#F5F5F5', // 밝은 회색 배경
      paper: '#FFFFFF',   // 흰색 카드 배경
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/problems" element={<ProblemSet />} />
            <Route path="/questions" element={<QuestionBoard />} />
            <Route path="/materials" element={<LearningMaterials />} />
            <Route path="/ranking" element={<RankingSystem />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;