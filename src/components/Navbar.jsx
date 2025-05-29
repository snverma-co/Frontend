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
  padding: issubmenu ? '6px 12px 6px 24px' : '6px 16px',
  color: '#333',
  fontSize: '0.8rem',
  transition: 'all 0.2s ease',
  borderLeft: '2px solid transparent',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: 1.3,
  position: 'relative',
  '&:before': issubmenu ? {
    content: '"•"',
    position: 'absolute',
    left: '10px',
    color: '#8BC34A',
    fontSize: '0.7rem'
  } : {},
  '&:hover': {
    color: '#8BC34A',
    borderLeft: '2px solid #8BC34A',
    paddingLeft: issubmenu ? '28px' : '20px',
    backgroundColor: 'rgba(139, 195, 74, 0.08)'
  },
  '&.category': {
    fontWeight: 600,
    fontSize: '0.85rem',
    letterSpacing: '0.3px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fafafa',
    padding: '8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

const SubmenuContainer = styled(Box)(({ theme, isvisible }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: isvisible ? '500px' : '0',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease',
  opacity: isvisible ? 1 : 0,
  visibility: isvisible ? 'visible' : 'hidden',
  padding: isvisible ? '4px 0' : '0',
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage, translations } = useLanguage();
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [knowledgeAnchorEl, setKnowledgeAnchorEl] = useState(null);
  const [companyAnchorEl, setCompanyAnchorEl] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});

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
        },
        {
          name: 'Videos'
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





            // Add more utility items here later
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
            'VAT',
            'IGST',
            'UTGST',
            'Compensation Cess',
            'IBC Regulation'






            // Add more utility items here later
          ]
          
        },
        {
          name: 'Links',
          items: [
            'Quick Links',
            'Important Links',
            'GST/VAT Links',
            'Ease Of Doing Business'
           





            // Add more utility items here later
          ]
          
        },
      
        
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

  const handleSubmenuClick = (item, subItem) => {
    if (item === 'HOME') {
      navigate('/');
      window.scrollTo(0, 0);
    } else if (item === 'COMPANY' || item === 'Founder' || item === 'Our Team') {
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
      const tabIndex = ['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].indexOf(subItem);
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
    } else if (item === 'CONTACT US') {
      navigate('/contact');
      window.scrollTo(0, 0);
    } else if (item === 'Calculators') {
      switch(subItem) {
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
    }else if (item === 'UTILITIES') {
      switch(subItem) {
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
    }else if (item === 'Links') {
      switch(subItem) {
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
}  else if (item === 'Bulletins') {
  switch(subItem) {
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
      window.open('#', '_blank', 'noopener');
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
    gu: 'ગુજરાતી'
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

  const renderSubmenuItems = (items) => {
    return (
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 1,
        p: 1.5,
        maxHeight: '70vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#f1f1f1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c1c1c1',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#a8a8a8',
        }
      }}>
        {items.map((item, index) => (
          <Box key={item.name} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            '& > *': { minWidth: 0 },
            backgroundColor: 'rgba(249, 250, 251, 0.8)',
            borderRadius: '6px',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }
          }}>
            <MenuItem 
              className="category" 
              onClick={() => item.items ? toggleCategory(item.name) : handleSubmenuClick(item.name)}
              sx={{ cursor: 'pointer' }}
            >
              {translations[item.name] || item.name}
              {item.items && (
                <KeyboardArrowRightIcon sx={{
                  fontSize: '1rem',
                  transition: 'transform 0.3s ease',
                  transform: expandedCategories[item.name] ? 'rotate(90deg)' : 'rotate(0deg)'
                }} />
              )}
            </MenuItem>
            {item.items && (
              <SubmenuContainer 
                isvisible={expandedCategories[item.name] ? 1 : 0}
                onMouseEnter={() => setExpandedCategories(prev => ({ ...prev, [item.name]: true }))}
              >
                {item.items.map((subItem) => (
                  <MenuItem
                    key={subItem}
                    issubmenu={1}
                    onClick={() => handleSubmenuClick(item.name, subItem)}
                    sx={{ 
                      fontSize: '0.8rem',
                      borderRadius: '4px',
                      my: 0.1,
                      mx: 0.5
                    }}
                  >
                    {translations[subItem] || subItem}
                  </MenuItem>
                ))}
              </SubmenuContainer>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h5" component="div" sx={{
              color: '#4B0082',
              lineHeight: 1.2,
              fontSize: '1.8rem',
              fontWeight: 500,
              fontFamily: '"Playfair Display", serif'
            }}>
              S N VERMA & CO.
            </Typography>
            <Typography variant="subtitle2" sx={{
              color: '#666',
              letterSpacing: '0.5px',
              fontSize: '0.9rem'
            }}>
              {translations['CHARTERED ACCOUNTANTS']}
            </Typography>
          </Box>
        </Box>

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
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
