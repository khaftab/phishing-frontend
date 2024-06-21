import logo from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ML-Powered
            <br />
            <span className="text-blue-300">Phishing Website Detection</span>
          </h2>
          <p className="mt-4 text-lg text-blue-200 mb-14">
            Protect yourself from phishing attacks with our advanced machine learning detection system.
          </p>
          {/* <button className="mt-24"> */}
          <a href="#" className=" bg-white text-blue-600 px-5 py-3 rounded-md text-base font-medium">Get Started</a>
          {/* </button> */}
        </div>
        <div className="mt-10 lg:mt-0 lg:w-1/2">
          {/* <img className="mx-auto lg:max-w-lg" src="https://via.placeholder.com/600x400" alt="Phishing Detection" /> */}
          {/* <SvgComponent className="mx-auto max-w-sm lg:max-w-lg" /> */}
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;