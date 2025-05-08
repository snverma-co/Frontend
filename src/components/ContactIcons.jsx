import { Box, IconButton, Modal, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { submitIconForm } from '../api/formHandlers';

const IconContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  '&:hover': {
    backgroundColor: '#f5f5f5'
  }
}));

const ContactModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const ModalContent = styled(Box)({
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px',
  width: '300px',
  position: 'absolute',
  bottom: '80px',
  right: '20px'
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  right: '10px',
  top: '10px'
});

const ContactIcons = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    captchaAnswer: ''
  });
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);
  const { translations } = useLanguage();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.captchaAnswer !== '2') newErrors.captcha = 'Please answer the captcha correctly';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await submitIconForm({
          name: formData.name,
          email: formData.email,
          message: formData.message
        });

        if (response.success) {
          setShowThankYou(true);
          setTimeout(() => {
            setShowThankYou(false);
            handleClose();
          }, 3000);

          setFormData({
            name: '',
            email: '',
            message: '',
            captchaAnswer: ''
          });
          setErrors({});
        } else {
          alert(response.message || 'Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(error.message || 'Failed to submit form. Please try again.');
      }
    } else {
      alert('Please answer the captcha correctly');
    }
  };

  return (
    <>
      <IconContainer>
        <StyledIconButton onClick={handleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </StyledIconButton>
        <StyledIconButton onClick={() => window.open('https://wa.me/+916264569092', '_blank')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
          </svg>
        </StyledIconButton>
        <StyledIconButton onClick={() => window.open('https://casnv.com/allevent.aspx', '_blank')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </StyledIconButton>
      </IconContainer>

      <ContactModal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-form-modal"
      >
        {showThankYou ? (
          <ModalContent>
            <Typography variant="h5" component="h2" sx={{ textAlign: 'center', color: '#4CAF50' }}>
              Thank you for your message!
            </Typography>
            <Typography sx={{ textAlign: 'center', mt: 2 }}>
              We will get back to you soon.
            </Typography>
          </ModalContent>
        ) : (
        <ModalContent>
          <CloseButton onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </CloseButton>
          
          <Typography variant="h5" component="h2" sx={{ mb: 4, textAlign: 'center', fontWeight: 700, color: '#1a1a1a', fontSize: '1.8rem', letterSpacing: '0.5px', textTransform: 'none', fontFamily: '"Playfair Display", serif', textShadow: '1px 1px 1px rgba(0,0,0,0.1)' }}>
            {translations['Contact Us']}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={translations['Name']}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              sx={{ mb: errors.name ? 0.5 : 2 }}
            />
            {errors.name && (
              <Typography color="error" variant="caption" sx={{ mb: 1.5, display: 'block' }}>
                {errors.name}
              </Typography>
            )}
            <TextField
              fullWidth
              label={translations['Email']}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              sx={{ mb: errors.email ? 0.5 : 2 }}
            />
            {errors.email && (
              <Typography color="error" variant="caption" sx={{ mb: 1.5, display: 'block' }}>
                {errors.email}
              </Typography>
            )}
            <TextField
              fullWidth
              label={translations['Message']}
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Type your message here"
              sx={{ mb: errors.message ? 0.5 : 2 }}
            />
            {errors.message && (
              <Typography color="error" variant="caption" sx={{ mb: 1.5, display: 'block' }}>
                {errors.message}
              </Typography>
            )}
            <TextField
              fullWidth
              label="What is 1 × 2?"
              name="captchaAnswer"
              value={formData.captchaAnswer}
              onChange={handleInputChange}
              required
              placeholder="Enter your answer"
              sx={{ mb: errors.captcha ? 0.5 : 2 }}
            />
            {errors.captcha && (
              <Typography color="error" variant="caption" sx={{ mb: 1.5, display: 'block' }}>
                {errors.captcha}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#4CAF50',
                color: '#ffffff',
                fontWeight: 700,
                padding: '12px 24px',
                fontSize: '1.2rem',
                textTransform: 'none',
                borderRadius: '25px',
                boxShadow: '0 3px 5px rgba(76,175,80,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '48px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.5px',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s'
                },
                '&:hover': {
                  backgroundColor: '#45a049',
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(76,175,80,0.4)',
                  color: '#ffffff',
                  '&::before': {
                    transform: 'translateX(100%)'
                  }
                },
                '&:active': {
                  transform: 'scale(0.98)',
                  boxShadow: '0 2px 10px rgba(76,175,80,0.3)',
                  color: '#ffffff'
                }
              }}
            >
              {translations['Submit']}
            </Button>
          </form>
        </ModalContent>
      )}      
      </ContactModal>
      
    </>
  );
};

export default ContactIcons;