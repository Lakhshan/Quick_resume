import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import temp1img from "../../imgs/temp1.png"
import soon from "../../imgs/comingsoon.jpg"

export function TemplateSelection() {
  const templates = [
    {
      name: 'Template 1',
      image: temp1img,
    },
    {
      name: 'Template 2',
      image: soon,
    },
    {
      name: 'Template 3',
      image: soon,
    },
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template.name);
    navigate(`/templates/${template.name.toLowerCase().replace(' ', '')}`);
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
            <img
              src={template.image}
              alt={template.name}
              style={{ width: '100%', height: 'auto', marginBottom: 16 }}
            />
            <Typography variant="h6">{template.name}</Typography>
            <Button variant="contained" sx={{ mt: 2 }} onClick={() => handleSelectTemplate(template)}>
              Select
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
