"use client";

import NavBar from '../navbar';

import { Box, Container, Typography, Button, IconButton, TextField } from '@mui/material';
import { LinkedIn, Email, Twitter } from '@mui/icons-material';
import React from 'react';

const Contact = () => {
  return (
    <div>
    <NavBar />
    <Container
      maxWidth="sm"
      sx={{
        textAlign: 'center',
        paddingTop: '50px',
        backgroundColor: '#f5f5f5',
        borderRadius: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        padding: '50px',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#333',
        }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginBottom: '30px',
          color: '#777',
        }}
      >
        Using XR to watch Formula 1 can help you have a better interactive and immersive experience. Reach out to us to learn more!
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <IconButton
          aria-label="X"
          sx={{
            backgroundColor: '#1DA1F2',
            color: '#fff',
            '&:hover': { backgroundColor: '#1A91DA' },
          }}
        >
          <Twitter />
        </IconButton>

        <IconButton
          aria-label="LinkedIn"
          sx={{
            backgroundColor: '#0072b1',
            color: '#fff',
            '&:hover': { backgroundColor: '#005b8e' },
          }}
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          aria-label="Email"
          sx={{
            backgroundColor: '#d44638',
            color: '#fff',
            '&:hover': { backgroundColor: '#b34030' },
          }}
        >
          <Email />
        </IconButton>
      </Box>

      <form>
        <TextField
          label="Your Name"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
        <TextField
          label="Your Email"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          type="email"
        />
        <TextField
          label="Your Message"
          fullWidth
          margin="normal"
          variant="outlined"
          required
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: '20px',
            backgroundColor: '#ff5733',
            '&:hover': { backgroundColor: '#e04d27' },
          }}
        >
          Send Message
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default Contact;
