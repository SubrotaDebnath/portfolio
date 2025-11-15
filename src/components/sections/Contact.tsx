import React from 'react';
import type {ContactProps} from '../../domain/types';
import ContactForm from "../shared/ContactForm.tsx";

const Contact: React.FC<ContactProps> = ({onSubmitMessage}) => {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" className="section-title">Let's Build Something Together</h2>
        <div className="contact-content">
          <p>I'm always interested in new opportunities and exciting projects. Whether you're looking to collaborate or
            just want to say hello, feel free to reach out!</p>
          <ContactForm onSubmit={onSubmitMessage}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
