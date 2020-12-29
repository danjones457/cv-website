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
    <div className="">
      <form id="contactForm" className="bg-gray-400 rounded-lg p-5 w-4/5 md:w-1/2 absolute top-1/2 transform -translate-y-1/2 float-left text-left" onSubmit={sendEmail}>
        <label className="block text-gray-700 pb-1">Name</label>
        <input type="text" name="user_name" className="rounded-md p-1 mb-2 w-4/5" />
        <label className="block text-gray-700 pb-1">Email</label>
        <input type="email" name="user_email" className="rounded-md p-1 mb-2 w-4/5" />
        <label className="block text-gray-700 pb-1">Message</label>
        <textarea name="message" className="rounded-md p-1 mb-2 w-4/5" />
        <input type="submit" value="Send" className="block" />
      </form>
    </div>
  );
}