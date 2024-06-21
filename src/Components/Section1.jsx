import logo from "../assets/security.svg";

const PhishingInfoSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-900">What are Phishing Links?</h2>
            <p className="mt-4 text-lg text-gray-700">
              Phishing links are malicious URLs designed to trick users into divulging sensitive information such as
              passwords, credit card numbers, or personal data. They often mimic legitimate websites to deceive users.
            </p>
          </div>
          <div className="text-center">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhishingInfoSection;
