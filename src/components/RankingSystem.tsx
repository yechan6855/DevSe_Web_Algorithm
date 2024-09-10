import React, { useState } from 'react';
import { Typography, Paper, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface User {
  id: number;
  name: string;
  solvedProblems: number;
  score: number;
}

const RankingSystem: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [users] = useState<User[]>([
    { id: 1, name: '사용자1', solvedProblems: 120, score: 1500 },
    { id: 2, name: '사용자2', solvedProblems: 110, score: 1450 },
    { id: 3, name: '사용자3', solvedProblems: 100, score: 1400 },
  ]);

  return (
    <div>
      <Typography variant="h4" gutterBottom>랭킹</Typography>
      <Paper sx={{ mb: 2 }}>
        <Tabs value={tab} onChange={(_, newValue) => setTab(newValue)}>
          <Tab label="전체 기간" />
          <Tab label="주간" />
          <Tab label="월간" />
        </Tabs>
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>순위</TableCell>
              <TableCell>이름</TableCell>
              <TableCell align="right">해결한 문제 수</TableCell>
              <TableCell align="right">점수</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell align="right">{user.solvedProblems}</TableCell>
                <TableCell align="right">{user.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default RankingSystem;