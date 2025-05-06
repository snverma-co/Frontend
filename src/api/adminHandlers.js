import { CareerForm, ContactForm, Newsletter } from '../models';

export const getCareerFormSubmissions = async () => {
  try {
    const submissions = await CareerForm.find().sort({ createdAt: -1 });
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error fetching career form submissions:', error);
    return { success: false, message: 'Failed to fetch career form submissions' };
  }
};

export const getContactFormSubmissions = async () => {
  try {
    const submissions = await ContactForm.find().sort({ createdAt: -1 });
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Error fetching contact form submissions:', error);
    return { success: false, message: 'Failed to fetch contact form submissions' };
  }
};

export const getNewsletterSubscriptions = async () => {
  try {
    const subscriptions = await Newsletter.find().sort({ createdAt: -1 });
    return { success: true, data: subscriptions };
  } catch (error) {
    console.error('Error fetching newsletter subscriptions:', error);
    return { success: false, message: 'Failed to fetch newsletter subscriptions' };
  }
};