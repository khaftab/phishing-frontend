import React from 'react';

const UrlPartsSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              className="h-80 w-[550px] object-cover"
              src="../../public/domain.png"
              alt="Parts of a URL"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">Parts of a URL</h2>
            <p className="mt-4 text-lg text-gray-700">
              A URL (Uniform Resource Locator) consists of several parts that provide information about the location
              and access method of a resource on the web. These parts include the protocol, domain, path, query string,
              and fragment identifier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrlPartsSection;
