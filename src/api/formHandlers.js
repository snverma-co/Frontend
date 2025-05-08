const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const submitCareerForm = async (formData) => {
  try {
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'designation', 'state', 'experience', 'position', 'resume'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      return { 
        success: false, 
        message: `Missing required fields: ${missingFields.join(', ')}`
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    // Validate phone format
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      return { success: false, message: 'Please enter a valid phone number' };
    }

    // Validate resume data
    if (!formData.resume.startsWith('data:')) {
      return { success: false, message: 'Invalid resume file format' };
    }

    const response = await fetch(`${API_BASE_URL}/career`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
      throw new Error('Invalid server response');
    }

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit career form');
    }

    return result;
  } catch (error) {
    console.error('Career form submission error:', error);
    return {
      success: false,
      message: error.message || 'Failed to submit career form. Please try again.'
    };
  }
};

export const submitContactForm = async (formData) => {
  try {
    if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.services || !formData.message) {
      throw new Error('All fields are required');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      return { success: false, message: 'Please enter a valid phone number' };
    }

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    let errorMessage = 'Failed to submit contact form';
    if (!response.ok) {
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch (parseError) {
        console.error('Error parsing response:', parseError);
        if (response.status === 500) {
          errorMessage = 'Server error. Please try again later.';
        } else if (response.status === 503) {
          errorMessage = 'Service temporarily unavailable. Please try again later.';
        }
      }
      throw new Error(errorMessage);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw new Error(error.message || 'Failed to submit contact form');
  }
};

export const submitIconForm = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return { success: false, message: 'All fields are required' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { success: false, message: 'Please enter a valid email address' };
    }

    const response = await fetch(`${API_BASE_URL}/icon-contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    let result;
    try {
      result = await response.json();
    } catch (parseError) {
      console.error('Error parsing response:', parseError);
      return {
        success: false,
        message: 'Server error. Please try again later.'
      };
    }

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit contact form'
      };
    }

    return {
      success: true,
      message: 'Form submitted successfully'
    };
  } catch (error) {
    console.error('Icon contact form submission error:', error);
    return {
      success: false,
      message: 'Failed to submit contact form. Please try again.'
    };
  }
};

export const submitNewsletter = async (email) => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message || 'Failed to subscribe to newsletter');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
};