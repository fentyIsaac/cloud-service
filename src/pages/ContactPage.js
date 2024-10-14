import React from 'react';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <div className="container-form my-4">
      <h1 className="text-primary">Contact Us</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            <i className="bi bi-person-fill"></i> Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <i className="bi bi-envelope-fill"></i> Email
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            <i className="bi bi-chat-dots-fill"></i> Message
          </label>
          <textarea className="form-control" id="message" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
