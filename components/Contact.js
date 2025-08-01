import { useState } from 'react';
// --- FIX 1: Updated the package name to resolve the deprecation warning ---
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      reply_to: email,
      message: message,
    };

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setFormMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.error('EmailJS FAILED...', err);
        setFormMessage('An error occurred, please try again.');
      });
  };

  return (
    <section id="contact" className="content-section">
      <h2 className="section-title">Get In Touch</h2>
      {/* --- FIX 2: Replaced the apostrophe in "I'm" --- */}
      <p className="section-paragraph">
        I'm currently available for freelance work and open to discussing new projects. Feel free to reach out!
      </p>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

      {formMessage &&
        <p
          id="form-message"
          style={{ color: formMessage.includes('successfully') ? '#64FFDA' : '#ff6b6b' }}
        >
          {formMessage}
        </p>
      }
    </section>
  );
}