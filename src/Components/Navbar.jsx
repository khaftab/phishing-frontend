import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex-shrink-0">
            <a href="#" className="text-white text-2xl font-bold mr-8">PhishDetect</a>
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#" className="text-base font-medium text-white hover:text-blue-300">Home</a>
            <a href="#" className="text-base font-medium text-white hover:text-blue-300">Features</a>
            <a href="#" className="text-base font-medium text-white hover:text-blue-300">Pricing</a>
            <a href="#" className="text-base font-medium text-white hover:text-blue-300">About Us</a>
            <a href="#" className="text-base font-medium text-white hover:text-blue-300">Contact</a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-white hover:text-blue-300">Sign In</a>
            <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-blue-600 bg-white hover:bg-blue-50">Sign Up</a>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button type="button" className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
