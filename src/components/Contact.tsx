import React, { Component } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/components/Contact.css';

interface ContactState {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  submitMessage: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
}

// Class component for Contact with form state management and validation
class Contact extends Component<{}, ContactState> {
  private submitTimeout?: NodeJS.Timeout;

  // Contact information - in a real app, this could be passed as props
  private contactInfo: ContactInfo = {
    email: 'edz.sagabaen@example.com',
    phone: '+63 123 456 7890',
    location: 'Munoz Nueva Ecija',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      submitStatus: 'idle',
      submitMessage: ''
    };
  }

  componentWillUnmount() {
    if (this.submitTimeout) {
      clearTimeout(this.submitTimeout);
    }
  }

  // Validate email format
  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form field
  validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!this.validateEmail(value)) return 'Please enter a valid email address';
        return '';
      
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 5) return 'Subject must be at least 5 characters';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        return '';
      
      default:
        return '';
    }
  };

  // Handle input change with validation
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));

    // Clear previous error and validate
    const error = this.validateField(name, value);
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        [name]: error
      }
    }));
  };

  // Validate entire form
  validateForm = (): boolean => {
    const { formData } = this.state;
    const newErrors: typeof this.state.errors = {};

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = this.validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof typeof newErrors] = error;
      }
    });

    this.setState({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    if (!this.validateForm()) {
      return;
    }

    // Set submitting state
    this.setState({ isSubmitting: true, submitStatus: 'idle' });

    try {
      // Simulate API call - replace with actual email service
      await this.submitForm(this.state.formData);
      
      // Success state
      this.setState({
        isSubmitting: false,
        submitStatus: 'success',
        submitMessage: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        errors: {}
      });

      // Reset status after 5 seconds
      this.submitTimeout = setTimeout(() => {
        this.setState({ submitStatus: 'idle', submitMessage: '' });
      }, 5000);

    } catch (error) {
      // Error state
      this.setState({
        isSubmitting: false,
        submitStatus: 'error',
        submitMessage: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
      });

      // Reset status after 5 seconds
      this.submitTimeout = setTimeout(() => {
        this.setState({ submitStatus: 'idle', submitMessage: '' });
      }, 5000);
    }
  };

  // Simulate form submission - replace with actual email service (EmailJS, Formspree, etc.)
  submitForm = async (formData: typeof this.state.formData): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate random success/failure for demo
        if (Math.random() > 0.1) { // 90% success rate
          console.log('Form submitted:', formData);
          resolve();
        } else {
          reject(new Error('Simulated error'));
        }
      }, 2000);
    });
  };

  // Handle direct contact methods
  handleEmailClick = () => {
    window.location.href = `mailto:${this.contactInfo.email}`;
  };

  handlePhoneClick = () => {
    window.location.href = `tel:${this.contactInfo.phone}`;
  };

  render() {
    const { formData, errors, isSubmitting, submitStatus, submitMessage } = this.state;

    return (
      <section className="contact" id="contact">
        <div className="contact-container">
          {/* Section Header */}
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get In Touch</h2>
            <p>Have a project in mind or want to discuss opportunities? Let's connect!</p>
          </motion.div>

          <div className="contact-content">
            {/* Contact Information */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Let's Talk</h3>
              <p>
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                who wants to collaborate, I'd love to hear from you.
              </p>

              <div className="contact-methods">
                <div className="contact-method" onClick={this.handleEmailClick}>
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>{this.contactInfo.email}</p>
                  </div>
                </div>

                <div className="contact-method" onClick={this.handlePhoneClick}>
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>{this.contactInfo.phone}</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>{this.contactInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a 
                    href={this.contactInfo.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href={this.contactInfo.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href={this.contactInfo.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={this.handleSubmit} className="contact-form">
                <h3>Send Message</h3>

                {/* Submit Status Messages */}
                {submitStatus !== 'idle' && (
                  <div className={`submit-message ${submitStatus}`}>
                    {submitStatus === 'success' ? (
                      <FaCheckCircle className="status-icon" />
                    ) : (
                      <FaExclamationTriangle className="status-icon" />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={this.handleInputChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={this.handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="Enter your email address"
                      disabled={isSubmitting}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={this.handleInputChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={this.handleInputChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    disabled={isSubmitting}
                  />
                  <div className="character-count">
                    {formData.message.length}/1000
                  </div>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>

                <p className="form-note">
                  * Required fields. I'll respond within 24 hours.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;