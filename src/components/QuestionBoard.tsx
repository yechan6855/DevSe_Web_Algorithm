import React, { useState } from 'react';
import { Typography, Paper, TextField, Button, List, ListItem, ListItemText, Chip } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuestionBoard: React.FC = () => {
  const [questions, setQuestions] = useState([
    { id: 1, title: '정렬 알고리즘 최적화 질문', author: '사용자1', content: '퀵소트와 머지소트 중 어떤 것이 더 효율적인가요?', code: 'def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)', language: 'python' },
  ]);
  const [newQuestion, setNewQuestion] = useState({ title: '', content: '', code: '', language: 'python' });

  const handleAddQuestion = () => {
    setQuestions([...questions, { ...newQuestion, id: questions.length + 1, author: '현재 사용자' }]);
    setNewQuestion({ title: '', content: '', code: '', language: 'python' });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>질문 게시판</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>새 질문 작성</Typography>
        <TextField
          fullWidth
          label="제목"
          value={newQuestion.title}
          onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="내용"
          multiline
          rows={4}
          value={newQuestion.content}
          onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="코드"
          multiline
          rows={6}
          value={newQuestion.code}
          onChange={(e) => setNewQuestion({ ...newQuestion, code: e.target.value })}
          margin="normal"
        />
        <Button variant="contained" onClick={handleAddQuestion} sx={{ mt: 2 }}>질문 등록</Button>
      </Paper>
      <List>
        {questions.map(question => (
          <ListItem key={question.id} alignItems="flex-start">
            <ListItemText
              primary={question.title}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="text.primary">
                    {question.author}
                  </Typography>
                  {" — " + question.content}
                  <SyntaxHighlighter language={question.language} style={darcula}>
                    {question.code}
                  </SyntaxHighlighter>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default QuestionBoard;