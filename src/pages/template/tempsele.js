import React,{ useState } from 'react';
import {Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export function TemplateSelection() {
  const templates = ['Template 1', 'Template 2', 'Template 3']; // Example template names
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    navigate(`/templates/${template.toLowerCase().replace(' ', '')}`);
  };
  
  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {templates.map((template, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">{template}</Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleSelectTemplate(template)}>
              Select
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
