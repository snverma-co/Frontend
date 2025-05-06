import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, TextField, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4B0082',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#3a006c'
  },
  '&.reset': {
    backgroundColor: '#dc3545',
    '&:hover': {
      backgroundColor: '#c82333'
    }
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px',
  fontSize: '0.9rem',
  '&.MuiTableCell-head': {
    backgroundColor: '#4B0082',
    color: '#fff',
    fontWeight: 600
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0'
    },
    '&:hover fieldset': {
      borderColor: '#4B0082'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4B0082'
    }
  }
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e0e0e0'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4B0082'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#4B0082'
  }
}));

const GSTCalculator = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      type: 'Inter State Sale',
      rate: '0.25',
      amount: '',
      totalTax: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cessRate: '',
      cess: 0
    }
  ]);

  const [totals, setTotals] = useState({
    amount: 0,
    tax: 0,
    igst: 0,
    cgst: 0,
    sgst: 0,
    cess: 0
  });

  const taxRates = ['0.25', '3', '5', '12', '18', '28'];

  const calculateTax = (row) => {
    const amount = parseFloat(row.amount) || 0;
    const rate = parseFloat(row.rate) || 0;
    const cessRate = parseFloat(row.cessRate) || 0;

    const totalTax = (amount * rate) / 100;
    const cess = (amount * cessRate) / 100;

    if (row.type === 'Inter State Sale') {
      return {
        ...row,
        totalTax,
        igst: totalTax,
        cgst: 0,
        sgst: 0,
        cess
      };
    } else {
      return {
        ...row,
        totalTax,
        igst: 0,
        cgst: totalTax / 2,
        sgst: totalTax / 2,
        cess
      };
    }
  };

  const handleChange = (id, field, value) => {
    setRows(prevRows =>
      prevRows.map(row =>
        row.id === id
          ? calculateTax({ ...row, [field]: value })
          : row
      )
    );
  };

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      type: 'Inter State Sale',
      rate: '0.25',
      amount: '',
      totalTax: 0,
      igst: 0,
      cgst: 0,
      sgst: 0,
      cessRate: '',
      cess: 0
    };
    setRows([...rows, newRow]);
  };

  const resetCalculator = () => {
    setRows([
      {
        id: 1,
        type: 'Inter State Sale',
        rate: '0.25',
        amount: '',
        totalTax: 0,
        igst: 0,
        cgst: 0,
        sgst: 0,
        cessRate: '',
        cess: 0
      }
    ]);
  };

  useEffect(() => {
    const newTotals = rows.reduce(
      (acc, row) => ({
        amount: acc.amount + (parseFloat(row.amount) || 0),
        tax: acc.tax + row.totalTax,
        igst: acc.igst + row.igst,
        cgst: acc.cgst + row.cgst,
        sgst: acc.sgst + row.sgst,
        cess: acc.cess + row.cess
      }),
      { amount: 0, tax: 0, igst: 0, cgst: 0, sgst: 0, cess: 0 }
    );
    setTotals(newTotals);
  }, [rows]);

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#4B0082',
            mb: 4,
            fontFamily: '"Playfair Display", serif'
          }}
        >
          GST Calculator
        </Typography>

        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Type Of Sale</StyledTableCell>
                  <StyledTableCell>Rate of Tax</StyledTableCell>
                  <StyledTableCell>Taxable Amount</StyledTableCell>
                  <StyledTableCell>Total Tax Amount</StyledTableCell>
                  <StyledTableCell>IGST</StyledTableCell>
                  <StyledTableCell>CGST</StyledTableCell>
                  <StyledTableCell>SGST</StyledTableCell>
                  <StyledTableCell>Rate of Cess</StyledTableCell>
                  <StyledTableCell>CESS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <StyledSelect
                        fullWidth
                        value={row.type}
                        onChange={(e) => handleChange(row.id, 'type', e.target.value)}
                        size="small"
                      >
                        <MenuItem value="Inter State Sale">Inter State Sale</MenuItem>
                        <MenuItem value="Intra State Sale">Intra State Sale</MenuItem>
                      </StyledSelect>
                    </TableCell>
                    <TableCell>
                      <StyledSelect
                        fullWidth
                        value={row.rate}
                        onChange={(e) => handleChange(row.id, 'rate', e.target.value)}
                        size="small"
                      >
                        {taxRates.map((rate) => (
                          <MenuItem key={rate} value={rate}>
                            {rate}%
                          </MenuItem>
                        ))}
                      </StyledSelect>
                    </TableCell>
                    <TableCell>
                      <StyledTextField
                        fullWidth
                        type="number"
                        value={row.amount}
                        onChange={(e) => handleChange(row.id, 'amount', e.target.value)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{row.totalTax.toFixed(2)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.igst.toFixed(2)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.cgst.toFixed(2)}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{row.sgst.toFixed(2)}</Typography>
                    </TableCell>
                    <TableCell>
                      <StyledTextField
                        fullWidth
                        type="number"
                        value={row.cessRate}
                        onChange={(e) => handleChange(row.id, 'cessRate', e.target.value)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{row.cess.toFixed(2)}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2} align="right">
                    <Typography variant="subtitle1" fontWeight="bold">
                      Total:
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.amount.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.tax.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.igst.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.cgst.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.sgst.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell />
                  <TableCell>
                    <Typography fontWeight="bold">
                      {totals.cess.toFixed(2)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <StyledButton variant="contained" onClick={addRow}>
              Add Row
            </StyledButton>
            <StyledButton variant="contained" className="reset" onClick={resetCalculator}>
              Reset
            </StyledButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default GSTCalculator;