import React from "react";

const Contact = () => {
    return (
      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have any questions? Get in touch with our team!</p>
          <form action="/submit" method="post">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
  
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
  
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
  
            <button type="submit" className="cta-button">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  