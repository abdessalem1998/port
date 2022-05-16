import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mhdwer1', 'template_lmbx8q8', form.current, 'WNnUcWfbMEjBTlIrq')
      .then((result) => {
        e.target.reset();
      }, (error) => {
        alert(error);
      });
  };
    return (
        <section id="contact">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
          <div className="container contact__container">
            <div className="contact__options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option-icon"/>
                <h4>Email</h4>
                <h5>something@gmail.com</h5>
                <a href="mailto:something@gmail.com" target="_blank">Send me Mail</a>
              </article>
              <article className="contact__option">
                <RiMessengerLine className="contact__option-icon"/>
                <h4>Messanger</h4>
                <h5>Me</h5>
                <a href="https://m.me/abdssalem.houfaf" target="_blank">Send me Message</a>
              </article>
              <article className="contact__option">
                <BsWhatsapp className="contact__option-icon"/>
                <h4>WhatsApp</h4>
                <h5>+213675428944</h5>
                <a href="https://web.whatsapp.com/send?phone=+213675428944" target="_blank">Send me Message</a>
              </article>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="your full name" required />
              <input type="email" name="email" placeholder="your Email" required />
              <textarea name="message" rows="7" placeholder="your Message" required></textarea>
              <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
          </div>
        </section>
    )
}

export default Contact;
