import React, { useState } from 'react';
import '../styles/Contact.css';
import PixelArtGenerator from '../components/PixelArtGenerator';

function Contact() {
  const [animationSpeed, setAnimationSpeed] = useState(5); // Default speed
  const theme = ['#8E44AD', '#2ECC71', '#3498DB', '#E74C3C'];

  const handleSliderChange = (e) => {
    setAnimationSpeed(Number(e.target.value));
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else {
      // Simple email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = 'Invalid email address';
      }
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const validationErrors = validate();
    if (validationErrors[name]) {
      setErrors({ ...errors, [name]: validationErrors[name] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // For now, just log the form data
      console.log('Form submitted:', formData);
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className="contact">
      <PixelArtGenerator theme={theme} animationSpeed={animationSpeed} />
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="slider-container">
        <label htmlFor="speed-slider">Animation Speed:</label>
        <input
          type="range"
          id="speed-slider"
          min="1"
          max="10"
          value={animationSpeed}
          onChange={handleSliderChange}
        />
      </div>
      {/* Alternatively, include your email and phone number here */}
      <div className="contact-info">
        <p>Email: jmarknanninga@gmail.com</p>
        <p>Email: joshuamarknanninga@gmail.com</p>
        <p>Phone: (210) 419-8684</p>
      </div>
    </section>
  );
}

export default Contact;
