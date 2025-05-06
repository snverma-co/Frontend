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
            <Typography color="white">Audit & Assurance </Typography>
          </Breadcrumbs>
          
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
          Audit & Assurance
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
          <Tab label="Statutory Assurance" />
          <Tab label="Statutory Audits" />
          <Tab label="Transfer Pricing Audits" />
          <Tab label="Tax Audits" />
          <Tab label="VAT Audits" />
          <Tab label="Management Assurance" />
          <Tab label="Internal Audits" />
          <Tab label="Internal Controls and Compliance Audits" />
          <Tab label="Systems Audits" />
          <Tab label="Socio Assurance" />
          <Tab label="Social Audits" />
          <Tab label="Special Audits & Assessments" />

        </Tabs>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4 }}>
          {tabValue === 0 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  Due to globalization of the Indian economy, the challenges of international competition and ever increasing complexity of information flows have widened the financial, operational, economic and business risks faced by Indian entities. Competitive pressures and increased attention to corporate governance has enhanced the importance of enterprise risk assurance function. With increasing regulatory requirements, disclosure norms and the need for greater transparency in operations, stakeholders' require assurance beyond the traditional critique of numbers. Stakeholders have become more sophisticated, aware and demand greater transparency and uniformity in presentation of financial statements making Assurance a necessity.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  Our Audit and Assurance service professionals provide a range of audit and advisory services to assist clients in achieving their business objectives, managing their risk and improving their business performance.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  A comprehensive audit process is essential to extend credibility to the financial information that stakeholders need to make sound business decisions. Our Audit services extend beyond the conventional/traditional financial reporting function. We take time to understand client's business, its needs and blend this with the sectors in which they operate. Seamless integration of business facts with experience allows us to identify major risks and opportunities that may distinguish between roaring success and complete disaster. We are committed to the highest professional ethics, standards, and principles.
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
          {tabValue === 1 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  In India, there co-exist a number of special diversified corporate and non-corporate entities such as Sole Proprietorship, Partnership Firm, LLP, AOP, BOI, Company, Trust, Non-profit Organization, Co-operative Societies, etc. All these organizations are regulated under various statutory enactments, which require financial assurance and certification.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  The complexity of the regulatory environment coupled with risks faced by such organisations calls for the need for greater transparency in disclosures, stricter liability and accountability of executives and operational management towards the stakeholders. In such an environment of competitive pressures and increased attention to Corporate Governance the importance of Statutory Assurance has enhanced.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  Lunawat is insightful to the needs of such organizations and uses its expertise ensuring adherence with the provisions of applicable laws and their certifications.
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
          {tabValue === 2 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  Globalization has increased the complexity of principles, regulations, disclosures and the cultures in which organizations operate. Increasing litigation, legislation, and regulations carry important compliance implications.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  A Statutory Audit of the financial statements requires an auditor to provide reasonable assurance that the accounts and financials have been prepared in accordance with the Generally Accepted Accounting Principles (GAAP) and Standards on Auditing (SAs), and that they are free from misstatements and errors.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                  Lunawat uses a combination of tailor made systems and controls to obtain audit evidence ensuring adherence with the provisions of Companies Act, 1956 across all organizations including those that are held by the government, publicly listed and privately held. It also fulfills the statutory assurance function for non corporate entities based on the applicable statute and laws relevant to them.
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
  {tabValue === 3 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                The rising volume and variety of inter-company transactions and transfer pricing regulations, accompanied by increased enforcement activities worldwide have made Transfer Pricing a leading risk management issue for global businesses.  Transfer pricing has emerged as a critical success factor in corporate strategic planning and executive decision-making. Companies focused on growth and market leadership have recognized the important role transfer pricing can play in addressing the corporate tax burden, enhancing operational performance, reducing tax compliance exposure and increasing cash flow.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our dedicated team of trained professionals conducts the transfer pricing audit keeping in mind the latest judicial pronouncements, amendments, circulars, notifications and tax accounting standards notified by the CBDT, as applicable for publicly listed, privately held, and other organizations as per the relevant provisions of the taxation laws of India.
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
 {tabValue === 4 && (
            <>
              <Box sx={{ maxWidth: '800px' }}>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                A Tax Audit in India involves an expression of the tax auditors’ opinion on certain financial details, given by an assessee to enable an assessment of its tax, by the Tax Authorities. The said requirement is required under the provisions of Income-tax Act, 1961.                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#666', lineHeight: 1.8, textAlign: 'left' }}>
                Our dedicated team of trained professionals conducts the tax audit keeping in mind the latest judicial pronouncements, amendments, circulars, notifications and tax accounting standards notified by the CBDT, as applicable for publicly listed, privately held, and other organizations under the relevant provisions of Income Tax Act, 1961 and related rules.                </Typography>
                
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
