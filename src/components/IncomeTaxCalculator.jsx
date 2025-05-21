import { useState } from 'react';
import { Box, Container, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Grid, Button, RadioGroup, FormControlLabel, Radio, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import PrintIcon from '@mui/icons-material/Print';

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

const IncomeTaxCalculator = () => {
  const { translations } = useLanguage();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    assesseeName: '',
    status: 'Individual',
    gender: 'Male',
    seniorCitizen: 'Not Senior Citizen',
    financialYear: '2025-2026',
    regime: 'old',
    salary: 0,
    housePropertyIncome: 0,
    businessIncome: 0,
    shortTermCapitalGains: 0,
    longTermCapitalGains: 0,
    otherIncome: 0,
    agriculturalIncome: 0,
    lotteryIncome: 0,
    deduction80C: 0,
    deduction80D: 0,
    deduction80TTA: 0,
    otherDeductions: 0,
    tds: 0,
    advanceTax: 0,
    selfAssessmentTax: 0
  });

  const [taxDetails, setTaxDetails] = useState({
    totalIncome: 0,
    totalDeductions: 0,
    taxableIncome: 0,
    taxAmount: 0,
    surcharge: 0,
    educationCess: 0,
    totalTaxLiability: 0,
    taxesPaid: 0,
    taxPayable: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== 'assesseeName' && value < 0) {
      setError('Values cannot be negative');
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: name === 'assesseeName' ? value : Number(value)
    }));
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Tax Calculation Summary</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .details { margin-bottom: 20px; }
            .summary { border-top: 2px solid #000; padding-top: 20px; }
            .row { display: flex; justify-content: space-between; margin: 10px 0; }
            .highlight { font-weight: bold; color: #1976d2; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Income Tax Calculation Summary</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
          <div class="details">
            <h2>Assessee Details</h2>
            <div class="row">
              <span>Name:</span>
              <span>${formData.assesseeName || 'Not Specified'}</span>
            </div>
            <div class="row">
              <span>Status:</span>
              <span>${formData.status}</span>
            </div>
            <div class="row">
              <span>Financial Year:</span>
              <span>${formData.financialYear}</span>
            </div>
            <div class="row">
              <span>Tax Regime:</span>
              <span>${formData.regime === 'old' ? 'Old Regime' : 'New Regime'}</span>
            </div>
          </div>
          <div class="summary">
            <h2>Tax Calculation Summary</h2>
            <div class="row">
              <span>Total Income:</span>
              <span>₹${taxDetails.totalIncome.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Total Deductions:</span>
              <span>₹${taxDetails.totalDeductions.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Taxable Income:</span>
              <span>₹${taxDetails.taxableIncome.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Income Tax:</span>
              <span>₹${taxDetails.taxAmount.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Surcharge:</span>
              <span>₹${taxDetails.surcharge.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Education Cess:</span>
              <span>₹${taxDetails.educationCess.toLocaleString()}</span>
            </div>
            <div class="row highlight">
              <span>Total Tax Liability:</span>
              <span>₹${taxDetails.totalTaxLiability.toLocaleString()}</span>
            </div>
            <div class="row">
              <span>Taxes Paid:</span>
              <span>₹${taxDetails.taxesPaid.toLocaleString()}</span>
            </div>
            <div class="row highlight">
              <span>Tax Payable:</span>
              <span>₹${taxDetails.taxPayable.toLocaleString()}</span>
            </div>
          </div>
          <script>window.onload = () => { window.print(); window.close(); };</script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const calculateTax = () => {
    // Calculate total income excluding special incomes
    const regularIncome = formData.salary + 
                         formData.housePropertyIncome + 
                         formData.businessIncome + 
                         formData.otherIncome;

    // Special category incomes
    const stcg = formData.shortTermCapitalGains;
    const ltcg = formData.longTermCapitalGains;
    const lotteryIncome = formData.lotteryIncome;

    // Calculate total deductions (limited to regular income)
    let totalDeductions = 0;
    if (formData.regime === 'old') {
      // In old regime, maximum deduction limits apply
      const deduction80C = Math.min(formData.deduction80C, 150000);
      const deduction80D = Math.min(formData.deduction80D, 50000);
      const deduction80TTA = Math.min(formData.deduction80TTA, 10000);
      totalDeductions = deduction80C + deduction80D + deduction80TTA + formData.otherDeductions;
    }

    // Calculate taxable regular income
    const taxableIncome = Math.max(0, regularIncome - totalDeductions);

    // Calculate tax on regular income based on regime
    let regularTax = 0;
    if (formData.regime === 'old') {
      // Old regime tax slabs
      if (taxableIncome <= 300000) {
        regularTax = 0;
      } else if (taxableIncome <= 600000) {
        regularTax = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 900000) {
        regularTax = 15000 + (taxableIncome - 600000) * 0.10;
      } else if (taxableIncome <= 1200000) {
        regularTax = 45000 + (taxableIncome - 900000) * 0.15;
      } else if (taxableIncome <= 1500000) {
        regularTax = 90000 + (taxableIncome - 1200000) * 0.20;
      } else {
        regularTax = 150000 + (taxableIncome - 1500000) * 0.30;
      }
      // Rebate under section 87A
      if (taxableIncome <= 700000) {
        regularTax = Math.max(0, regularTax - 25000);
      }
    } else {
      // New regime tax slabs (FY 2024-25)
      if (taxableIncome <= 300000) {
        regularTax = 0;
      } else if (taxableIncome <= 600000) {
        regularTax = (taxableIncome - 300000) * 0.05;
      } else if (taxableIncome <= 900000) {
        regularTax = 15000 + (taxableIncome - 600000) * 0.10;
      } else if (taxableIncome <= 1200000) {
        regularTax = 45000 + (taxableIncome - 900000) * 0.15;
      } else if (taxableIncome <= 1500000) {
        regularTax = 90000 + (taxableIncome - 1200000) * 0.20;
      } else {
        regularTax = 150000 + (taxableIncome - 1500000) * 0.30;
      }
      // Rebate under section 87A
      if (taxableIncome <= 700000) {
        regularTax = Math.max(0, regularTax - 25000);
      }
    }

    // Calculate tax on special incomes
    const stcgTax = stcg * 0.15; // 15% on STCG
    const ltcgTax = ltcg * 0.10; // 10% on LTCG above 1L (simplified)
    const lotteryTax = lotteryIncome * 0.30; // 30% flat rate

    // Total tax before cess
    const taxAmount = regularTax + stcgTax + ltcgTax + lotteryTax;

    // Calculate surcharge based on total income
    let surcharge = 0;
    const totalIncome = taxableIncome + stcg + ltcg + lotteryIncome;

    if (totalIncome > 5000000 && totalIncome <= 10000000) {
      surcharge = taxAmount * 0.10;
      // Marginal relief for surcharge
      const excess = totalIncome - 5000000;
      if (surcharge > excess) {
        surcharge = excess;
      }
    } else if (totalIncome > 10000000 && totalIncome <= 20000000) {
      surcharge = taxAmount * 0.15;
      // Marginal relief for surcharge
      const excess = totalIncome - 10000000;
      if (surcharge > excess) {
        surcharge = excess;
      }
    } else if (totalIncome > 20000000 && totalIncome <= 50000000) {
      surcharge = taxAmount * 0.25;
    } else if (totalIncome > 50000000) {
      surcharge = taxAmount * 0.37;
    }

    // Calculate health and education cess
    const educationCess = (taxAmount + surcharge) * 0.04;

    // Calculate total tax liability
    const totalTaxLiability = taxAmount + surcharge + educationCess;

    // Calculate taxes already paid
    const taxesPaid = formData.tds + formData.advanceTax + formData.selfAssessmentTax;
    
    // Calculate final tax payable
    const taxPayable = Math.max(0, totalTaxLiability - taxesPaid);

    setTaxDetails({
      totalIncome,
      totalDeductions,
      taxableIncome,
      taxAmount,
      surcharge,
      educationCess,
      totalTaxLiability,
      taxesPaid,
      taxPayable
    });
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f5' }}>
      <StyledContainer maxWidth="md">
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
          Income Tax Calculator
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Personal Details</Typography>
            <StyledTextField
              fullWidth
              label="Assessee Name"
              name="assesseeName"
              value={formData.assesseeName}
              onChange={handleInputChange}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                label="Status"
              >
                <MenuItem value="Individual">Individual</MenuItem>
                <MenuItem value="HUF">HUF</MenuItem>
                <MenuItem value="Company">Company</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Financial Year</InputLabel>
              <Select
                name="financialYear"
                value={formData.financialYear}
                onChange={handleInputChange}
                label="Financial Year"
              >
                <MenuItem value="2025-2026">2025-2026</MenuItem>
                <MenuItem value="2024-2025">2024-2025</MenuItem>
                <MenuItem value="2023-2024">2023-2024</MenuItem>
              </Select>
            </FormControl>

            <FormControl component="fieldset" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" gutterBottom>Tax Regime</Typography>
              <RadioGroup
                name="regime"
                value={formData.regime}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel value="old" control={<Radio />} label="Old Regime" />
                <FormControlLabel value="new" control={<Radio />} label="New Regime" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Income Details</Typography>
            <StyledTextField
              fullWidth
              type="number"
              label="Salary Income"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="Income from House Property"
              name="housePropertyIncome"
              value={formData.housePropertyIncome}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="Business Income"
              name="businessIncome"
              value={formData.businessIncome}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Deductions</Typography>
            <StyledTextField
              fullWidth
              type="number"
              label="80C Deduction"
              name="deduction80C"
              value={formData.deduction80C}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="80D Deduction"
              name="deduction80D"
              value={formData.deduction80D}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="80TTA Deduction"
              name="deduction80TTA"
              value={formData.deduction80TTA}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Tax Payments</Typography>
            <StyledTextField
              fullWidth
              type="number"
              label="TDS"
              name="tds"
              value={formData.tds}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="Advance Tax"
              name="advanceTax"
              value={formData.advanceTax}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              type="number"
              label="Self Assessment Tax"
              name="selfAssessmentTax"
              value={formData.selfAssessmentTax}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
          <StyledButton variant="contained" onClick={calculateTax}>
            Calculate Tax
          </StyledButton>
          {taxDetails.totalTaxLiability > 0 && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<PrintIcon />}
              onClick={handlePrint}
              sx={{
                marginTop: 2,
                padding: '10px 30px',
                backgroundColor: '#2196F3',
                '&:hover': {
                  backgroundColor: '#1976D2'
                }
              }}
            >
              Print Summary
            </Button>
          )}
        </Box>

        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>

        {taxDetails.totalTaxLiability > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>Tax Calculation Summary</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography>Total Income: ₹{taxDetails.totalIncome.toLocaleString()}</Typography>
                <Typography>Total Deductions: ₹{taxDetails.totalDeductions.toLocaleString()}</Typography>
                <Typography>Taxable Income: ₹{taxDetails.taxableIncome.toLocaleString()}</Typography>
                <Typography>Income Tax: ₹{taxDetails.taxAmount.toLocaleString()}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography>Surcharge: ₹{taxDetails.surcharge.toLocaleString()}</Typography>
                <Typography>Education Cess: ₹{taxDetails.educationCess.toLocaleString()}</Typography>
                <Typography>Total Tax Liability: ₹{taxDetails.totalTaxLiability.toLocaleString()}</Typography>
                <Typography>Taxes Paid: ₹{taxDetails.taxesPaid.toLocaleString()}</Typography>
                <Typography variant="h6" sx={{ color: taxDetails.taxPayable > 0 ? 'error.main' : 'success.main' }}>
                  {taxDetails.taxPayable > 0 
                    ? `Tax Payable: ₹${taxDetails.taxPayable.toLocaleString()}`
                    : 'No Additional Tax Payable'}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </StyledContainer>
    </Box>
  );
};

export default IncomeTaxCalculator;