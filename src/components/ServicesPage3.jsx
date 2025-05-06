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
            <Typography color="white">Regulatory Advisory Services   </Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          Regulatory Advisory Services
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
          <Tab label="Corporate Law" />
          <Tab label="Limited Liability Partnership Law" />
          <Tab label="Foreign Exchange Law" />
          <Tab label="Trade Marks" />
         

        </Tabs>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
          {tabValue === 0 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Globalization and liberalization have impacted Corporate India tremendously, over the last 2 decades the activities of the corporate citizen have become more and more complex. Corporate India has undertaken cross border transactions involving foreign investments, formed trade councils, etc. leaving no stone unturned to make its presence felt globally. This dynamic environment, in which a corporate entity functions, is entwined in a complicated legal and regulatory labyrinth requiring compliances at every step.
</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The SNV team helps its clients focus on their business while, it focuses on ensuring compliances and offers advise related services wherever needed.

</Typography>
               
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].map((service, index) => (
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
                Corporate India is governed by the Companies Act, 1956 / Companies Act, 2013 and other allied laws. The business environment has progressed with leaps and bounds as compared to the legislation governing these businesses. The Companies Act, 2013 has brought in many new challenges and compliances.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The changing environment has also brought Compliance to the forefront in India in recent times, with constant amendment to the statutes and the strictures of law, the adherence to the Companies Law, has been made more stringent.

</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                In the face of these continuous changes, we at S N Verma & Co. undertake advisory and compliance related services under the Companies Act, 2013 and the new intended legislation including documentation and registrations required with the Registrar of Companies. Our services in Corporate Law Matters are customized in accordance to client's specific requirements. We assist the client's from the very initial processes of company incorporation to company maintenance process, regulatory compliance, XBRL services, etc.

</Typography>

<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
We also provide specialized services in conversion of Companies into LLP.


</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].map((service, index) => (
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
                A Limited Liability Partnership or LLP is a new type of legal entity, which has been introduced in India in the year 2008; this entity has features of both a company and a partnership firm. It is an alternative corporate business vehicle that would give the benefits of limited liability but would allow its members the flexibility of organizing their internal structure as a partnership based on an agreement amongst its partners.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                LLP Act, 2008 permits partnerships and companies to convert into LLPs.

</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our services in Limited Liability Partnerships (LLP) are customized in accordance to client's specific requirements. LLP being a new legislation in India, we assist the client's from the very initial processes of LLP incorporation including drafting and vetting of LLP Agreements, compliance related to conversion of company or partnership firm into limited liability partnership firms, audits and taxation of LLPs and other routine compliances.

</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].map((service, index) => (
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
                The Foreign Exchange Management Act (FEMA) is the legislation that governs the foreign currency in India with the objective of facilitating external trade, balance of payments and promoting the orderly development and maintenance of the foreign exchange market in India.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                India’s economic policies are designed to attract significant capital inflows into India on a sustained basis and to encourage technology collaborations between Indian concerns and foreign entities. Policy initiatives taken over the last decade by successive finance ministers of India have resulted in inflows of foreign investment in diverse sectors of the economy.

</Typography>

<Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
We provide services to investors to facilitate their investments into India, including advising on investment strategy, consultation for doing business outside India, obtaining permissions for setting up office including assistance for Joint Ventures (JV) and handling other routine compliances including obtaining permissions from RBI under FEMA.


</Typography>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].map((service, index) => (
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
                Developing and owning a brand is a tedious process. Businesses have to see that their brands are duly registered so that there does not arise any infringement. We assist our clients in obtaining registration under Trade Marks Laws.

</Typography>
              
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Corporate Law', 'Limited Liability Partnership Law', 'Foreign Exchange Law', 'Trade Marks'].map((service, index) => (
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
                A VAT Audit in India involves an expression of the auditors’ opinion on certain financial details, given by a dealer registered with VAT authorities to comply with the provisions of the VAT Laws. As VAT is a state subject, the VAT audit compliance varies from state to state.               </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our dedicated team of trained professionals conducts the VAT audit keeping in mind the latest judicial pronouncements, amendments, circulars and notifications as applicable to a dealer registered under relevant VAT authorities.

</Typography>
                
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                In today’s rapidly changing organization’s structures, growing statutory compliances and complex business environment management assurance is very critical for strong corporate governance, risk management, effective internal control and efficient operations.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We assist in effectively managing business risks by ensuring Flawless Processes, Effective Controls and complete compliance to Internal and External Policies, Guidelines and Regulations. These services are tailored to meet individual needs and provide effective support to management in meeting the challenges and opportunities presented by today’s complex business environment.                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our services enable our clients to effectively coordinate their growth with the quality and the operational challenges faced by them.

</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                Risk management is a big concern for both audit committees and senior management in corporate internally. Companies today need experienced internal auditors to address concerns in risk management, enhance internal controls, execute business plans and meet governance responsibilities.                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Apart from the statutory compliance, internal audits provide a number of important services to company management. These include detecting and preventing fraud, testing internal control, and monitoring compliance with company policy and government regulation. Smaller companies may require these functions even more than large companies. A small business simply cannot afford employee fraud, waste, or a government fine. Establishing an internal audit function provides a vital step in the growth of a small business.    </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our experienced audit professionals take a risk-based approach to internal audit with a view to help clients improve performance and operating efficiency. We go beyond traditional fundamentals and add tangible value. We work to build internal audit into a strategic and productive tool in today's corporate governance environment.


</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                The present day complex business and regulation environment has made it essential that a comprehensive and critical review of the internal controls and policies of an organization is done to ensure that leakages in management and statutory compliances are plugged.          </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                A review of the internal controls and compliances is a systematic independent appraisal activity done for an organization to review whether these are commensurate with the nature and size of the organization. It entails, a review of the entire operations, evaluating the actual performances in comparison with predetermined targets. This identifies the cause of variances and helps to formulate corrective actions, providing a comprehensive insight into the functioning and effectiveness of processes to ensure compliance to regulatory requirements.   </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Compliance audit is a critical component of the internal control process for any business and a prerequisite for assessing compliance with corporate performance standards. Whether it is compliance with internal corporate procedures or external regulatory requirements, effective internal auditing is the cornerstone of compliance management and continuous improvement. Effective compliance management protects and enhance clients’ brand and reputation by helping them avoid the adverse affects of non-compliance such as: litigation, fines, prosecution, bad PR, and the risks, costs, liability, and damage to brand reputation associated with non-compliance.




</Typography>
<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
As part of Compliance Audit, we undertake a complete review of all tax and statutory compliance, including procedural requisites, related to income tax, corporate laws, indirect taxes, etc. and provide a comprehensive report to the clients on the existing status of the compliance along with recommended improvements.





</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                Today the world is moving towards better systems and processes, to ensure an organization is strong enough to weather the myriad changes of a dynamic environment. The global shrinkage of the world has made businesses’ rethink their strategy with a fresh perspective not only on compliances with domestic laws but also with global procedures. A review of processes and systems becomes indispensable in such an environment.

</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We conduct a review of systems and process within organizations to critically review that the operations at various levels are flawlessly followed, ensuring effective controls and operating efficiency. We constantly re-engineer our review procedures to meet the increasing expectations of stakeholders and management by navigating the new risk landscape, providing deeper insights and foresight enabling them to cut through the clutter.

</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The results are reviewed and the key findings along with recommendations are presented to the management of organizations, advising them off continuous improvement strategies.


</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                The Socio Assurance services offered by Lunawat aims to supplement the conventional audit of government departments and agencies, NGOs, corporate entities etc. to understand and improve their performance as perceived by the stakeholders in the social context.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Social assurance is a way to document and hold an entity accountable for its social and ethical business practices. It is a process of understanding, measuring, reporting, and most importantly improving the efficiency and effectiveness of the local governance. It is also a way to assure the donor agencies granting the aid of the achievement of the social cause within established budgets and processes.
                </Typography>


              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                Social Audits is a process of evaluation and reporting which is similar, in some respects to a financial audit but focuses on social performance rather than financial performance. It is a tool for evaluating how satisfactorily an organization has discharged its social responsibility. Social Audit is a reform tool aimed at strengthening accountability and transparency in the implementation of projects and policies. It is a method for organization to plan the internal and external consequences of the organization’s social and commercial operations. Social audits are further gaining importance amongst stakeholders due to compliance to be made by the corporate of their corporate social responsibility under the Indian Laws.


</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We conduct our audit in a way so as to fulfill both, financial reporting and social responsibility. Our audit not only focuses on financial records and their scrutiny but it is much more holistic which involves measuring, understanding, and improving the social performance of the organization as a whole. We ensure transparency, reduce leakages, force proper spending of funds, generate trust and peace, and create demand-led improvement in services.


</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We understand and co-relate the concept of corporate social responsibility with our audit engagement to establish a basis of credibility, confidence, and trust in the eyes of the stakeholders, management, and society.



</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
                India is a developing nation, plagued with problems of illiteracy, malnutrition, low human health index, women’s empowerment, slow infrastructure development, etc. Organizations like the World Bank, United Nations, etc. in conjunction with the developed countries of the world give aid to India for such projects ensuring inclusive and sustainable growth. Indian Government also gives aids to various organisations and NGOs for eradication of such problems.



</Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The donor often requires the agency receiving aid to be responsible for the achievement of the social cause within established budgets and processes for their use. An evaluation of the performance of the organization against these is made mandatory.



</Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                We examine and review the standards set not only in terms of the achievability of the monetary targets but also in terms of the actual deliverables of the entity in terms of social cause achieved. Thus the audit conducted by us goes beyond the conventional audit, which merely involves a scrutiny of financial transactions and books of accounts.




</Typography>
<Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
The firm’s fundamental objective in undertaking such audits is to contribute to the inclusive growth envisaged by the Donor Agencies for a better India.





</Typography>
              </Box>
              <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: '20px', maxHeight: 'calc(100vh - 40px)', overflowY: 'auto', transition: 'transform 0.3s ease', '&:hover': { transform: 'translateY(-5px)' } }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#333', fontWeight: 'bold' }}>Related Services</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {['Statutory Assurance', 'Statutory Audits', 'Transfer Pricing Audits', 'Tax Audits', 'VAT Audits', 'Management Assurance', 'Internal Audits', 'Internal Controls and Compliance Audits', 'Systems Audits', 'Socio Assurance', 'Social Audits', 'Special Audits & Assessments'].map((service, index) => (
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
