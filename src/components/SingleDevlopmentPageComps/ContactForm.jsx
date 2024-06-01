import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-3 border border-black rounded-lg" />
      <input type="email" placeholder="Email" className="w-full p-3 border  border-black rounded-lg" />
      <input type="tel" placeholder="Phone" className="w-full p-3 border border-black rounded-lg" />
      <select className="w-full p-2 border border-black rounded-lg text-fontdark placeholder:text-fontdark">
        <option>Select a topic</option>
      </select>
      <textarea placeholder="Message" className="w-full p-2 border  border-black rounded-lg" rows={6}></textarea>
      <div className="mb-4 flex items-center">
        <input type="checkbox" id="agree" className="mr-2" />
        <label htmlFor="agree" className="text-sm text-fontdark">I agree to receive info by email and I agree to the <a href="#" className="text-primarycolor font-bold">privacy policy</a>.</label>
      </div>

    </form>
  );
};

export default ContactForm;
