import React from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, Chip, IconButton } from '@mui/material';
import { Assignment, Article, DateRange, PriorityHigh } from '@mui/icons-material';

const Dashboard: React.FC = () => {
  const assignments = [
    { id: 1, title: '알고리즘 과제 1', dueDate: '2023-06-10', completed: false, priority: 'high' },
    { id: 2, title: '데이터 구조 과제', dueDate: '2023-06-15', completed: true, priority: 'medium' },
    { id: 3, title: '프로그래밍 과제', dueDate: '2023-06-20', completed: false, priority: 'low' },
  ];

  const recentPosts = [
    { id: 1, title: '질문: 정렬 알고리즘 최적화', author: '사용자1', date: '2023-06-01', type: 'question' },
    { id: 2, title: '공지: 다음 주 대회 안내', author: '관리자', date: '2023-05-30', type: 'notice' },
    { id: 3, title: '자료: 그래프 알고리즘 정리', author: '사용자2', date: '2023-05-29', type: 'material' },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            <Assignment /> 과제 현황
          </Typography>
          <List>
            {assignments.map((assignment) => (
              <ListItem key={assignment.id} secondaryAction={
                <IconButton edge="end" aria-label="priority">
                  <PriorityHigh color={assignment.priority === 'high' ? 'error' : 'action'} />
                </IconButton>
              }>
                <ListItemText 
                  primary={assignment.title}
                  secondary={
                    <>
                      <DateRange fontSize="small" /> {assignment.dueDate}
                      <Chip 
                        size="small" 
                        label={assignment.completed ? "완료" : "미완료"} 
                        color={assignment.completed ? "success" : "default"}
                        sx={{ ml: 1 }}
                      />
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            <Article /> 최근 업로드된 게시글
          </Typography>
          <List>
            {recentPosts.map((post) => (
              <ListItem key={post.id} component="a" href={`/post/${post.id}`}>
                <ListItemText 
                  primary={post.title}
                  secondary={`${post.author} - ${post.date}`}
                />
                <Chip 
                  size="small" 
                  label={post.type} 
                  color={post.type === 'question' ? 'primary' : post.type === 'notice' ? 'secondary' : 'default'}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;