import { Box, Container, Typography, Button, Tabs, Tab, Breadcrumbs, Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { ContactSection } from './ContactSection';



const ServicesPage = () => {
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
            background: 'linear-gradient(to top left, #fff 50%, transparent 50%)',
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
            <Typography color="white">Transaction Advisory Services  </Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          Transaction Advisory Services

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
          <Tab label="Business Valuations" />
          <Tab label="Capital Services" />
          <Tab label="Corporate Finance Advisory" />
          <Tab label="Mergers, Acquisitions & Re-structuring" />
          <Tab label="Negotiation & Transaction Management" />
          <Tab label="Sales, Divestitures & Demergers" />
          <Tab label="Transaction Evaluation (Due Diligence)" />
         

        </Tabs>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
          {tabValue === 0 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                The liberalization of the Indian economy and the multitude of reforms instituted have resulted in a “flux” in the industrial and services sector of India. Companies are increasingly resorting to acquisitions as a means to consolidate and grow rapidly.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                The emergence of a large number of professional Private Equity and Venture Capital firms, the increasing maturity of capital markets, in terms of the large number of institutional players and improved systems, has provided myriad opportunities in structuring innovative deals by raising debt or arranging equity financing for Corporates.


</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
The ongoing liberalization programme of the Government is also expected to gain momentum resulting in significant opportunities in the market for Disinvestments, induction of strategic partners, Joint-ventures, spin-offs, etc.



</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
Through our internally developed approaches and methodologies, vast knowledge, expertise, networking and experience assimilated in the last 4 decades, we believe that we have a good understanding of our clients’ needs and requirements. We are well equipped to meet the fast changing and evolving requirements, so as to provide our clients with effective solutions that would exceed their shareholders’ value creation expectations. We help organisations work smarter and grow faster. Reach out to us to build effective organisations, reduce costs, manage risk and regulation and leverage talent.




</Typography>
               
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                S N VERMA & Co.’s valuation practice gathers information by understanding the specific industry in which the client operates and provides proactive commercial and market – focused data. Our analysis provides clear, concise and credible advice that will add value in negotiating transactions, assisting in the restructuring process or segregating costs of an asset.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                S N VERMA & Co.’s professionals along with our expert associates provide independent advice to directors, shareholders or management to:


</Typography>
                <Box component="ul" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify', pl: 3 }}>
                  <Box component="li" sx={{ mb: 1 }}>Business Valuations – determine the right price to pay or accept for a business</Box>
                  <Box component="li" sx={{ mb: 1 }}>Determine the value of equity to be issued to new shareholders or partners</Box>
                  <Box component="li" sx={{ mb: 1 }}>Evaluate merger / swap ratios</Box>
                  <Box component="li" sx={{ mb: 1 }}>Evaluate and defend an unwelcome and unsolicited takeover bid</Box>
                  <Box component="li" sx={{ mb: 1 }}>ESOP Valuations</Box>
                  <Box component="li" sx={{ mb: 1 }}>Valuations for Purchase Price Allocation in a Slump Sale</Box>
                </Box>


              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                The Capital services offered by the Firm is through a good network of Private Equity, Venture Capital, Institutional, Angel and High Net-worth Individual investors that it works with globally to understand what each investor brings to the table and what they look for in potential investees.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Once we understand a client’s business and capital needs we will be able to find the right partner who brings more than just capital. We conduct a thorough analysis of the business, prepare the most relevant materials and run a systematic marketing process to find the best investor for our clients


</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                We also assist in, advising corporations, institutions and sovereign entities on the structure of new debt issues and the refinancing of existing obligations, provide advice on refinancing of acquisitions to replace short – term finance with more efficient long – term solutions from the banking sector or the capital markets, help create and implement efficient financing, including both domestic and transnational leasing transactions and provide advice on refinancing of asset-based businesses and the design and financing of novel solutions in vendor financing.


</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Within the commercial framework of a deal, a wide range of financing and structuring options are possible.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                We focus our approach on the most effective options in terms of cost and tax efficiency and provide advice on the alternatives available for all types of corporate transactions including mergers and acquisitions and leveraged buyouts.


</Typography>


                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                The growth of the corporate sector in the recent years coupled with the liberalization and globalization of the Indian economy has made the subject of business restructuring and reorganization of great interest to businessmen and professionals alike. Various policy changes have made Indian managements review their business plans in the context of size, reach and global access. Businesses today need to not only to be in a position to survive but also to grow, diversify and consolidate their areas of best practices.


</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
We provide corporate restructuring through a variety of mechanisms, including mergers, acquisitions, divestures, sales etc. assisting clients through its internally developed approaches and methodologies in the entire transaction process-ranging from providing indicative values to deal closure.



</Typography>
<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
Our approach involves competitive preparedness for a smooth transition from an era of regulation and protection to the free trade globalized market of the next millennium, based on a credible track record, to strengthen and nurture core capabilities with a view to attain and sustain a leadership position in the market, aim at specialization, which may involve getting out of investments that are non-core and concentrating on the core competencies of the corporate and allied group companies, restructuring to acquire resources and capabilities required to compete effectively in the revamped dynamic economic environment, a recognition of the fact that only a few players dominate each segment of the market and therefore to restructure/reconstruct a business to be in line with the global trends, restructuring to facilitate joint ventures and alliances. We help our clients at every stage of the restructuring exercise keeping in mind the future and the opportunities it brings, by providing competent financial advice.




</Typography>
              
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Even when a deal has been agreed on, there is still a significant amount of work that needs to be completed. Effective time and resource management is critical to the successful completion of a transaction. Our services include setting up and monitoring the timetable, taking each step forward towards completion and working closely with other professionals working on the transaction. We tailor our services to the needs of our clients and provide them with regular progress reports.

</Typography>
                <Box component="ul" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify', pl: 3, mb: 3 }}>
                  <Box component="li" sx={{ mb: 1 }}>Discussing the valuation</Box>
                  <Box component="li" sx={{ mb: 1 }}>Negotiation of financial terms</Box>
                  <Box component="li" sx={{ mb: 1 }}>Outlining preferable terms</Box>
                  <Box component="li" sx={{ mb: 1 }}>Briefly describing tax and accounting consequences of each proposal</Box>
                  <Box component="li" sx={{ mb: 1 }}>Suggesting counter proposal alternatives</Box>
                  <Box component="li" sx={{ mb: 1 }}>Communicating with interested parties</Box>
                  <Box component="li" sx={{ mb: 1 }}>Reporting potential problems</Box>
                  <Box component="li" sx={{ mb: 1 }}>Attending and assisting in all negotiating sessions leading to a transaction</Box>
                  <Box component="li" sx={{ mb: 1 }}>Helps manage the negotiation process and achieve successful implementation without undue delay</Box>
                </Box>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                With the opening up of the Indian economy, and the inflow of large multinational corporations, the businesses earlier protected by regulatory entry barriers are now faced with relentless competition. This has led to a virtual shakeout in almost all industries propagated with the “survival of the fittest theory” the weaker players have either opted to close shop or sell out.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                Working with our clients we start with the strategy and consider what the best options could be. We establish price expectations and realistic valuation parameters taking into account taxation and other industry norms to ensure the most beneficial structure for sale.

</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                We also identify and assess prospective purchasers, nationally and internationally. We design the process to maximize proceeds for the vendor whether by competitive bidding or other methodologies.


</Typography>

<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
Our approach involves our strength to nurture the core capabilities with a view to attain and sustain a leadership position in the market, aim at specialization, which may involve divesting from non-core investments and concentrating on the core competencies. We help our clients at every stage of the exercise keeping in mind the future and the opportunities it brings, by providing competent financial advice.



</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                The term due diligence describes a general duty to exercise care in any transaction. It spans investigation into all relevant aspects of the past, present, and predictable future of the business of a company.

</Typography>
<Box component="ul" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify', pl: 3 }}>
                  <Box component="li" sx={{ mb: 1 }}>Confirmation that the business is what it appears to be;                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>Identify potential “deal killer” defects in the target and avoid a bad business transaction;                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>Gain information that will be useful for valuing assets, defining representations and warranties, and/or negotiating price concessions; and                  </Box>
                
                </Box>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'justify' }}>
                At S N VERMA & Co., we believe that effective due diligence depends on identifying and managing significant transaction issues, anticipating and identifying potentially important risk and negotiation issues. Our approach is to save time, money and effort as well as to help in influencing the price at the outset of the deal.



</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Business Valuations', 'Capital Services', 'Corporate Finance Advisory', 'Mergers, Acquisitions & Re-structuring', 'Negotiation & Transaction Management', 'Sales, Divestitures & Demergers', 'Transaction Evaluation (Due Diligence)'].map((service, index) => (
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
      <ContactSection />
    </Box>
  );
};

export default ServicesPage;
