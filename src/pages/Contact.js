import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        document.getElementById("contactForm").reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="text-left">
      <div className="pb-5">
        <h1 className="text-white text-4xl pb-4">Contact me</h1>
        <p className="text-green">Have questions or comments?</p>
      </div>
      <form id="contactForm" className="w-4/5 md:w-1/2 text-left" onSubmit={sendEmail}>
        <div className="float-left w-1/3 pr-2">
          <label className="block text-green pb-1">Name</label>
          <input type="text" name="user_name" className="rounded-md p-1 mb-2 w-full" />
        </div>
        <div className="float-left w-1/3 pr-2">
          <label className="block text-green pb-1">Email</label>
          <input type="email" name="user_email" className="rounded-md p-1 mb-2 w-full" />
        </div>
        <div className="float-left w-1/3">
          <label className="block text-green pb-1">Subject</label>
          <input type="Subject" name="subject" className="rounded-md p-1 mb-2 w-full" />
        </div>
        <label className="block text-green pb-1">Message</label>
        <textarea name="message" className="rounded-md p-1 mb-2 w-full h-64" />
        <input type="submit" value="Send" className="w-full rounded-md p-2 font-bold text-green bg-gray-900" />
      </form>
    </div>
  );
}