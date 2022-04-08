import React, { useState } from 'react';

import emailjs from 'emailjs-com';

export function Contact()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
  
    const submit = () => {
      if (name && email && message) {
         // TODO - send mail
         const serviceId = 'service_314469g';
         const templateId = 'template_v0hbjkr';
         const userId = 'BJU4V2BUcwviQPhw8';
         const templateParams = {
             name,
             email,
             message
         };

         emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => console.log(response))
             .then(error => console.log(error));
          setName('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
      } else {
          alert('Please fill in all fields.');
      }
  }

  const isValidEmail = email => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
};

    return(
        <div className="contact_section" id="contact">

<div className="contact">
<h3 className="contact_heading">Contact Me</h3>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Message"  value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button className="send" onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, I will be in touch in no time!</span>
</div>

</div>
    )
};