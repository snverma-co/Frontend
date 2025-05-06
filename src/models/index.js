import mongoose from 'mongoose';

const careerFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  designation: { type: String, required: true },
  state: { type: String, required: true },
  experience: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const contactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const CareerForm = mongoose.model('CareerForm', careerFormSchema);
export const ContactForm = mongoose.model('ContactForm', contactFormSchema);
export const Newsletter = mongoose.model('Newsletter', newsletterSchema);