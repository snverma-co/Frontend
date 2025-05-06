import { useState } from 'react';
import { Box, Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4)
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '10px 30px',
  backgroundColor: '#4CAF50',
  '&:hover': {
    backgroundColor: '#45a049'
  }
}));

const TDSCalculator = () => {
  const [formData, setFormData] = useState({
    section: '',
    panAvailable: 'yes',
    amount: 0,
    tdsRate: 0
  });

  const [result, setResult] = useState({
    tdsAmount: 0,
    surcharge: 0,
    educationCess: 0,
    totalTDS: 0
  });

  const sections = [
    { value: '194A', label: '194A - Interest other than interest on securities', rate: 10 },
    { value: '194B', label: '194B - Lottery/Crossword Puzzle', rate: 30 },
    { value: '194C', label: '194C - Contract', rate: 2 },
    { value: '194H', label: '194H - Commission/Brokerage', rate: 5 },
    { value: '194I', label: '194I - Rent', rate: 10 },
    { value: '194J', label: '194J - Professional Fees/Technical Services', rate: 10 },
    { value: '194LA', label: '194LA - Compensation on acquisition of immovable property', rate: 10 },
    { value: '194IB', label: '194IB - Rent by Individual/HUF', rate: 5 },
    { value: '194O', label: '194O - E-commerce participants', rate: 1 }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) : value,
      tdsRate: name === 'section' ? sections.find(s => s.value === value)?.rate || 0 : prev.tdsRate
    }));
  };

  const calculateTDS = () => {
    const amount = Number(formData.amount);
    const baseRate = formData.panAvailable === 'yes' ? formData.tdsRate : formData.tdsRate * 2;
    let tdsAmount = (amount * baseRate) / 100;

    // Calculate surcharge (if applicable)
    let surcharge = 0;
    if (amount > 5000000 && amount <= 10000000) {
      surcharge = tdsAmount * 0.10;
    } else if (amount > 10000000) {
      surcharge = tdsAmount * 0.15;
    }

    // Calculate education cess
    const educationCess = (tdsAmount + surcharge) * 0.04;

    // Calculate total TDS
    const totalTDS = tdsAmount + surcharge + educationCess;

    setResult({
      tdsAmount: parseFloat(tdsAmount.toFixed(2)),
      surcharge: parseFloat(surcharge.toFixed(2)),
      educationCess: parseFloat(educationCess.toFixed(2)),
      totalTDS: parseFloat(totalTDS.toFixed(2))
    });
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <StyledContainer maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          TDS Calculator
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>TDS Section</InputLabel>
              <Select
                name="section"
                value={formData.section}
                onChange={handleInputChange}
                label="TDS Section"
              >
                {sections.map((section) => (
                  <MenuItem key={section.value} value={section.value}>
                    {section.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>PAN Available</InputLabel>
              <Select
                name="panAvailable"
                value={formData.panAvailable}
                onChange={handleInputChange}
                label="PAN Available"
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>

            <StyledTextField
              fullWidth
              type="number"
              label="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
            />

            <Box sx={{ textAlign: 'center' }}>
              <StyledButton variant="contained" onClick={calculateTDS}>
                Calculate TDS
              </StyledButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {result.totalTDS > 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>TDS Calculation Summary</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>TDS Rate: {formData.panAvailable === 'yes' ? formData.tdsRate : formData.tdsRate * 2}%</Typography>
                    <Typography>TDS Amount: ₹{result.tdsAmount.toLocaleString()}</Typography>
                    <Typography>Surcharge: ₹{result.surcharge.toLocaleString()}</Typography>
                    <Typography>Education Cess: ₹{result.educationCess.toLocaleString()}</Typography>
                    <Typography variant="h6" sx={{ color: 'primary.main', mt: 2 }}>
                      Total TDS: ₹{result.totalTDS.toLocaleString()}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Grid>
        </Grid>
      </StyledContainer>
    </Box>
  );
};

export default TDSCalculator;