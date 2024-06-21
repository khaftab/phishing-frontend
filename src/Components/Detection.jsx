import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton'
let abortController = new AbortController();


const Detection = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClear = () => {
    setUrl('');
    setResult(null);
    abortController.abort();
    abortController = new AbortController();
    setLoading(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Dummy data for demonstration purposes
    setResult(null);
    if (!url) {
      toast.error('Please enter a URL to check.');
      return;
    }
    setLoading(true);
    try {
      const result = await axios.post(`${process.env.HOST}/detect`, { url: url.trim() }, { signal: abortController.signal });
      setResult(result.data)
    } catch (error) {
      setLoading(false);
      if (error.response?.status === 403) return toast.error('Invalid URL. Please enter a valid URL.');
      if (axios.isCancel(error)) {
        console.log('Request cancelled by user');
        // abortController = new AbortController();
      }
      console.log(error)
    }
    setLoading(false);
    const dummyData = {
      status: 'Safe', // or 'Phishing'
      metrics: {
        loadingTime: '1.2s',
        domainAge: '5 years',
        subdomainCount: 3,
        urlLength: 45,
        symbolPresence: true,
        iframeCount: 0,
        rightClickFunctionality: true,
      }
    };

    // setResult(dummyData);
  };

  return (
    <section className="bg-blue-700 py-12 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Check a Website for Phishing
          </h2>
          <p className="mt-4 text-lg text-blue-200">
            Enter the URL of the website you want to check for phishing.
          </p>
          <form className="mt-8 flex justify-center">
            <div className='relative w-[35rem]'>
              <input
                type="text"
                className="w-full max-w-xl pl-5 pr-8 py-3 border border-transparent rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              {
                url && (
                  <button
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleClear}
                    type='button'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="red">
                      <path d="M19.2929 4.29289C19.6834 3.90237 20.3166 3.90237 20.7071 4.29289C21.0976 4.68342 21.0976 5.31658 20.7071 5.70711L13.4142 13L20.7071 20.2929C21.0976 20.6834 21.0976 21.3166 20.7071 21.7071C20.3166 22.0976 19.6834 22.0976 19.2929 21.7071L12 14.4142L4.70711 21.7071C4.31658 22.0976 3.68342 22.0976 3.29289 21.7071C2.90237 21.3166 2.90237 20.6834 3.29289 20.2929L10.5858 13L3.29289 5.70711C2.90237 5.31658 2.90237 4.68342 3.29289 4.29289C3.68342 3.90237 4.31658 3.90237 4.70711 4.29289L12 11.5858L19.2929 4.29289Z" />
                    </svg>

                  </button>
                )
              }

            </div>
            <button
              onClick={handleSubmit}
              type='submit'
              className="ml-4 px-5 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>

          </form>
        </div>
        {loading && (
          <div className="mt-12 bg-white rounded-lg shadow px-5 py-6 text-center min-h-[240px]">
            <Skeleton height={30} /> {/* Skeleton for title */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Skeleton count={3} height={20} /> {/* Skeletons for metrics */}
              <Skeleton count={3} height={20} /> {/* Skeletons for metrics */}
              <Skeleton count={2} height={20} /> {/* Skeletons for metrics */}
              <Skeleton count={2} height={20} /> {/* Skeletons for metrics */}
            </div>
          </div>
        )}
        {result && (

          <div className="mt-12 bg-white rounded-lg shadow px-5 py-6 text-center">
            <h3 className={`text-2xl font-bold ${result.Label === 0 ? 'text-green-600' : 'text-red-600'}`}>
              {result.Label === 0 ? `${url} is safe` : `${url} is a phishing website`}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div><strong>Loading Time:</strong> {result.Loading_Time}</div>
              <div><strong>Domain Age:</strong> {result.Domain_Age} days</div>
              <div><strong>Subdomain Count:</strong> {result.Subdomains_Count}</div>
              <div><strong>Fake status bar:</strong> {result.Fake_Status_Bar ? 'Yes' : 'No'}</div>
              <div><strong>Symbol Presence:</strong> {result.Have_At ? 'Yes' : 'No'}</div>
              <div><strong>Prsence of Iframe:</strong> {result.iFrame ? 'Yes' : 'No'}</div>
              <div><strong>Right Click Functionality:</strong> {result.rightClickFunctionality ? 'Not enabled' : 'Enabled'}</div>
              <div><strong>Redirection:</strong> {result.Redirection ? 'Yes' : 'No'}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Detection;
