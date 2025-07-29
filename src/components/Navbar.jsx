import { AppBar, Toolbar, Typography, Button, Box, Container, Menu, MenuItem as MuiMenuItem, IconButton, Select, FormControl, Stack, Popper, Paper, Grow, ClickAwayListener, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../translations/translations';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#fff',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  borderBottom: '1px solid #eee'
}));

const StyledButton = styled(Button)(({ theme, isactive }) => ({
  color: isactive ? '#8BC34A' : '#333',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  margin: '0 4px',
  position: 'relative',
  padding: '6px 12px',
  borderRadius: '4px',
  fontWeight: 500,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: isactive ? '90%' : 0,
    height: '2px',
    backgroundColor: '#8BC34A',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
    opacity: isactive ? 1 : 0
  },
  '&:hover': {
    color: '#8BC34A',
    backgroundColor: 'rgba(139, 195, 74, 0.08)',
    '&::after': {
      width: '90%',
      opacity: 1
    }
  },
  '&:active': {
    transform: 'scale(0.98)'
  }
}));

const MenuPopper = styled(Popper)(({ theme }) => ({
  zIndex: 1300,
  position: 'fixed',
  '& .MuiPaper-root': {
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    borderRadius: '8px',
    overflow: 'hidden',
    width: 'auto',
    minWidth: '200px',
    maxWidth: '90vw',
    marginTop: '4px',
    border: '1px solid rgba(0,0,0,0.06)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  }
}));

const MenuItem = styled(MuiMenuItem)(({ theme, issubmenu }) => ({
  padding: issubmenu ? '6px 12px 6px 26px' : '10px 16px',
  color: '#2e2e2e',
  fontSize: issubmenu ? '0.78rem' : '0.85rem',
  transition: 'all 0.2s ease',
  borderLeft: '2px solid transparent',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: 1.4,
  position: 'relative',
  backgroundColor: 'transparent',
  '&:before': issubmenu ? {
    content: '"•"',
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#8BC34A',
    fontSize: '0.7rem'
  } : {},
  '&:hover': {
    color: '#689f38',
    borderLeft: '2px solid #8BC34A',
    paddingLeft: issubmenu ? '30px' : '20px',
    backgroundColor: 'rgba(139, 195, 74, 0.08)'
  },
  '&.category': {
    fontWeight: 600,
    fontSize: '0.87rem',
    letterSpacing: '0.3px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#f8f8f8',
    padding: '10px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    color: '#333'
  }
}));


const SubmenuContainer = styled(Box)(({ isvisible }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: isvisible ? '600px' : '0',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  opacity: isvisible ? 1 : 0,
  visibility: isvisible ? 'visible' : 'hidden',
  padding: isvisible ? '4px 0 4px 0' : '0',
  marginLeft: '6px', // subtle indentation for submenus
  borderLeft: isvisible ? '1px dashed #ddd' : 'none',
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage, translations } = useLanguage();
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [knowledgeAnchorEl, setKnowledgeAnchorEl] = useState(null);
  const [companyAnchorEl, setCompanyAnchorEl] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  const servicesOpen = Boolean(servicesAnchorEl);
  const knowledgeOpen = Boolean(knowledgeAnchorEl);
  const companyOpen = Boolean(companyAnchorEl);

  const menuItems = [
    'HOME',
    {
      name: 'COMPANY',
      items: [
        {
          name: 'Founder',
          onClick: () => {
            navigate('/company');
            window.scrollTo(0, 0);
          }
        },
        {
          name: 'Our Team',
          onClick: () => {
            navigate('/team');
            window.scrollTo(0, 0);
          }
        }
      ]
    },
    {
      name: 'SERVICES',
      items: [
        {
          name: 'Audit & Assurance', items: [
            'Statutory Assurance',
            'Statutory Audits',
            'Transfer Pricing Audits',
            'Tax Audits',
            'VAT Audits',
            'Management Assurance',
            'Internal Audits',
            'Internal Controls and Compliance Audits',
            'Systems Audits',
            'Socio Assurance',
            'Social Audits',
            'Special Audits & Assessments'
          ]
        },
        {
          name: 'Taxation', items: [
            ' Cross Border Taxation',
            'Double Tax Avoidance Advisory',
            'Transfer Pricing',
            'Taxation Litigation Services',
            'Corporate Taxation Advisory',
            'Direct Taxation Advisory',
            'Indirect Taxation Advisory',
            'VAT/ GST',
            'Service Tax',
            'Strategic Business Decisions',
            'Succession Planning',
            'Tax Review (Due Diligence)'
          ]
        },
        {
          name: 'Regulatory Advisory', items: [
            'Corporate Law',
            'Limited Liability Partnership Law',
            'Foreign Exchange Law',
            'Trade Marks'
          ]
        },
        {
          name: 'Transaction Advisory', items: [
            'Business Valuations',
            'Capital Services',
            'Corporate Finance Advisory',
            'Mergers, Acquisitions & Re-structuring',
            'Negotiation & Transaction Management',
            'Sales, Divestitures & Demergers',
            'Transaction Evaluation (Due Diligence)'
          ]
        },
        {
          name: 'NGO / Trust'
        },
        {
          name: 'Accounting Advisory'
        },
        {
          name: 'Setting up Business in India'
        },

        {
          name: 'Consultancy'
        },
          {
          name: 'Client Portal'
        }
      ]
    },
    'CAREERS',
    {
      name: 'KNOWLEDGE & EVENTS',
      items: [
        {
          name: 'Calculators',
          items: [
            'GST Calculator',
            'Income Tax Calculator',
            'TDS Calculator',
            'Calculate Net Profit',
            'Calculate Net Worth',
            'Effective Calculator',
            'HRA',
            'NSC',
            'EMI',
            'Auto Loan Calculator',
            'Home Loan Calculator',
            'Get No. Of Installment'
          ]
        },
        {
          name: 'UTILITIES',
          items: [
            'Rates of TDS',
            'TDS Rates of N.R.I us 195',
            'Rates of Income Tax',
            'Depreciation Rates Companies Act',
            'Depreciation Rates Income Tax Act',
            'ROC Filing Fees (Cos Act, 2013)',
            'ROC Fees Structure (Cos Act, 2013)',
            'Cost inflation Index',
            'IFSC Codes',
            'MICR Codes',
            'Rates of NSC Interest',
            'Gold and Silver Rates',
            'Rates of Stamp Duty',
            'LLP Fees',
            'National Industies Classification',
            'HSN Rates List',
            'Deduction u/s 80TTA Vs 80TTB'
          ]
        },
        {
          name: 'Bulletins',
          items: [
            'RBI SEBI',
            'Notification',
            'Circular',
            'Income Tax',
            'Service Tax',
            'Central Sales Tax',
            'Excise Matters',
            'Customs',
            'Company Law',
            'Labour Law',
            'FEMA',
            'The LLP Act 2008',
            'Accounting Standard (INDAS)',
            'Others',
            'GST',
            {
              name: 'VAT',
              items: [
                'Delhi VAT',
                'Maharastra VAT',
                'Gujarat VAT',
                'Telangana VAT',
                'Tamil Nadu VAT',
              ]
            },
            'IGST',
            'UTGST',
            'Compensation Cess',
            'IBC Regulation'
          ]
        },
        {
          name: 'Links',
          items: [
            'Quick Links',
            'Important Links',
            'GST/VAT Links',
            'Ease Of Doing Business'
          ]
        },
        {
          name: 'Acts',
          items: [
            {
              name: 'Direct Tax',
              items: [
                'Income Tax Act',
                'Wealth Tax Act',
                'Income Declaration Scheme 2016'
              ]
            },
            {
              name: 'Indirect Tax',
              items: [
                'Service Tax (Finance Act, 1994) Act',
                'Central Sales Tax Act, 1956',
                'The Central Excise Act, 1994',
                'Custom Act, 1962',
                'Entry Tax Act'
              ]
            },
            {
              name: 'Corporate Tax',
              items: [
                'Companies Act, 2013',
                'Companies Act, 1956',
                'LLP ACT',
                'SEBI Act, 1992'
              ]
            },
            {
              name: 'VAT Laws',
              items: [
                'Delhi VAT Act, 2004',
                'Maharashtra VAT Act, 2002',
                'West Bengal VAT Act, 2003',
                'Tamil Nadu VAT Act, 2006',
                'Karnataka VAT Act, 2003',
                'Gujarat VAT Act, 2003',
                'UP VAT Act, 2008',
                'Rajasthan VAT Act, 2003',
                'Punjab VAT Act',
                'Haryana VAT Act',
                'Telangana VAT Act, 2005',
                'Andhra Pradesh VAT Act, 2005',
                'Bihar VAT Act, 2005'
              ]
            },
            {
              name: 'Other Statutes',
              items: [
                'ESI Act, 1948',
                'PF Act, 1952',
                'Profession Tax Act',
                'The Indian Partnership Act, 1932',
                'Societies Registration Act, 1860',
                'Competition Act, 2002',
                'Reserve Bank of India Act, 1934',
                'MRTP Act, 1969',
                'Equalisation Levy Act, 2016',
                'Right to Information Act, 2005',
                'FEMA Act, 1999',
                'Maharashtra RERA',
                ' RERA, 2016',
                'Insolvency & Bankruptcy Act, 2016',
                ' Benami Property Act 1988',
              ]
            },
            {
              name: 'GST Laws',
              items: [
                'IGST Act, 2017',
                'CGST Tax Act, 2017',
                'UTGST Act, 2017',
                'GST (Compensation to States) Act'
              ]
            }
          ]
        },
        {
          name: 'Rules',
          items: [
            {
              name: 'Direct Tax Rules',
              items: [
                'Income Tax Rules',
                'Wealth Tax Rules 1957',
                'Income Declaration Scheme Rules 2016'
              ]
            },
            {
              name: 'Indirect Tax Rules',
              items: [
                'GST Valuation Rules, 2016',
                'Service Tax Rules',
                'CST (Delhi) Rules, 2005',
                'CST (Maharashtra) Rules',
                'Customs Valuation Rules',
                'Cenvat Credit Rules, 2017',
                'Entry Tax Rules'
              ]
            },
            {
              name: 'Corporate Tax',
              items: [
                'Companies Rules, 2014',
                'LLP Rules, 2009',
                'LLP Winding up Rules, 2012',
                'Cos Unpaid Dividend Rules, 1978'
              ]
            },
            {
              name: 'VAT Laws Rules',
              items: [
                'Delhi VAT Rules, 2005',
                'Maharashtra VAT Rules, 2005',
                'West Bengal VAT Rules, 2005',
                'Tamil Nadu VAT Rules, 2007',
                'Karnataka VAT Rules, 2005',
                'Gujarat VAT Rules, 2006',
                'UP VAT Rules, 2008',
                'Rajasthan VAT Rules, 2003',
                'Punjab VAT Rules',
                'Haryana VAT Rules, 2003',
                'Telangana VAT Rules, 2005'
              ]
            },
            {
              name: 'Other Statutes',
              items: [
                'Profession Tax Rules',
                'NBFC Deposits Directions, 1998',
                'NBFC & Misc NBC (Advt) Rules, 1977',
                'NBFC Auditor Report Directions, 2008',
                'Delhi Labour Welfare Fund Rules, 1997',
                'Cost Records & Audit Rules, 2014',
                'Baggage Rules, 2016',
                'Equalisation Levy Rules, 2016',
                'NCLT and NCLAT Rules',
                'Insolvency & Bankruptcy Rules',
                ' Benami Property Act 1988'
              ]
            },
            {
              name: 'GST Laws',
              items: [
                'CGST Rules, 2017',
                'IGST Rules, 2017'
              ]
            }
          ]
        },
        {
          name: 'Forms',
          items: [
            'Income Tax Forms',
            'ROC Forms (Cos Act, 2013)',
            'ROC Forms (COS Act, 1956)',
            'Income Declaration Forms',
            'Wealth Tax Forms',
            'Service Tax Forms',
            'Companies Unpaid Dividend Forms',
            'NBFCs  Forms',
            'LLP Winding Up',
            'FEMA Forms',
            'LLP Forms',
            {
              name: 'CGST',
              items: [
                'GST Forms',
                'Accounts and Records',
                'Advance Ruling',
                'Appeals and Revision',
                'Assessment and Audit',
                'Composiiton',
                'Demands and Recovery',
                'Input Tax and Credit',
                'Demands and Recovery',
                'Inspection, Search and Seizure',
                'Offences and Penalties',
                'Payment of Tax',
                'Refund',
                'Registration',
                'Returns',
                'Transitional Provisions',
                'Value of Supply'
              ]
            }
          ]
        },
        {
          name: 'Videos',
          onClick: () => {
            navigate('/videos');
            window.scrollTo(0, 0);
          }
        }
      ]
    },
    
    'CONTACT US'
  ];

  const [closeTimeoutId, setCloseTimeoutId] = useState(null);

  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const handleMouseEnter = (event, menuName) => {
    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      setCloseTimeoutId(null);
    }
    if (menuName === 'services') {
      setServicesAnchorEl(event.currentTarget);
    } else if (menuName === 'knowledge') {
      setKnowledgeAnchorEl(event.currentTarget);
    } else if (menuName === 'company') {
      setCompanyAnchorEl(event.currentTarget);
    }
    setActiveSubmenu(menuName);
  };

  const handleClick = (event, item) => {
    // Handle dropdown toggle on click
    if (typeof item === 'object') {
      if (item.name === 'SERVICES') {
        if (servicesOpen) {
          setServicesAnchorEl(null);
        } else {
          setServicesAnchorEl(event.currentTarget);
        }
        return;
      } else if (item.name === 'KNOWLEDGE & EVENTS') {
        if (knowledgeOpen) {
          setKnowledgeAnchorEl(null);
        } else {
          setKnowledgeAnchorEl(event.currentTarget);
        }
        return;
      } else if (item.name === 'COMPANY') {
        if (companyOpen) {
          setCompanyAnchorEl(null);
        } else {
          setCompanyAnchorEl(event.currentTarget);
        }
        return;
      }
    }

    // Handle navigation
    if (typeof item === 'string') {
      if (item === 'HOME') {
        navigate('/');
        setTimeout(() => {
          const heroSection = document.getElementById('home');
          if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
        return;
      }
      if (item === 'CONTACT US') {
        navigate('/contact');
        window.scrollTo(0, 0);
        return;
      }
      if (item === 'CAREERS') {
        navigate('/careers');
        window.scrollTo(0, 0);
        return;
      }

      const path = `/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`;
      navigate(path);
    }
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setServicesAnchorEl(null);
      setKnowledgeAnchorEl(null);
      setCompanyAnchorEl(null);
      setActiveSubmenu(null);
    }, 300);
    setCloseTimeoutId(timeoutId);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  };
  
  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };
  
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
    setMobileAnchorEl(null);
  };

  const handleSubmenuClick = (item, subItem, subSubItem) => {
    if (item === 'HOME') {
      navigate('/');
      window.scrollTo(0, 0);
    } else if (item === 'COMPANY' || item === 'Founder' || item === 'Our Team' || item === 'Videos') {
      if (subItem === 'Founder' || item === 'Founder') {
        navigate('/company');
        window.scrollTo(0, 0);
      } else if (subItem === 'Our Team' || item === 'Our Team') {
        navigate('/team');
        window.scrollTo(0, 0);
      } else if (subItem === 'Videos') {
        navigate('/videos');
        window.scrollTo(0, 0);
      }
    } else if (item === 'SERVICES') {
      navigate('/services');
      window.scrollTo(0, 0);
    } else if (item === 'Audit & Assurance') {
      const tabIndex = ['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].indexOf(subItem);
      navigate('/audit-and-assurance', { state: { selectedTab: tabIndex + 1 } });
      window.scrollTo(0, 0);
    } else if (item === 'Taxation') {
      const tabIndex = ['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services', 'Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions', 'Succession Planning', 'Tax Review (Due Diligence)'].indexOf(subItem);
      navigate('/taxation', { state: { selectedTab: tabIndex + 1 } });
      window.scrollTo(0, 0);
    } else if (item === 'Regulatory Advisory') {
      const tabIndex = ['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].indexOf(subItem);
      navigate('/regulatory-advisory', { state: { selectedTab: tabIndex + 1 } });
      window.scrollTo(0, 0);
    } else if (item === 'Transaction Advisory') {
      const tabIndex = ['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].indexOf(subItem);
      navigate('/transaction-advisory', { state: { selectedTab: tabIndex + 1 } });
      window.scrollTo(0, 0);
    } else if (item === 'NGO / Trust') {
      navigate('/ngo-and-trust');
      window.scrollTo(0, 0);
    } else if (item === 'Accounting Advisory') {
      navigate('/accounting-advisory');
      window.scrollTo(0, 0);
    } else if (item === 'Setting up Business in India') {
      navigate('/business-setup-india');
      window.scrollTo(0, 0);
    } else if (item === 'Consultancy') {
      navigate('/business-consultancy');
      window.scrollTo(0, 0);
      

    }else if (item === 'Client Portal') {
       window.open('https://management-portal-frontend-three.vercel.app/login', '_blank');
           window.scrollTo(0, 0);
      

    }
     else if (item === 'CONTACT US') {
      navigate('/contact');
      window.scrollTo(0, 0);
    } else if (item === 'Calculators') {
      switch (subItem) {
        case 'GST Calculator':
          window.open('https://casnv.com/resources/Calculators/GST_CALCULATOR/GST_CALCULATOR.aspx', '_blank');
          break;
        case 'Income Tax Calculator':
          window.open('https://casnv.com/resources/Calculators/Tax_Calculator/cal_Income_Tax.aspx#', '_blank');
          break;
        case 'TDS Calculator':
          window.open('https://casnv.com/resources/Calculators/TDS_Calculator/TDS_Calculator2020.aspx', '_blank');
          break;
        case 'Calculate Net Profit':
          window.open('https://casnv.com/resources/Calculators/Calculate_Net_Profit/Calculate_Net_Profit.aspx', '_blank');
          break;
        case 'Calculate Net Worth':
          window.open('https://casnv.com/resources/Calculators/Calculate_Net_Worth/Calculate_Net_Worth.aspx', '_blank');
          break;
        case 'Effective Calculator':
          window.open('https://casnv.com/resources/Calculators/Calculate_Effective_Capital/Calculate_Effective_Capital.aspx', '_blank');
          break;
        case 'HRA':
          window.open('https://casnv.com/resources/Calculators/HRA/HRA.aspx', '_blank');
          break;
        case 'NSC':
          window.open('https://casnv.com/resources/Calculators/NSC/Cal_NSC.aspx', '_blank');
          break;
        case 'EMI':
          window.open('https://casnv.com/resources/Calculators/EMI/EMI.aspx', '_blank');
          break;
        case 'Auto Loan Calculator':
          window.open('https://casnv.com/resources/Calculators/Auto_Loan_Calculator/AutoLoan.aspx', '_blank');
          break;
        case 'Home Loan Calculator':
          window.open('https://casnv.com/resources/Calculators/Home_Loan_Calculator/HomeLoanCalculator.aspx', '_blank');
          break;
        case 'Get No. Of Installment':
          window.open('https://casnv.com/resources/Calculators/Get_No._Of_Instalment/Get_No_Of_Instalment.aspx', '_blank');
          break;
        default:
          break;
      }
    } else if (item === 'UTILITIES') {
      switch (subItem) {
        case 'Rates of TDS':
          window.open('https://casnv.com/resources/Utilities/Rates_of_TDS/Rates_of_TDS.aspx', '_blank', 'noopener');
          break;
        case 'TDS Rates of N.R.I us 195':
          window.open('https://casnv.com/resources/Utilities/TDS_Rates_for_N_R_I_us_195/TDS_Rates_for_N_R_I_us_195.aspx', '_blank', 'noopener');
          break;
        case 'Rates of Income Tax':
          window.open('https://casnv.com/resources/Utilities/Rates_of_Income_Tax/Rates_of_Income_Tax.aspx', '_blank', 'noopener');
          break;
        case 'Depreciation Rates Companies Act':
          window.open('https://casnv.com/resources/Utilities/RATES_OF_DEPRECIATION/RATES_OF_DEPRECIATION.aspx', '_blank', 'noopener');
          break;
        case 'Depreciation Rates Income Tax Act':
          window.open('https://casnv.com/resources/Utilities/RATES_OF_DEPRECIATION_2/RATES_OF_DEPRECIATION_2.aspx', '_blank', 'noopener');
          break;
        case 'ROC Filing Fees (Cos Act, 2013)':
          window.open('https://casnv.com/resources/Utilities/Filingfees/Filingfees.aspx', '_blank', 'noopener');
          break;
        case 'ROC Fees Structure (Cos Act, 2013)':
          window.open('https://casnv.com/resources/Utilities/Penalty_for_Late_Filing_in_ROC/Penalty_for_Late_Filing_in_ROC.aspx', '_blank', 'noopener');
          break;
        case 'Cost inflation Index':
          window.open('https://casnv.com/resources/Utilities/COST_INFLATION_INDEX/COST_INFLATION_INDEX.aspx', '_blank', 'noopener');
          break;
        case 'IFSC Codes':
          window.open('https://casnv.com/resources/Utilities/IFSC_Codes/IFSC_Codes.aspx', '_blank', 'noopener');
          break;
        case 'MICR Codes':
          window.open('https://casnv.com/resources/Utilities/MICR_Codes/MICR_Codes.aspx', '_blank', 'noopener');
          break;
        case 'Rates of NSC Interest':
          window.open('https://casnv.com/resources/Utilities/CALCULATION_OF_INTEREST_ON_NSC/CALCULATION_OF_INTEREST_ON_NSC.aspx', '_blank', 'noopener');
          break;
        case 'Gold and Silver Rates':
          window.open('https://casnv.com/resources/Utilities/Gold_Silver_Rates/Gold_Silver_Rates.aspx', '_blank', 'noopener');
          break;
        case 'Rates of Stamp Duty':
          window.open('https://casnv.com/resources/Utilities/Rates_of_stamp_duty/Rates_of_stamp_duty.aspx', '_blank', 'noopener');
          break;
        case 'LLP Fees':
          window.open('https://casnv.com/resources/Utilities/Limited_Liability_Partnership_Fees/Limited_Liability_Partnership_Fees.aspx', '_blank', 'noopener');
          break;
        case 'National Industies Classification':
          window.open('https://casnv.com/resources/Utilities/NIC/NIC.aspx', '_blank', 'noopener');
          break;
        case 'HSN Rates List':
          window.open('https://casnv.com/resources/Utilities/HSN_RATE_LIST/HSN_RATE_LIST.aspx', '_blank', 'noopener');
          break;
        case 'Deduction u/s 80TTA Vs 80TTB':
          window.open('https://casnv.com/resources/Utilities/Comparison_of_Deduction_Under_Section_80TTA_and_80TTB/Comparison_of_Deduction_Under_Section_80TTA_and_80TTB.aspx', '_blank', 'noopener');
          break;
        default:
          break;
      }
    } else if (item === 'Bulletins') {
      switch (subItem) {
        case 'RBI SEBI':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/RBISEBI/RBISEBI.aspx', '_blank', 'noopener');
          break;
        case 'Notification':
          window.open('https://casnv.com/resources/Links/important_links/important_links.aspx', '_blank', 'noopener');
          break;
        case 'Circular':
          window.open('https://casnv.com/resources/Links/Vat_Links/Vat_Links.aspx', '_blank', 'noopener');
          break;
        case 'Income Tax':
          window.open('https://casnv.com/resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.aspx', '_blank', 'noopener');
          break;
        case 'Service Tax':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Service_Tax/Service_Tax.aspx', '_blank', 'noopener');
          break;
        case 'Central Sales Tax':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Central_Sales_Tax/Central_Sales_Tax.aspx', '_blank', 'noopener');
          break;
        case 'Excise Matters':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Excise_Matters/Excise_Matters.aspx', '_blank', 'noopener');
          break;
        case 'Customs':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Customs/Customs.aspx', '_blank', 'noopener');
          break;
        case 'Company Law':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Corporate_Matters/Corporate_Matters.aspx', '_blank', 'noopener');
          break;
        case 'Labour Law':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Labour_Laws/Labour_Laws.aspx', '_blank', 'noopener');
          break;
        case 'FEMA':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/F_E_M_A/F_E_M_A.aspx', '_blank', 'noopener');
          break;
        case 'The LLP Act 2008':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/News_on_LLP/News_on_LLP.aspx', '_blank', 'noopener');
          break;
        case 'Accounting Standard (INDAS)':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Accounting_Standards_INDAS/Accounting_Standards_INDAS.aspx', '_blank', 'noopener');
          break;
        case 'Others':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Other/Other.aspx', '_blank', 'noopener');
          break;
        case 'GST':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/GST/GST.aspx', '_blank', 'noopener');
          break;
        case 'VAT':
          if (subSubItem) {
            // If subSubItem is provided, handle the VAT submenu
            switch (subSubItem) {
              case 'Delhi VAT':
                window.open('https://casnv.com/advancesearch/notification/Bulletins/Delhi_VAT/Delhi_VAT.aspx', '_blank', 'noopener');
                break;
              case 'Maharastra VAT':
                window.open('https://casnv.com/advancesearch/notification/Bulletins/Mumbai_VAT/Mumbai_VAT.aspx', '_blank', 'noopener');
                break;
              case 'Gujarat VAT':
                window.open('https://casnv.com/advancesearch/notification/Bulletins/Gujarat_VAT/Gujarat_VAT.aspx', '_blank', 'noopener');
                break;
              case 'Telangana VAT':
                window.open('https://casnv.com/advancesearch/notification/Bulletins/Telangana_VAT/Telangana_VAT.aspx', '_blank', 'noopener');
                break;
              case 'Tamil Nadu VAT':
                window.open('https://casnv.com/advancesearch/notification/Bulletins/TamilNadu_VAT/TamilNadu_VAT.aspx', '_blank', 'noopener');
                break;


              default:
                break;
            }
          } else {
            // If no subSubItem, maybe open a general VAT page or do nothing
            window.open('https://casnv.com/advancesearch/notification/Bulletins/VAT/VAT.aspx', '_blank', 'noopener');
          }
          break;

        case 'IGST':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/IGST/IGST.aspx', '_blank', 'noopener');
          break;
        case 'UTGST':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/UTGST/UTGST.aspx', '_blank', 'noopener');
          break;
        case 'Compensation Cess':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/Compensation_Cess/Compensation_Cess.aspx', '_blank', 'noopener');
          break;
        case 'IBC Regulation':
          window.open('https://casnv.com/advancesearch/notification/Bulletins/IBC_Regulation/IBC_Regulation.aspx', '_blank', 'noopener');
          break;
        default:
          break;


      }
    } else if (item === 'Links') {
      switch (subItem) {
        case 'Quick Links':
          window.open('https://casnv.com/resources/Links/Quick_Link/Quick_Links-IT.aspx', '_blank', 'noopener');
          break;
        case 'Important Links':
          window.open('https://casnv.com/resources/Links/important_links/important_links.aspx', '_blank', 'noopener');
          break;
        case 'GST/VAT Links':
          window.open('https://casnv.com/resources/Links/Vat_Links/Vat_Links.aspx', '_blank', 'noopener');
          break;
        case 'Ease Of Doing Business':
          window.open('https://casnv.com/resources/Links/EASE_OF_DOING_BUSINESS/EASE_OF_DOING_BUSINESS.aspx', '_blank', 'noopener');
          break;
        default:
          break;
      }
    }
    else if (item === 'Acts') {
      switch (subItem) {

        case 'Direct Tax':
          if (subSubItem) {
            // If subSubItem is provided, handle the VAT submenu
            switch (subSubItem) {
              case 'Income Tax Act':
                window.open('https://casnv.com/laws/-26/Income_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'Wealth Tax Act':
                window.open('https://casnv.com/laws/-75/Wealth_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'Income Declaration Scheme 2016':
                window.open('https://casnv.com/laws/-157/Income_Declaration_Scheme_2016.aspx', '_blank', 'noopener');
                break;


              default:
                break;
            }
          }
          break;
        case 'Indirect Tax':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Service Tax (Finance Act, 1994) Act':
                window.open('https://casnv.com/laws/-30/Service_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'Central Sales Tax Act, 1956':
                window.open('https://casnv.com/laws/-36/Central_Sales_Tax_Act,_1956.aspx', '_blank', 'noopener');
                break;
              case 'The Central Excise Act, 1994':
                window.open('https://casnv.com/laws/-40/The_Central_Excise_Act,_1944.aspx', '_blank', 'noopener');
                break;
              case 'Custom Act, 1962':
                window.open('https://casnv.com/laws/-53/Customs_Act,_1962.aspx', '_blank', 'noopener');
                break;
              case 'Entry Tax Act':
                window.open('https://casnv.com/laws/-102/Entry_Tax_Act.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;

        case 'Corporate Tax':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Companies Act, 2013':
                window.open('https://casnv.com/laws/-103/Companies_Act_2013.aspx', '_blank', 'noopener');
                break;
              case 'Companies Act, 1956':
                window.open('https://casnv.com/laws/-42/Companies_Act,_1956.aspx', '_blank', 'noopener');
                break;
              case 'LLP ACT':
                window.open('https://casnv.com/laws/-48/The_Limited_Liability_Partnership_ACT,_2008.aspx', '_blank', 'noopener');
                break;
              case 'SEBI Act, 1992':
                window.open('https://casnv.com/laws/-59/The_Securities_and_Exchange_Board_of_India_Act,_1992.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
        case 'VAT Laws':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Delhi VAT Act, 2004':
                window.open('https://casnv.com/laws/-32/Delhi_Value_Added_Tax_Act,_2004.aspx', '_blank', 'noopener');
                break;
              case 'Maharashtra VAT Act, 2002':
                window.open('https://casnv.com/laws/-39/Maharashtra_Value_Added_Tax_Act_(2002).aspx', '_blank', 'noopener');
                break;
              case 'West Bengal VAT Act, 2003':
                window.open('https://casnv.com/laws/-49/West_Bengal_Value_Added_Tax_Act,_2003.aspx', '_blank', 'noopener');
                break;
              case 'Tamil Nadu VAT Act, 2006':
                window.open('https://casnv.com/laws/-152/Tamilnadu_VAT_ACT_2006.aspx', '_blank', 'noopener');
                break;
              case 'Karnataka VAT Act, 2003':
                window.open('https://casnv.com/laws/-89/Karnataka_Value_Added_Tax_Act,_2003.aspx', '_blank', 'noopener');
                break;
              case 'Gujarat VAT Act, 2003':
                window.open('https://casnv.com/laws/-150/Gujarat_Value_Added_Tax_Act_2003.aspx', '_blank', 'noopener');
                break;
              case 'UP VAT Act, 2008':
                window.open('https://casnv.com/laws/-46/The_Uttar_Pradesh_Value_Added_Tax_Act_2008.aspx', '_blank', 'noopener');
                break;
              case 'Rajasthan VAT Act, 2003':
                window.open('https://casnv.com/laws/-94/Rajasthan_Value_Added_Tax_Act,_2003.aspx', '_blank', 'noopener');
                break;
              case 'Punjab VAT Act':
                window.open('https://casnv.com/laws/-65/Punjab_Value_Added_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'Haryana VAT Act':
                window.open('https://casnv.com/laws/-68/Haryana_Value_Added_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'Telangana VAT Act, 2005':
                window.open('https://casnv.com/laws/-148/Telangana_VAT_Act_2005.aspx', '_blank', 'noopener');
                break;
              case 'Andhra Pradesh VAT Act, 2005':
                window.open('https://casnv.com/laws/-81/Andhra_Pradesh_Value_Added_Tax_Act,_2005.aspx', '_blank', 'noopener');
                break;
              case 'Bihar VAT Act, 2005':
                window.open('https://casnv.com/laws/-91/Bihar_Value_Added_Tax_Act,_2005.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
        case 'Other Statutes':
          if (subSubItem) {
            switch (subSubItem) {
              case 'ESI Act, 1948':
                window.open('https://casnv.com/laws/-57/The_Employees_State_Insurance_Act,_1948.aspx', '_blank', 'noopener');
                break;
              case 'PF Act, 1952':
                window.open('https://casnv.com/laws/-58/The_Employees_Provident_Funds_and_Miscellaneous_Provisions_Act,_1952.aspx', '_blank', 'noopener');
                break;
              case 'Profession Tax Act':
                window.open('https://casnv.com/laws/-98/Profession_Tax_Act.aspx', '_blank', 'noopener');
                break;
              case 'The Indian Partnership Act, 1932':
                window.open('https://casnv.com/laws/-114/The_Indian_Partnership_Act_1932.aspx', '_blank', 'noopener');
                break;
              case 'Societies Registration Act, 1860':
                window.open('https://casnv.com/laws/-116/Societies_Registration_Act_1860.aspx', '_blank', 'noopener');
                break;
              case 'Competition Act, 2002':
                window.open('https://casnv.com/laws/-118/Competition_Act_2002.aspx', '_blank', 'noopener');
                break;
              case 'Reserve Bank of India Act, 1934':
                window.open('https://casnv.com/laws/-119/Reserve_Bank_of_India_Act_1934.aspx', '_blank', 'noopener');
                break;
              case 'MRTP Act, 1969':
                window.open('https://casnv.com/laws/-120/Monopolies_and_Restrictive_Trade_Practices_Act_1969.aspx', '_blank', 'noopener');
                break;
              case 'Equalisation Levy Act, 2016':
                window.open('https://casnv.com/laws/-154/Equalisation_Levy_Act_2016.aspx', '_blank', 'noopener');
                break;
              case 'Right to Information Act, 2005':
                window.open('https://casnv.com/laws/-33/Right_To_Information_Act,_2005.aspx', '_blank', 'noopener');
                break;
              case 'FEMA Act, 1999':
                window.open('https://casnv.com/laws/-101/Foreign_Exchange_Management_Act_1999.aspx', '_blank', 'noopener');
                break;
              case 'Maharashtra RERA':
                window.open('https://casnv.com/laws/-210/Maharashtra_Real_Estate_Regulatory_Authority_and_Rules.aspx', '_blank', 'noopener');
                break;
              case 'RERA, 2016':
                window.open('https://casnv.com/laws/-214/THE_REAL_ESTATE_REGULATION_AND_DEVELOPMENT_ACT_2016.aspx', '_blank', 'noopener');
                break;
              case 'Insolvency & Bankruptcy Act, 2016':
                window.open('https://casnv.com/laws/-220/The_Insolvency_and_Bankruptcy_Code_2016.aspx', '_blank', 'noopener');
                break;
              case 'Benami Property Act 1988':
                window.open('https://casnv.com/laws/-244/Prohibition_Of_Benami_Property_Transaction_Act_1988.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
        case 'GST Laws':
          if (subSubItem) {
            switch (subSubItem) {
              case 'IGST Act, 2017':
                window.open('https://casnv.com/laws/-162/IGST_Act_2017.aspx', '_blank', 'noopener');
                break;
              case 'CGST Tax Act, 2017':
                window.open('https://casnv.com/laws/-164/Central_Goods_and_Services_Tax_Act_2017.aspx', '_blank', 'noopener');
                break;
              case 'UTGST Act, 2017':
                window.open('https://casnv.com/laws/-186/Union_Territory_Goods_and_Services_Tax_Act_2017.aspx', '_blank', 'noopener');
                break;
              case 'GST (Compensation to States) Act':
                window.open('https://casnv.com/laws/-187/GST_Compensation_to_States_Act_2017.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
      }
    }
    else if (item === 'Rules') {
      switch (subItem) {

        case 'Direct Tax Rules':
          if (subSubItem) {
            // If subSubItem is provided, handle the VAT submenu
            switch (subSubItem) {
              case 'Income Tax Rules':
                window.open('https://casnv.com/laws/-29/Income_Tax_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Wealth Tax Rules 1957':
                window.open('https://casnv.com/laws/-76/Wealth_Tax_Rules_1957.aspx', '_blank', 'noopener');
                break;
              case 'Income Declaration Scheme Rules 2016':
                window.open('https://casnv.com/laws/-155/Income_Declaration_Scheme_Rules_2016.aspx', '_blank', 'noopener');
                break;


              default:
                break;
            }
          }
          break;

        case 'Indirect Tax Rules':
          if (subSubItem) {
            switch (subSubItem) {
              case 'GST Valuation Rules, 2016':
                window.open('https://casnv.com/laws/-163/GST_Valuation_Rules_2016.aspx', '_blank', 'noopener');
                break;
              case 'Service Tax Rules':
                window.open('https://casnv.com/laws/-31/Service_Tax_Rules.aspx', '_blank', 'noopener');
                break;
              case 'CST (Delhi) Rules, 2005':
                window.open('https://casnv.com/laws/-37/Central_Sales_Tax_(Delhi)_Rules,_2005.aspx', '_blank', 'noopener');
                break;
              case 'CST (Maharashtra) Rules':
                window.open('https://casnv.com/laws/-41/Central_Sales_Tax_(Maharashtra)_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Customs Valuation Rules':
                window.open('https://casnv.com/laws/-55/Customs_Valuation_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Cenvat Credit Rules, 2017':
                window.open('https://casnv.com/laws/-133/Cenvat_Credit_Rules_2017.aspx', '_blank', 'noopener');
                break;
              case 'Entry Tax Rules':
                window.open('https://casnv.com/laws/-96/Entry_Tax_Rules.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
        case 'Corporate Tax':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Companies Rules, 2014':
                window.open('https://casnv.com/laws/-104/Companies_Rules_2014.aspx', '_blank', 'noopener');
                break;
              case 'LLP Rules, 2009':
                window.open('https://casnv.com/laws/-84/Limited_Liability_Partnership_Rules,_2009.aspx', '_blank', 'noopener');
                break;
              case 'LLP Winding up Rules, 2012':
                window.open('https://casnv.com/laws/-111/LLP_Winding_up_Rules_2012.aspx', '_blank', 'noopener');
                break;
              case 'Cos Unpaid Dividend Rules, 1978':
                window.open('https://casnv.com/laws/-115/The_Companies_Unpaid_Dividend_Rules_1978.aspx', '_blank', 'noopener');
                break;

              default:
                break;
            }
          }
          break;
        case 'VAT Laws Rules':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Delhi VAT Rules, 2005':
                window.open('https://casnv.com/laws/-35/Delhi_Value_Added_Tax_Rules,_2005.aspx', '_blank', 'noopener');
                break;
              case 'Maharashtra VAT Rules, 2005':
                window.open('https://casnv.com/laws/-38/Maharashtra_Value_Added_Tax_Rules,_2005.aspx', '_blank', 'noopener');
                break;
              case 'West Bengal VAT Rules, 2005':
                window.open('https://casnv.com/laws/-50/The_West_Bengal_Value_Added_Tax_Rules,_2005.aspx', '_blank', 'noopener');
                break;
              case 'Tamil Nadu VAT Rules, 2007':
                window.open('https://casnv.com/laws/-153/Tamilnadu_VAT_Rules_2007.aspx', '_blank', 'noopener');
                break;
              case 'Karnataka VAT Rules, 2005':
                window.open('https://casnv.com/laws/-88/Karnataka_Value_Added_Tax_Rules,_2005.aspx', '_blank', 'noopener');
                break;
              case 'Gujarat VAT Rules, 2006':
                window.open('https://casnv.com/laws/-151/Gujarat_Value_Added_Tax_Rules_2006.aspx', '_blank', 'noopener');
                break;
              case 'UP VAT Rules, 2008':
                window.open('https://casnv.com/laws/-56/The_Uttar_Pradesh_Value_Added_Tax_Rules,_2008.aspx', '_blank', 'noopener');
                break;

              case 'Rajasthan VAT Rules, 2003':
                window.open('https://casnv.com/laws/-95/Rajasthan_Value_Added_Tax_Rules,_2006.aspx', '_blank', 'noopener');
                break;
              case 'Punjab VAT Rules':
                window.open('https://casnv.com/laws/-66/Punjab_Value_Added_Tax_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Haryana VAT Rules, 2003':
                window.open('https://casnv.com/laws/-83/Haryana_Value_Added_Tax_Rules,_2003.aspx', '_blank', 'noopener');
                break;
              case 'Telangana VAT Rules, 2005':
                window.open('https://casnv.com/laws/-149/Telangna_VAT_Rules_2005.aspx', '_blank', 'noopener');
                break;

              default:
                break;
            }
          }
          break;
        case 'Other Statutes':
          if (subSubItem) {
            switch (subSubItem) {
              case 'Profession Tax Rules':
                window.open('https://casnv.com/laws/-100/Profession_Tax_Rules.aspx', '_blank', 'noopener');
                break;
              case 'NBFC Deposits Directions, 1998':
                window.open('https://casnv.com/laws/-126/NBFC_Acceptance_of_Public_Deposits_Reserve_Bank_Directions_1998.aspx', '_blank', 'noopener');
                break;
              case 'NBFC & Misc NBC (Advt) Rules, 1977':
                window.open('https://casnv.com/laws/-127/NBFC_and_Miscellaneous_Non-Banking_Companies_Advertisement_Rules_1977.aspx', '_blank', 'noopener');
                break;
              case 'NBFC Auditor Report Directions, 2008':
                window.open('https://casnv.com/laws/-128/Non-Banking_Financial_Companies_Auditors_Report_Reserve_Bank_Directions_2008.aspx', '_blank', 'noopener');
                break;
              case 'Delhi Labour Welfare Fund Rules, 1997':
                window.open('https://casnv.com/laws/-129/Delhi_Labour_Welfare_Fund_Rules_1997.aspx', '_blank', 'noopener');
                break;
              case 'Cost Records & Audit Rules, 2014':
                window.open('https://casnv.com/laws/-130/Cost_records_and_audit_Rules_2014.aspx', '_blank', 'noopener');
                break;
              case 'Baggage Rules, 2016':
                window.open('https://casnv.com/laws/-54/Baggage_Amendment_Rules_2016.aspx', '_blank', 'noopener');
                break;

              case 'Equalisation Levy Rules, 2016':
                window.open('https://casnv.com/laws/-156/Equalisation_Levy_Rules_2016.aspx', '_blank', 'noopener');
                break;
              case 'NCLT and NCLAT Rules':
                window.open('https://casnv.com/laws/-216/NCLT_And_NCLAT_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Insolvency & Bankruptcy Rules':
                window.open('https://casnv.com/laws/-243/The_Insolvency_and_Bankruptcy_of_India_Rules.aspx', '_blank', 'noopener');
                break;
              case 'Benami Property Act 1988':
                window.open('https://casnv.com/laws/-245/Prohibition_Of_Benami_Property_Rules_Transaction_Rules_2016.aspx', '_blank', 'noopener');
                break;

              default:
                break;
            }
          }
          break;
        case 'GST Laws':
          if (subSubItem) {
            switch (subSubItem) {
              case 'CGST Rules, 2017':
                window.open('https://casnv.com/laws/-193/Central_Goods_and_Services_Tax_rule_2017.aspx', '_blank', 'noopener');
                break;
              case 'IGST Rules, 2017':
                window.open('https://casnv.com/laws/-246/IGST_Rules_2017.aspx', '_blank', 'noopener');
                break;
              default:
                break;
            }
          }
          break;
      }
    }
    else if (item === 'Forms') {
      switch (subItem) {
        case 'Income Tax Forms':
          window.open('https://casnv.com/resources/Forms/Income_Tax_Forms/Income_Tax_Forms.aspx', '_blank', 'noopener');
          break;
        case 'ROC Forms (Cos Act, 2013)':
          window.open('https://casnv.com/resources/Forms/ROC_Forms_As_per_Companies_Act_2013/ROC_Forms_As_per_Companies_Act_2013.aspx', '_blank', 'noopener');
          break;
        case 'ROC Forms (COS Act, 1956)':
          window.open('https://casnv.com/resources/Forms/ROC_Forms_1956/ROC_Forms_1956.aspx', '_blank', 'noopener');
          break;
        case 'Income Declaration Forms':
          window.open('https://casnv.com/resources/Forms/income_declaration_form/income_declaration_form.aspx', '_blank', 'noopener');
          break;
        case 'Wealth Tax Forms':
          window.open('https://casnv.com/resources/Forms/Wealth_Tax_Forms/Wealth_Tax_Forms.aspx', '_blank', 'noopener');
          break;
        case 'Service Tax Forms':
          window.open('https://casnv.com/resources/Forms/Service_Tax_Forms/Service_Tax_Forms.aspx', '_blank', 'noopener');
          break;
        case 'Companies Unpaid Dividend Forms':
          window.open('https://casnv.com/resources/Forms/Companies_Unpaid_Dividend_Forms/Companies_Unpaid_Dividend_Forms.aspx', '_blank', 'noopener');
          break;
        case 'NBFCs  Forms':
          window.open('https://casnv.com/resources/Forms/NBFC_Forms/NBFC_Forms.aspx', '_blank', 'noopener');
          break;
        case 'LLP Winding Up':
          window.open('https://casnv.com/resources/Forms/LLP_winding_up_forms/LLP_winding_up_forms.aspx', '_blank', 'noopener');
          break;
        case 'FEMA Forms':
          window.open('https://casnv.com/resources/Forms/FEMA/FEMA.aspx', '_blank', 'noopener');
          break;
        case 'LLP Forms':
          window.open('https://casnv.com/resources/Forms/LLP_Forms/LLP_Forms.aspx', '_blank', 'noopener');
          break;

        case 'CGST':
          if (subSubItem) {
            // If subSubItem is provided, handle the VAT submenu
            switch (subSubItem) {
              case 'GST Forms':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/GST_Forms/GST_Forms.aspx', '_blank', 'noopener');
                break;
              case 'Accounts and Records':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Accounts_and_Records/Accounts_and_Records.aspx', '_blank', 'noopener');
                break;
              case 'Advance Ruling':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Advance_Rulling/Advance_Rulling.aspx', '_blank', 'noopener');
                break;
              case 'Appeals and Revision':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Appeals_and_Revision/Appeals_and_Revision.aspx', '_blank', 'noopener');
                break;
              case 'Assessment and Audit':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Assessment_and_Audit/Assessment_and_Audit.aspx', '_blank', 'noopener');
                break;
              case 'Composition':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Composition_Forms/Composition_Forms.aspx', '_blank', 'noopener');
                break;
              case 'Demands and Recovery':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Demands_and_recovery/Demands_and_recovery.aspx', '_blank', 'noopener');
                break;

              case 'Input Tax and Credit':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Input_Tax_Credit_Forms/Input_Tax_Credit_Forms.aspx', '_blank', 'noopener');
                break;

            

              case 'Inspection, Search and Seizure':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Inspection_Search_and_Seizure/Inspection_Search_and_Seizure.aspx', '_blank', 'noopener');
                break;

              case 'Offences and Penalties':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Offences_and_Penalties/Offences_and_Penalties.aspx', '_blank', 'noopener');
                break;

              case 'Payment of Tax':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Payment_of_Tax/Payment_of_Tax.aspx', '_blank', 'noopener');
                break;

              case 'Refund':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Refund/Refund.aspx', '_blank', 'noopener');
                break;
              case 'Registration':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Registration_Forms/Registration_Forms.aspx', '_blank', 'noopener');
                break;
              case 'Returns':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Returns/Returns.aspx', '_blank', 'noopener');
                break;
              case 'Transitional Provisions':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Transitional_Provisions/Transitional_Provisions.aspx', '_blank', 'noopener');
                break;
              case 'Value of Supply':
                window.open('https://casnv.com/resources/Forms/CGST_Forms/Value_of_Supply/.aspx', '_blank', 'noopener');
                break;






              default:
                break;
            }
          }
          break;
      }
    }


    setServicesAnchorEl(null);
    setKnowledgeAnchorEl(null);
    setCompanyAnchorEl(null);
    setActiveSubmenu(null);
  };

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
  };

  const languageOptions = {
    en: 'English',
  hi: 'हिंदी',
  gu: 'ગુજરાતી',
  zh: '中文',        // Chinese
  ar: 'العربية',     // Arabic
  es: 'Español',     // Spanish
  fr: 'Français'    // French
 
  };

  const renderLanguageSelector = () => {
    return (
      <FormControl size="small" sx={{ minWidth: 120, ml: 2 }}>
        <Select
          value={currentLanguage}
          onChange={handleLanguageChange}
          sx={{
            height: '35px',
            backgroundColor: '#fff',
            '& .MuiSelect-select': {
              paddingY: '5px',
            }
          }}
        >
          {Object.entries(languageOptions).map(([code, name]) => (
            <MuiMenuItem key={code} value={code}>
              {name}
            </MuiMenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const renderSubmenuItems = (items, parent = '') => {
    items = items.map(item => {
      if (typeof item === 'string') {
        return { name: item };
      } else if (item.name && item.items) {
        return item;
      } else {
        return { name: item.name || 'Unnamed' };
      }
    });

    return (
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 1.5,
        p: 2,
        maxHeight: '75vh',
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#c1c1c1',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#999',
        }
      }}>
        {items.map((item) => (
          <Box key={item.name} sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transform: 'translateY(-2px)'
            }
          }}>
            <MenuItem
              className="category"
              onClick={() => item.items ? toggleCategory(item.name) : handleSubmenuClick(parent || item.name, item.name)}
              sx={{
                cursor: 'pointer',
                fontWeight: 500,
                fontSize: '0.95rem',
                py: 1
              }}
            >
              {translations[item.name] || item.name}
              {item.items && (
                <KeyboardArrowRightIcon sx={{
                  fontSize: '1rem',
                  marginLeft: 'auto',
                  transition: 'transform 0.3s ease',
                  transform: expandedCategories[item.name] ? 'rotate(90deg)' : 'rotate(0deg)'
                }} />
              )}
            </MenuItem>

            {item.items && (
              <SubmenuContainer
                isvisible={expandedCategories[item.name] ? 1 : 0}
                onMouseEnter={() => setExpandedCategories(prev => ({ ...prev, [item.name]: true }))}
                sx={{
                  px: 1,
                  py: 1,
                  backgroundColor: '#f5f7fa',
                  borderRadius: '6px',
                  overflow: 'visible'
                }}
              >
                {item.items.map((subItem) => {
                  if (typeof subItem === 'string') {
                    return (
                      <MenuItem
                        key={subItem}
                        issubmenu={1}
                        onClick={() => handleSubmenuClick(item.name, subItem)}
                        sx={{
                          fontSize: '0.85rem',
                          borderRadius: '4px',
                          my: 0.5,
                          mx: 0.5,
                          py: 0.8,
                          px: 1.2,
                          '&:hover': {
                            backgroundColor: '#e0f2ff'
                          }
                        }}
                      >
                        {translations[subItem] || subItem}
                      </MenuItem>
                    );
                  } else if (typeof subItem === 'object' && subItem.items) {
                    const nestedKey = `${item.name}-${subItem.name}`;
                    return (
                      <Box key={subItem.name} sx={{ width: '100%' }}>
                        <MenuItem
                          className="category"
                          onClick={() => toggleCategory(nestedKey)}
                          sx={{
                            cursor: 'pointer',
                            pl: 3,
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            backgroundColor: '#edf3f8'
                          }}
                        >
                          {translations[subItem.name] || subItem.name}
                          <KeyboardArrowRightIcon sx={{
                            fontSize: '0.9rem',
                            marginLeft: 'auto',
                            transition: 'transform 0.3s ease',
                            transform: expandedCategories[nestedKey] ? 'rotate(90deg)' : 'rotate(0deg)'
                          }} />
                        </MenuItem>
                        <SubmenuContainer
                          isvisible={expandedCategories[nestedKey] ? 1 : 0}
                          sx={{
                            pl: 3,
                            py: 1,
                            backgroundColor: '#f0f6fc',
                            borderRadius: '6px',
                            overflow: 'visible'
                          }}
                        >
                          {subItem.items.map((subSubItem) => (
                            <MenuItem
                              key={subSubItem}
                              issubmenu={1}
                              onClick={() => handleSubmenuClick(item.name, subItem.name, subSubItem)}
                              sx={{
                                fontSize: '0.8rem',
                                borderRadius: '4px',
                                my: 0.3,
                                mx: 0.5,
                                pl: 4,
                                py: 0.7,
                                '&:hover': {
                                  backgroundColor: '#d8ecff'
                                }
                              }}
                            >
                              {translations[subSubItem] || subSubItem}
                            </MenuItem>
                          ))}
                        </SubmenuContainer>
                      </Box>
                    );
                  } else {
                    return renderSubmenuItems([subItem], item.name);
                  }
                })}
              </SubmenuContainer>
            )}
          </Box>
        ))}
      </Box>
    );
  };
  const SubmenuContainer = styled(Box)(({ isvisible }) => ({
    display: isvisible ? 'block' : 'none',
    transition: 'all 0.3s ease',
  }));



  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" component="div" sx={{
              color: '#4B0082',
              lineHeight: 1.2,
              fontSize: { xs: '1.4rem', sm: '1.8rem' },
              fontWeight: 500,
              fontFamily: '"Playfair Display", serif'
            }}>
              S N VERMA & CO.
            </Typography>
            <Typography variant="subtitle2" sx={{
              color: '#666',
              letterSpacing: '0.5px',
              fontSize: { xs: '0.8rem', sm: '0.9rem' }
            }}>
              {translations['CHARTERED ACCOUNTANTS']}
            </Typography>
          </Box>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5, flexWrap: 'nowrap', minWidth: 0 }}>
          {menuItems.map((item) =>
            typeof item === 'string' ? (
              <StyledButton
                key={item}
                isactive={activeSubmenu === item ? 1 : 0}
                onMouseEnter={(e) => handleMouseEnter(e, item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(null, item)}
                sx={{ fontSize: '0.9rem', py: 1, px: 1.5 }}
              >
                {translations[item]}
              </StyledButton>
            ) : (
              <Box
                key={item.name}
                sx={{ position: 'relative', display: 'flex', alignItems: 'center', minWidth: 0 }}
                onMouseLeave={handleMouseLeave}
              >
                <StyledButton
                  onMouseEnter={(e) => handleMouseEnter(e, item.name === 'SERVICES' ? 'services' : item.name === 'COMPANY' ? 'company' : 'knowledge')}
                  onClick={(e) => handleClick(e, item)}
                  endIcon={<KeyboardArrowDownIcon sx={{
                    transition: 'transform 0.3s ease',
                    transform: (item.name === 'SERVICES' ? servicesOpen : item.name === 'COMPANY' ? companyOpen : knowledgeOpen) ? 'rotate(180deg)' : 'rotate(0)'
                  }} />}
                  isactive={activeSubmenu === (item.name === 'SERVICES' ? 'services' : item.name === 'COMPANY' ? 'company' : 'knowledge') ? 1 : 0}
                  sx={{ fontSize: '0.9rem', py: 1, px: 1.5 }}
                  data-menu={item.name === 'SERVICES' ? 'services' : item.name === 'COMPANY' ? 'company' : 'knowledge'}
                >
                  {translations[item.name]}
                </StyledButton>
                <MenuPopper
                  open={item.name === 'SERVICES' ? servicesOpen : item.name === 'COMPANY' ? companyOpen : knowledgeOpen}
                  anchorEl={item.name === 'SERVICES' ? servicesAnchorEl : item.name === 'COMPANY' ? companyAnchorEl : knowledgeAnchorEl}
                  placement="bottom-start"
                  transition
                  disablePortal
                  onMouseEnter={() => {
                    if (closeTimeoutId) {
                      clearTimeout(closeTimeoutId);
                      setCloseTimeoutId(null);
                    }
                  }}
                  onMouseLeave={handleMouseLeave}
                  modifiers={[{
                    name: 'offset',
                    options: {
                      offset: [0, 10],
                    },
                  }]}
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={200}>
                      <Paper elevation={6}>
                        <ClickAwayListener onClickAway={handleMouseLeave}>
                          <Box>
                            {renderSubmenuItems(item.items)}
                          </Box>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </MenuPopper>
              </Box>
            )
          )}
          {renderLanguageSelector()}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 1,
            backgroundColor: 'rgba(139, 195, 74, 0.1)',
            borderRadius: '20px',
            padding: '4px 12px',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(139, 195, 74, 0.2)',
            }
          }}>
            <PhoneIcon sx={{ color: '#8BC34A', mr: 0.5, fontSize: '1.2rem' }} />
            <Typography variant="body2" sx={{ color: '#333', whiteSpace: 'nowrap', fontWeight: 500 }}>
              +91 98111 56389
            </Typography>
          </Box>
        </Box>
        
        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          {renderLanguageSelector()}
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu"
            onClick={handleMobileMenuOpen}
            sx={{ ml: 1, color: '#4B0082' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        
        {/* Mobile Menu */}
        <Menu
          anchorEl={mobileAnchorEl}
          open={mobileMenuOpen}
          onClose={handleMobileMenuClose}
          PaperProps={{
            sx: {
              mt: 1.5,
              width: '100%',
              maxWidth: '300px',
              maxHeight: '80vh',
              overflowY: 'auto'
            }
          }}
        >
          <MenuItem onClick={() => { handleClick(null, 'HOME'); handleMobileMenuClose(); }}>
            {translations['HOME']}
          </MenuItem>
          
          {/* Company Menu */}
          <MenuItem onClick={(e) => {
            toggleCategory('COMPANY-MOBILE');
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              {translations['COMPANY']}
              <KeyboardArrowRightIcon sx={{
                transition: 'transform 0.3s ease',
                transform: expandedCategories['COMPANY-MOBILE'] ? 'rotate(90deg)' : 'rotate(0deg)'
              }} />
            </Box>
          </MenuItem>
          
          {expandedCategories['COMPANY-MOBILE'] && menuItems.find(item => item.name === 'COMPANY').items.map(subItem => (
            <MenuItem 
              key={subItem.name}
              onClick={() => { 
                if (subItem.onClick) subItem.onClick();
                else handleSubmenuClick('COMPANY', subItem.name);
                handleMobileMenuClose();
              }}
              sx={{ pl: 4 }}
            >
              {translations[subItem.name] || subItem.name}
            </MenuItem>
          ))}
          
      {/* Services Menu */}
<MenuItem onClick={() => toggleCategory('SERVICES-MOBILE')}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
    {translations['SERVICES']}
    <KeyboardArrowRightIcon
      sx={{
        transition: 'transform 0.3s ease',
        transform: expandedCategories['SERVICES-MOBILE'] ? 'rotate(90deg)' : 'rotate(0deg)'
      }}
    />
  </Box>
</MenuItem>

{/* Subitems under SERVICES */}
{expandedCategories['SERVICES-MOBILE'] &&
  menuItems.find(item => item.name === 'SERVICES').items.map((subItem, i) => {
    const subItemName = typeof subItem === 'string' ? subItem : subItem.name;
    const hasSubSubItems = typeof subItem !== 'string' && Array.isArray(subItem.items);
    const subKey = `SERVICES-${subItemName}-MOBILE`;

    return (
      <Box key={subItemName}>
        <MenuItem
          onClick={() => {
            hasSubSubItems
              ? toggleCategory(subKey)
              : (handleSubmenuClick('SERVICES', subItemName), handleMobileMenuClose());
          }}
          sx={{ pl: 4 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            {translations[subItemName] || subItemName}
            {hasSubSubItems && (
              <KeyboardArrowRightIcon
                sx={{
                  transition: 'transform 0.3s ease',
                  transform: expandedCategories[subKey] ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              />
            )}
          </Box>
        </MenuItem>

        {/* Sub-Subitems */}
        {hasSubSubItems && expandedCategories[subKey] &&
          subItem.items.map((subSubItem) => {
            const subSubItemName = typeof subSubItem === 'string' ? subSubItem : subSubItem.name;
            return (
              <MenuItem
                key={subSubItemName}
                onClick={() => {
                  if (subSubItemName === 'Client Portal') {
                    window.open('https://management-portal-frontend-three.vercel.app/login', '_blank');
                  } else {
                    handleSubmenuClick(subItemName, subSubItemName);
                  }
                  handleMobileMenuClose();
                }}
                sx={{ pl: 6 }}
              >
                {translations[subSubItemName] || subSubItemName}
              </MenuItem>
            );
          })}
      </Box>
    );
  })}

          
          <MenuItem onClick={() => { handleClick(null, 'CAREERS'); handleMobileMenuClose(); }}>
            {translations['CAREERS']}
          </MenuItem>
       {/* Knowledge Menu */}
<MenuItem onClick={() => toggleCategory('KNOWLEDGE-MOBILE')}>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
    {translations['KNOWLEDGE & EVENTS']}
    <KeyboardArrowRightIcon
      sx={{
        transition: 'transform 0.3s ease',
        transform: expandedCategories['KNOWLEDGE-MOBILE'] ? 'rotate(90deg)' : 'rotate(0deg)'
      }}
    />
  </Box>
</MenuItem>

{/* Subitems under KNOWLEDGE & EVENTS */}
{expandedCategories['KNOWLEDGE-MOBILE'] &&
  menuItems.find(item => item.name === 'KNOWLEDGE & EVENTS').items.map((subItem) => {
    const subItemName = typeof subItem === 'string' ? subItem : subItem.name;
    const hasSubSubItems = typeof subItem !== 'string' && Array.isArray(subItem.items);
    const subKey = `KNOWLEDGE-${subItemName}-MOBILE`;

    return (
      <Box key={subItemName}>
        <MenuItem
          onClick={() => {
            hasSubSubItems
              ? toggleCategory(subKey)
              : (handleSubmenuClick('KNOWLEDGE & EVENTS', subItemName), handleMobileMenuClose());
          }}
          sx={{ pl: 4 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            {translations[subItemName] || subItemName}
            {hasSubSubItems && (
              <KeyboardArrowRightIcon
                sx={{
                  transition: 'transform 0.3s ease',
                  transform: expandedCategories[subKey] ? 'rotate(90deg)' : 'rotate(0deg)'
                }}
              />
            )}
          </Box>
        </MenuItem>

        {/* Sub-Subitems */}
        {hasSubSubItems && expandedCategories[subKey] &&
          subItem.items.map((subSubItem) => {
            const subSubItemName = typeof subSubItem === 'string' ? subSubItem : subSubItem.name;
            return (
              <MenuItem
                key={subSubItemName}
                onClick={() => {
                  handleSubmenuClick(subItemName, subSubItemName);
                  handleMobileMenuClose();
                }}
                sx={{ pl: 6 }}
              >
                {translations[subSubItemName] || subSubItemName}
              </MenuItem>
            );
          })}
      </Box>
    );
  })}

          
          <MenuItem onClick={() => { handleClick(null, 'CONTACT US'); handleMobileMenuClose(); }}>
            {translations['CONTACT US']}
          </MenuItem>
          
          {/* Phone Number */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            m: 1,
            p: 1,
            backgroundColor: 'rgba(139, 195, 74, 0.1)',
            borderRadius: '20px',
            justifyContent: 'center'
          }}>
            <PhoneIcon sx={{ color: '#8BC34A', mr: 0.5, fontSize: '1.2rem' }} />
            <Typography variant="body2" sx={{ color: '#333', fontWeight: 500 }}>
              +91 98111 56389
            </Typography>
          </Box>
        </Menu>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;