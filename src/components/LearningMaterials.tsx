import React, { useState } from 'react';
import { Typography, Paper, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, GetApp } from '@mui/icons-material';

const LearningMaterials: React.FC = () => {
  const [materials, setMaterials] = useState([
    { id: 1, title: '알고리즘 기초', type: 'PDF', size: '2.5MB' },
    { id: 2, title: '자료구조 정리', type: 'Markdown', size: '500KB' },
  ]);
  const [newMaterial, setNewMaterial] = useState({ title: '', content: '' });

  const handleAddMaterial = () => {
    setMaterials([...materials, { ...newMaterial, id: materials.length + 1, type: 'Markdown', size: '1KB' }]);
    setNewMaterial({ title: '', content: '' });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>학습 자료실</Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>새 자료 업로드</Typography>
        <TextField
          fullWidth
          label="제목"
          value={newMaterial.title}
          onChange={(e) => setNewMaterial({ ...newMaterial, title: e.target.value })}
          margin="normal"
        />
        <TextField
          fullWidth
          label="내용 (Markdown)"
          multiline
          rows={6}
          value={newMaterial.content}
          onChange={(e) => setNewMaterial({ ...newMaterial, content: e.target.value })}
          margin="normal"
        />
        <Button variant="contained" component="label" sx={{ mr: 2 }}>
          PDF 업로드
          <input type="file" hidden accept=".pdf" />
        </Button>
        <Button variant="contained" onClick={handleAddMaterial}>자료 등록</Button>
      </Paper>
      <List>
        {materials.map(material => (
          <ListItem
            key={material.id}
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="download">
                  <GetApp />
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
              </>
            }
          >
            <ListItemText
              primary={material.title}
              secondary={`${material.type} - ${material.size}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default LearningMaterials;