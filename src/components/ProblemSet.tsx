import React, { useState } from 'react';
import { Typography, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

interface Problem {
  id: number;
  title: string;
  difficulty: string;
  tags: string[];
  views: number;
  solvedCount: number;
}

const ProblemSet: React.FC = () => {
  const [problems] = useState<Problem[]>([
    { id: 1, title: "두 수의 합", difficulty: "Easy", tags: ["배열", "해시테이블"], views: 1000, solvedCount: 500 },
    { id: 2, title: "링크드 리스트 뒤집기", difficulty: "Medium", tags: ["연결 리스트"], views: 800, solvedCount: 300 },
    { id: 3, title: "이진 트리 순회", difficulty: "Hard", tags: ["트리", "DFS"], views: 600, solvedCount: 100 },
  ]);

  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortBy, setSortBy] = useState('difficulty');

  return (
    <div>
      <Typography variant="h4" gutterBottom>문제 목록</Typography>
      <TextField 
        fullWidth 
        label="문제 검색" 
        variant="outlined" 
        margin="normal" 
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>정렬 기준</InputLabel>
        <Select
          value={sortBy}
          label="정렬 기준"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="difficulty">난이도순</MenuItem>
          <MenuItem value="views">조회수순</MenuItem>
          <MenuItem value="solvedCount">풀이 횟수순</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>난이도</TableCell>
              <TableCell>태그</TableCell>
              <TableCell>조회수</TableCell>
              <TableCell>풀이 횟수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {problems
              .filter(problem => problem.title.toLowerCase().includes(searchKeyword.toLowerCase()))
              .sort((a, b) => {
                if (sortBy === 'difficulty') {
                  return ['Easy', 'Medium', 'Hard'].indexOf(a.difficulty) - ['Easy', 'Medium', 'Hard'].indexOf(b.difficulty);
                } else if (sortBy === 'views') {
                  return b.views - a.views;
                } else {
                  return b.solvedCount - a.solvedCount;
                }
              })
              .map((problem) => (
                <TableRow key={problem.id} hover>
                  <TableCell>{problem.id}</TableCell>
                  <TableCell>{problem.title}</TableCell>
                  <TableCell>
                    <Chip 
                      label={problem.difficulty} 
                      color={problem.difficulty === 'Easy' ? 'success' : problem.difficulty === 'Medium' ? 'warning' : 'error'} 
                      size="small" 
                    />
                  </TableCell>
                  <TableCell>
                    {problem.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" sx={{ mr: 0.5 }} />
                    ))}
                  </TableCell>
                  <TableCell>{problem.views}</TableCell>
                  <TableCell>{problem.solvedCount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProblemSet;