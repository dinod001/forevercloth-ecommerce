import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className='mt-40 text-sm'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, expedita!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+97 27 222 3923</li>
            <li>Contact@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className='py-5 text-sm text-center text-gray-500'>
        © 2025 Forever.com — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
