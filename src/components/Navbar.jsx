import { AppBar, Toolbar, Typography, Button, Box, Container, Menu, MenuItem as MuiMenuItem, IconButton, Select, FormControl, Stack, Popper, Paper, Grow, ClickAwayListener, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../translations/translations';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: '#fff',
  boxShadow: 'none',
  borderBottom: '1px solid #eee'
}));

const StyledButton = styled(Button)(({ theme, isactive }) => ({
  color: isactive ? '#8BC34A' : '#333',
  textTransform: 'none',
  transition: 'all 0.3s ease',
  margin: '0 8px',
  position: 'relative',
  padding: '8px 16px',
  borderRadius: '4px',
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
  width: '100%',
  '& .MuiPaper-root': {
    position: 'relative',
    left: '-70px',
    transform: 'translateX(-50%)',
    backgroundColor: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '90vw',
    maxWidth: '1000px',
    marginTop: '4px',
    border: '1px solid rgba(0,0,0,0.06)',
    backdropFilter: 'blur(12px)',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
  }
}));

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  padding: '8px 16px',
  color: '#333',
  fontSize: '0.8rem',
  transition: 'all 0.2s ease',
  borderLeft: '2px solid transparent',
  whiteSpace: 'normal',
  wordWrap: 'break-word',
  lineHeight: 1.4,
  '&:hover': {
    color: '#8BC34A',
    borderLeft: '2px solid #8BC34A',
    paddingLeft: '20px',
    backgroundColor: 'rgba(139, 195, 74, 0.08)'
  },
  '&.category': {
    fontWeight: 600,
    fontSize: '0.85rem',
    letterSpacing: '0.3px',
    borderBottom: '1px solid #eee',
    backgroundColor: '#fafafa',
    padding: '10px 16px'
  }
}));

const Navbar = () => {
  const navigate = useNavigate();
  const { currentLanguage, changeLanguage, translations } = useLanguage();
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [knowledgeAnchorEl, setKnowledgeAnchorEl] = useState(null);
  const [companyAnchorEl, setCompanyAnchorEl] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

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
          name: 'Our Team'
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
        }
      ]
    },
    'CONTACT US'
  ];

  const [closeTimeoutId, setCloseTimeoutId] = useState(null);

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
    } else if (item === 'COMPANY' || item === 'Founder') {
      if (subItem === 'Founder' || item === 'Founder') {
        navigate('/company');
        window.scrollTo(0, 0);
      } else if (subItem === 'Our Team') {
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
          navigate('/gst-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Income Tax Calculator':
          navigate('/income-tax-calculator');
          window.scrollTo(0, 0);
          break;
        case 'TDS Calculator':
          navigate('/tds-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Calculate Net Profit':
          navigate('/net-profit-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Calculate Net Worth':
          navigate('/net-worth-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Effective Calculator':
          navigate('/effective-calculator');
          window.scrollTo(0, 0);
          break;
        case 'HRA':
          navigate('/hra-calculator');
          window.scrollTo(0, 0);
          break;
        case 'NSC':
          navigate('/nsc-calculator');
          window.scrollTo(0, 0);
          break;
        case 'EMI':
          navigate('/emi-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Auto Loan Calculator':
          navigate('/auto-loan-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Home Loan Calculator':
          navigate('/home-loan-calculator');
          window.scrollTo(0, 0);
          break;
        case 'Get No. Of Installment':
          navigate('/installment-calculator');
          window.scrollTo(0, 0);
          break;
        default:
          break;
      }
    }
    setServicesAnchorEl(null);
    setKnowledgeAnchorEl(null);
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
        p: 1.5
      }}>
        {items.map((item, index) => (
          <Box key={item.name} sx={{ display: 'flex', flexDirection: 'column', '& > *': { minWidth: 0 } }}>
            <MenuItem 
              className="category" 
              onClick={() => handleSubmenuClick(item.name)}
              sx={{ cursor: 'pointer' }}
            >
              {translations[item.name] || item.name}
            </MenuItem>
            {item.items && item.items.map((subItem) => (
              <MenuItem
                key={subItem}
                onClick={() => handleSubmenuClick(item.name, subItem)}
                sx={{ fontSize: '0.9rem' }}
              >
                {translations[subItem] || subItem}
              </MenuItem>
            ))}
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
              color: '#333',
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
                  endIcon={<KeyboardArrowDownIcon />}
                  isactive={activeSubmenu === (item.name === 'SERVICES' ? 'services' : item.name === 'COMPANY' ? 'company' : 'knowledge') ? 1 : 0}
                  sx={{ fontSize: '0.9rem', py: 1, px: 1.5 }}
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
                >
                  {({ TransitionProps }) => (
                    <Grow {...TransitionProps} timeout={200}>
                      <Paper>
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
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <PhoneIcon sx={{ color: '#8BC34A', mr: 0.5, fontSize: '1.2rem' }} />
            <Typography variant="body2" sx={{ color: '#333', whiteSpace: 'nowrap' }}>
              +91 98111 56389
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;