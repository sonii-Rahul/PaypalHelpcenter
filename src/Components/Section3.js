import React from 'react';

function Section3() {
    return (
        <div className="flex items-center justify-center bg-gray-100 px-2 md:px-0 md:mx-32 md:my-16 p-8">
            <div className='md:p-8'>
                <p className="mt-3 text-sm text-gray-800 md:text-xl">
                    How are we doing?
                </p>
                <p className="mt-4 text-gray-800">
                    Help improve the <span className='font-bold text-black'>Paypal Help Center</span> experience <br /> with some quick feedback
                </p>
            </div>
            <div className="md:mt-6 flex items-center space-x-3">
                <button
                    type="button"
                    className="rounded-full bg-blue-800 px-3 p-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-50"
                >
                    Take the survey
                </button>
            </div>
        </div>
    );
}

export default Section3;
