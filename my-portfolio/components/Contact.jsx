import React from 'react';

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle the form submission here (e.g., send an email or save the data to a database)
      console.log('Form Data:', formData);
      // Clear the form fields after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    };
  
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
  
          <button type="submit">Send Message</button>
        </form>
        <p>Email: <a href="mailto:adamcastle09@icloud.com">adamcastle09@icloud.com</a></p>
        <p>Phone: +27 682414225</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/adam-castle-3b57b5243/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/adam-castle-3b57b5243/</a></p>
        <p>GitHub: <a href="https://github.com/BlazeTheGr8" target="_blank" rel="noopener noreferrer">https://github.com/BlazeTheGr8</a></p>
      </div>
    );
  };
  
  export default Contact;