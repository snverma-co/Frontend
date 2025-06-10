import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContext';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: '0 auto',
  marginTop: theme.spacing(8),
  borderRadius: '10px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, authError } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container>
      <StyledPaper elevation={3}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#4CAF50', fontWeight: 600 }}>
          Restricted Access
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mb: 3, textAlign: 'center' }}>
          Please enter your credentials to access the videos
        </Typography>
        
        {authError && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{authError}</Alert>}
        
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 3, 
              mb: 2, 
              bgcolor: '#8BC34A',
              '&:hover': {
                bgcolor: '#689F38'
              }
            }}
          >
            Sign In
          </Button>
        </Box>
      </StyledPaper>
    </Container>
  );
};

export default LoginPage;