import React from 'react';
import Navbar from './components/Navbar';

const Aboutus = () => {
  return (
    <>
    <Navbar />
      <div className="min-h-screen bg-white font-bold text-black p-6">
        <h2 className="text-blue-600 font-bold text-2xl">QuickRent</h2>
        <p className="mt-4">
          Discover the perfect blend of style, comfort, and functionality with our curated collection of homes and offices. Whether you're looking for a cozy family home or a state-of-the-art office space, we provide options that suit your unique needs and preferences.
        </p>
        
        <h2 className="text-red-600 font-bold text-xl mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Wide Variety of Listings:</strong> Explore a diverse range of properties across prime locations.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> Find the best spaces within your budget without compromising on quality.
          </li>
          <li>
            <strong>Verified Properties:</strong> Every listing is carefully vetted to ensure authenticity and reliability.
          </li>
          <li>
            <strong>User-Friendly Platform:</strong> Easily navigate, compare, and book your ideal property in just a few clicks.
          </li>
        </ul>
        
        <h2 className="text-yellow-600 font-bold text-xl mt-6">Residential Homes</h2>
        <p className="mt-2">Comfortable and modern homes tailored for families and individuals.</p>
        
        <h2 className="text-yellow-600 font-bold text-xl mt-6">Office Spaces</h2>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>
            <strong>Office Spaces:</strong> Dynamic workspaces that foster creativity and productivity.
          </li>
          <li>
            <strong>Custom Recommendations:</strong> Personalized suggestions based on your specific requirements.
          </li>
        </ul>
        
        <h2 className="text-blue-600 font-bold text-xl mt-6">Get Started</h2>
        <p className="mt-2">
          Start exploring today and unlock the possibilities of your dream space. Together, let's make it happen.
        </p>
        <p className="mt-4">
          For inquiries, feel free to contact us at <span className="text-blue-600">7217545217</span>.
        </p>
      </div>
    </>
  );
};

export default Aboutus;

