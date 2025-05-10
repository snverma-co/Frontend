import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: 1,
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4)
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '12px 32px',
  borderRadius: '25px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#45a049'
  }
}));

const TaxCalculator = () => {
  const [formData, setFormData] = useState({
    income: '',
    age: '0-60',
    regime: 'old',
    deductions: {
      section80C: '',
      section80D: '',
      hra: '',
      lta: '',
      nps: '',
      standardDeduction: 50000
    }
  });

  const [taxBreakdown, setTaxBreakdown] = useState(null);

  const calculateTax = () => {
    let taxableIncome = Number(formData.income);
    let tax = 0;

    // Deductions
    const totalDeductions = Math.min(150000, Number(formData.deductions.section80C)) +
      Math.min(25000, Number(formData.deductions.section80D)) +
      Number(formData.deductions.hra) +
      Math.min(50000, Number(formData.deductions.nps)) +
      formData.deductions.standardDeduction;

    taxableIncome -= totalDeductions;

    if (formData.regime === 'old') {
      // Old Regime Tax Calculation
      if (taxableIncome > 1000000) {
        tax += (taxableIncome - 1000000) * 0.3;
        taxableIncome = 1000000;
      }
      if (taxableIncome > 500000) {
        tax += (Math.min(taxableIncome, 1000000) - 500000) * 0.2;
        taxableIncome = 500000;
      }
      if (taxableIncome > 250000) {
        tax += (Math.min(taxableIncome, 500000) - 250000) * 0.05;
      }
    } else {
      // New Regime Tax Calculation
      if (taxableIncome > 1500000) {
        tax += (taxableIncome - 1500000) * 0.3;
        taxableIncome = 1500000;
      }
      if (taxableIncome > 1250000) {
        tax += (Math.min(taxableIncome, 1500000) - 1250000) * 0.25;
        taxableIncome = 1250000;
      }
      if (taxableIncome > 1000000) {
        tax += (Math.min(taxableIncome, 1250000) - 1000000) * 0.2;
        taxableIncome = 1000000;
      }
      if (taxableIncome > 750000) {
        tax += (Math.min(taxableIncome, 1000000) - 750000) * 0.15;
        taxableIncome = 750000;
      }
      if (taxableIncome > 500000) {
        tax += (Math.min(taxableIncome, 750000) - 500000) * 0.1;
        taxableIncome = 500000;
      }
      if (taxableIncome > 300000) {
        tax += (Math.min(taxableIncome, 500000) - 300000) * 0.05;
      }
    }

    // Calculate cess
    const cess = tax * 0.04;

    setTaxBreakdown({
      totalTax: tax + cess,
      cess: cess,
      taxBeforeCess: tax,
      totalDeductions: totalDeductions
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" sx={{
        textAlign: 'center',
        mb: 4,
        fontWeight: 'bold',
        color: '#333',
        fontFamily: '"Playfair Display", serif'
      }}>
        Income Tax Calculator
      </Typography>
      
      <StyledPaper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Annual Income"
              name="income"
              type="number"
              value={formData.income}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Age Group</InputLabel>
              <Select
                name="age"
                value={formData.age}
                onChange={handleChange}
                label="Age Group"
              >
                <MenuItem value="0-60">Below 60 years</MenuItem>
                <MenuItem value="60-80">60-80 years</MenuItem>
                <MenuItem value="80+">Above 80 years</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Tax Regime</InputLabel>
              <Select
                name="regime"
                value={formData.regime}
                onChange={handleChange}
                label="Tax Regime"
              >
                <MenuItem value="old">Old Regime</MenuItem>
                <MenuItem value="new">New Regime</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {formData.regime === 'old' && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Section 80C Deductions"
                  name="deductions.section80C"
                  type="number"
                  value={formData.deductions.section80C}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Max: ₹1,50,000"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Section 80D (Health Insurance)"
                  name="deductions.section80D"
                  type="number"
                  value={formData.deductions.section80D}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Max: ₹25,000"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="HRA Exemption"
                  name="deductions.hra"
                  type="number"
                  value={formData.deductions.hra}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="NPS Contribution"
                  name="deductions.nps"
                  type="number"
                  value={formData.deductions.nps}
                  onChange={handleChange}
                  variant="outlined"
                  helperText="Max: ₹50,000"
                />
              </Grid>
            </>
          )}

          <Grid item xs={12}>
            <StyledButton
              fullWidth
              variant="contained"
              onClick={calculateTax}
            >
              Calculate Tax
            </StyledButton>
          </Grid>
        </Grid>

        {taxBreakdown && (
          <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>Tax Breakdown</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography>Total Deductions: ₹{taxBreakdown.totalDeductions.toLocaleString()}</Typography>
                <Typography>Tax (Before Cess): ₹{taxBreakdown.taxBeforeCess.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Health & Education Cess: ₹{taxBreakdown.cess.toLocaleString()}</Typography>
                <Typography variant="h6" sx={{ color: '#4CAF50', mt: 1 }}>
                  Total Tax Liability: ₹{taxBreakdown.totalTax.toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </StyledPaper>
    </Container>
  );
};

export default TaxCalculator;