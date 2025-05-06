import { Box, Container, Typography, Button, Tabs, Tab, Breadcrumbs, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import ContactSection from './ContactSection';

const ServicesPage2 = () => {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.selectedTab) {
      setTabValue(location.state.selectedTab);
    }
  }, [location.state]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Box
        sx={{
          height: '400px',
          position: 'relative',
          backgroundImage: 'linear-gradient(135deg, rgba(75, 0, 130, 0.85), rgba(76, 175, 80, 0.85)), url(/testimonials-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          color: 'white',
          mb: 4,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '40px',
            background: 'linear-gradient(to top left, #fff 50%, transparent 50%)'
          }
        }}
      >
        <Container>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              mb: 2,
              '& .MuiBreadcrumbs-separator': { color: 'white' },
              '& .MuiLink-root': { color: 'white', textDecoration: 'none' }
            }}
          >
            <Link component={RouterLink} to="/">Home</Link>
            <Typography color="white"> Taxation  </Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          Taxation
          </Typography>
          
          <Button
            variant="contained"
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
            sx={{
              backgroundColor: '#4CAF50',
              '&:hover': { backgroundColor: '#45a049' },
              borderRadius: '25px',
              px: 4
            }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 4,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.95rem' },
              fontWeight: 500,
              color: '#666',
              minHeight: '48px',
              padding: '6px 12px',
              transition: 'all 0.3s ease',
              '&.Mui-selected': {
                color: '#4B0082',
                fontWeight: 600
              },
              '&:hover': {
                color: '#4B0082',
                backgroundColor: 'rgba(75, 0, 130, 0.08)'
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#4B0082',
              height: '3px',
              borderRadius: '3px'
            }
          }}
        >
          <Tab label="Overview" />
          <Tab label="Cross Border Taxation" />
          <Tab label="Double Tax Avoidance Advisory" />
          <Tab label="Transfer Pricing" />
          <Tab label="Taxation Litigation Services" />
          <Tab label="Corporate Taxation Advisorys" />
          <Tab label="Direct Taxation Advisory" />
          <Tab label="Indirect Taxation Advisory" />
          <Tab label="VAT/ GST" />
          <Tab label="Service Tax" />
          <Tab label="Strategic Business Decisions" />
          <Tab label="Succession Planning" />
          <Tab label="Tax Review (Due Diligence)" />

        </Tabs>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
          {tabValue === 0 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Enhancing a stakeholder value is a fundamental concept, which drives every management effort in the modern business environment. Progressive and bottom-line focused managements have realized that taxes should be viewed as a dynamic item of cost, rather than a passive charge on profits.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Indeed, an effective tax-cost management provides a distinct competitive advantage. This requires the application of appropriate tax strategies proactively identified and surgically implemented.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                S N VERMA & Co. assists businesses, organisations and individuals with tax strategy, planning and compliance, whilst also delivering a wide range of business advisory services. We have developed a total tax management capability, which encompasses the entire spectrum of corporate and personal direct taxes.
</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions', 'Socio Assurance', 'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}
          {tabValue === 1 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                In today’s constantly changing global scenario, capital is always in search of lucrative opportunities and businesses are always aspiring to convert their potentials into capabilities. With liberalization playing a key role in Indian policies, it has led to a multitude of multinational companies entering India. Simultaneously Indian companies have established their presence in global markets.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                With the encouragement of foreign direct investment (FDI) inflows into India there has been a liberalization of the Indian taxation scheme, the Government of India has come forward with ways to ensure that non-residents abroad make investments in India which is imperative for the long term growth of the economy. Special tax provisions are enacted in the statue to encourage the foreign investment through special tax concession and incentives.
</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                This interplay of domestic and international taxes incident on companies and individuals often results in complex situations. Converging on an optimum solution requires taking a holistic view on the “total” tax impact rather than a country specific examination.
</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}
          {tabValue === 2 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Today all the businesses are continually challenged to manage the impact of multiple and ever-changing tax jurisdictions. The United Nations, the WTO and the developed nations of the world have all propagated free trade across all geographical barriers and the enhancement of economic development across all frontiers. The joint policy statements made by the heads of the Government of India and the various foreign countries encourage and emphasize the need for transparent cross border transactions. For this purpose the importance of double tax avoidance agreements (DTAA) has become utmost to prevent and mitigate the hardship that can be faced by individuals and companies alike by having to pay taxes in more than one jurisdiction globally. Cross border transactions help in strengthening and enlarging the scope of financial and non-financial activities leading to the achievement of targets of overall growth and prosperity.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our endeavor is to advise our clients through all the stages of the cross border transactions to mitigate the hardship of double taxation by advising on the incidence of tax based on the nature of the income and expenditure incurred keeping as per the provisions of the Indian Tax laws and the provisions of the double tax avoidance agreements, withholding tax issues and the related compliances.
</Typography>
               
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}
          {tabValue === 3 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                As multinationals search for more efficient ways to compete in the global market, cross-border transactions between related companies are increasing in number and complexity. There is a significant increase in disputes globally as more and more tax authorities attempt to enforce their transfer pricing rules aggressively.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The explosive growth in world trade in recent years, and the resulting increase in cross – border transactions between related parties, has catapulted transfer pricing to the forefront of important international tax issues. MNC’s of all sizes are finding their transfer pricing practices under increased scrutiny by tax authorities.
</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
There are extensive Transfer pricing regulations in place in India according to which an arm’s length standard is the frame of reference. Fiscal authorities are policing multinational’s transfer pricing policies aggressively in an attempt to protect their tax base from erosion.
</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
S N VERMA & Co. help the clients develop the appropriate transfer pricing strategy balances opportunity and risk management, weighing effective tax-rate optimizations against fiscal-authority challenges, judicial precedents and the costs of compliance. We help clients ensure that all compliances in India are met and issues under litigation handled effectively.

</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}
          {tabValue === 4 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Tax litigation in India requires a comprehensive approach with the back-up of a sound legal team and tactful handling at appellate fora. The focus of tax assessments is gradually shifting from micro issues (such as, procedural disallowances) to issue based and concept based reviews. Given the legal labyrinth that taxpayers often face, a judicious cost-benefit analysis is imperative in deciding which issues are worthwhile to litigate and on which issues it is more viable to concede. We, with our experience and in-depth knowledge help in making this decision. Complicated direct tax litigation at all levels of the Income tax Authorities is our forte.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We have both the experience and the acumen to represent clients through tax assessments before the tax department including the international tax department assessing foreign entities to tax in India. We also represent clients in transfer pricing assessments before the Transfer Pricing Department and in appellate forums such as Income Tax Appellant Tribunal. We help in mitigating hardship and offer intelligent tax advice in a result oriented manner.
</Typography>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 5 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Corporate taxation is an essential aspect of doing business in India and its importance cannot be undermined. The Indian government has gradually reduced corporate tax rates. The emphasis is now shifting towards enforcing compliance and expanding the tax base with e-governance and digitisation gaining importance. Taxation is also used as a tool to promote investments in identified industry sectors, thereby spurring overall economic growth. As such, understanding the impact of developments in tax and regulatory aspects and strategically using them to the benefit of Indian business activities is becoming increasingly important.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Sound business decisions need to be backed by the right tax advice. Today’s dynamic environment has led to fierce competition. Corporate entities have realized the importance of taxation and its associated cost with efforts to reduce the tax incidence to enable them to provide the much-needed edge over competitors and meet challenges in a dynamic business environment.
</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
Corporate tax consultancy, provided by SNV forms an integral part of the commercially viable business decisions minimizing the cost burden. We adopt a “result oriented approach” which is flexible and emphasizes delivery and value.

</Typography>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 6 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                India’s dynamic environment has led to fierce competition. Not only corporate entities but individuals, HUFs, Partnership Firms, LLPs, etc have realized the importance of taxation and its associated cost with efforts to reduce the tax incidence to enable them to provide the much-needed edge over competitors and meet challenges in a dynamic business environment.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Tax consultancy, provided by Lunawat forms an integral part of the commercially viable business decisions minimizing the cost burden. We adopt a “result oriented approach” which is flexible and emphasizes delivery and value as per the client’s need.

</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
The tax authorities keep abreast with the growing complexities and sophistication of business transactions and have increased the compliance burden with the advent of technological advancements in the last few years. In order to help our clients keep themselves intune with the frequently changing compliances our team offers solutions in an efficient use of technology in a timely and effective manner.


</Typography>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 7 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Indirect taxes pervade every area of a company’s business. Their impact on material and product costs, cash flow, profitability and, ultimately, on shareholder value is an important element to stay ahead in competition

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Despite the various reforms carried out in the past few years, the prevailing Indirect tax regime in India is still in a state of evolution. The system is quite complex, with multi-layered levies both at the Federal and State level. The Federal government levies tax on goods at the point of import (Customs duty), manufacture (Excise duty), inter-state sales (Central sales tax or CST), and on provision of services (Service tax). The states, on the other hand, have been vested with powers to levy tax on sale of goods within the state (Value Added Tax or VAT), and on the entry of goods into the state (Entry tax), under the respective state laws.


</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
The existing regime requires businesses to undertake careful upfront analysis of the tax costs involved in a transaction¸ ensure adequate backup documentation to support their tax positions and constantly explore opportunities for tax optimization. Further, as India is committed to move towards uniform Goods and Services Tax (GST) regime, this needs to be factored in any significant tax approach developed at present.


</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
Our indirect tax professionals with their wide-ranging experience and in-depth knowledge help clients in all of these aspects. Lunawat provide advisory services in respect of the state level Value Added Tax (VAT)/Sales tax, Service tax, and Excise duties and Foreign Trade Policy-related matters. This includes services in relation to setting up a green field venture including review of tax assumptions and analysis of tax exemptions/concessions which could be relevant for the project and tax modelling involving analysis of tax costs and credits impacting the business models.



</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
Further, an indirect tax diagnostic review or health check is a broad-based package offered to our clients. This review helps identify areas of potential tax exposure and tap opportunities for tax savings.




</Typography>
                
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 8 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                VAT, GST, Sales & Use and other similar taxes are broadly based on transactions, and liability will arise regardless of profitability. Because most countries impose these taxes, most transactions are affected. Lunawat & Co helps its clients with timely planning and the application of technology-based compliance management solutions. This helps clients reduce costs, minimize risk and at the same time increase confidence that nothing has been missed. Lunawat & Co has specialised professionals who apart from conducting VAT audits, provide advisory services and a full spectrum of highly efficient outsourcing and co-sourcing solutions.


</Typography>
               
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 9 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The role of service sector in the Indian economy is quite significant. As Service Tax is fast emerging as an important tool of revenue collection for the Central Government, so have the complexities with it. It has become a buzzword in the taxation laws and envisaged as the tax of the future.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                By the Finance Act, 2012, the central Government has changed the taxation of services, where as the earlier, the service tax was levied by adopting “Selective approach” and only specified services were taxed where as now, the Government has adopted the “Comprehensive approach” to tax services, under which all services would be taxable unless any of the services is specifically excluded / exempted. The specific exclusion has been made by preparing a list of negative list of services, on which services tax shall not be imposed.



</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
Taxes may not be totally avoidable, but upfront tax planning provided by us, in parallel with the decision making process helps our client attain the desired results. Our professionals are guided by a single, strong underlying philosophy - "helping our clients attain their business objectives".



</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
S N VERMA & Co. has specialised professionals who take a risk-based approach to service tax audit with a view to help clients to comply with the service tax laws. We go beyond traditional fundamentals and add tangible value. We also provide advisory services and a full spectrum of highly efficient outsourcing and co-sourcing solutions for service tax.




</Typography>

                
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 10 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Businesses today are evolving organically and in-organically through Mergers, De-mergers, Acquisitions, Divestures, Sales, etc achieved through both local and transnational capital flows.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our approach involves competitive preparedness for a smooth transition from an era of regulation and protection to the free trade globalized market of the next millennium, based on a credible track record, to strengthen and nurture core capabilities with a view to attain and sustain a leadership position in the market, aim at specialization, which may involve getting out of investments that are non-core and concentrating on the core competencies of the corporate and allied group companies, restructuring to acquire resources and capabilities required to compete effectively in the revamped dynamic economic environment, a recognition of the fact that only a few players dominate each segment of the market and therefore to restructure/reconstruct a business to be in line with the global trends, restructuring to facilitate joint ventures and alliances.




</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
The tax implication of such strategic business decisions for growth, expansion etc. has to be carefully studied and an efficacious model evolved so that optimum tax benefits accrue to one and all. Our team would review the tax incidence pre and post the strategic business decision as one of the important determinants of the value of the deal. In the exercise of restructuring of companies under the same group, a tax consideration is one of the ‘make or break’ issues.




</Typography>


                
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}

{tabValue === 11 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Despite the radical changes both the local and global markets have gone through over the last decades, family companies still dominate the global economy: Not only are 80 percent of companies worldwide family-owned, they are also to a large extent still managed by members of the founding family. Not surprisingly, India is no exception.



</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The fast-changing business backdrop has also made succession planning – traditionally a difficult issue for family businesses – more crucial than ever. The liberalization of the Indian economy has unleashed globally competitive forces that are likely to reshape the business landscape. Those Indian family run and managed enterprises that have been extremely successful in the past will do well to recognize the importance of market forces and proactively implement action plans to ensure the future survival and growth of their organizations.





</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
We at S N VERMA & Co. understand this crucial need of traditional family owned businesses for succession planning ensuring tax efficiency.





</Typography>


                
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}
{tabValue === 12 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Due Diligence is the analysis and appraisal of an entity in preparation for establishing a relationship with another entity, which involves business risk. The due diligence investigation is normally carried out with the knowledge and co-operation of the management of the entity being investigated.




</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The analysis of various taxes is one of the most complex areas that are encountered during an investigation. We provide expert tax advice through a highly qualified team which has in-depth knowledge, of the entity’s industry and of the tax nuances faced by it.






</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
We also undertake assignments for investigations mandated by the departments like Service Tax Department, VAT department, Investigation Wing (Crime Police), etc.






</Typography>


                
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Cross Border Taxation', 'Double Tax Avoidance Advisory', 'Transfer Pricing', 'Taxation Litigation Services','Corporate Taxation Advisory', 'Direct Taxation Advisory', 'Indirect Taxation Advisory', 'VAT/ GST', 'Service Tax', 'Strategic Business Decisions',  'Succession Planning', 'Tax Review (Due Diligence)'].map((service, index) => (
                    <Button
                      key={index}
                      variant="text"
                      onClick={() => setTabValue(index + 1)}
                      sx={{
                        justifyContent: 'flex-start',
                        color: '#666',
                        textTransform: 'none',
                        transition: 'all 0.3s ease',
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        '&:hover': {
                          color: '#4B0082',
                          bgcolor: 'rgba(75, 0, 130, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </Box>
              </Box>
            </>
          )}


        </Box>
      </Container>
    </Box>
  );
};

export default ServicesPage2;