import React from 'react';

function Footer() {
    // Define an array of footer links
    const footerLinks = [
        { label: 'Help', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Fees', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Apps', href: '#' },
        { label: 'Shop', href: '#' },
        { label: 'Enterprise', href: '#' },
        { label: 'Partner', href: '#' }
    ];
    const footerLinks2 = [
        { label: 'About', href: '#' },
        { label: 'newsrooms', href: '#' },
        { label: 'Investor Relation', href: '#' },
        { label: 'value in action', href: '#' },
        { label: 'pyblic policy', href: '#' },

    ];
    const footerLinks3 = [
        { label: 'Accessibility', href: '#' },
        { label: 'privacy', href: '#' },
        { label: 'cookies', href: '#' },
        { label: 'legal', href: '#' },


    ];

    return (
        <footer className="bg-white py-8">
            <div className="container mx-auto px-4 ">
                {/* First row of footer */}
                <div className="flex flex-wrap items-center justify-between">
                    {/* Footer Links */}
                    <div className="w-full md:w-5/6 lg:w-5/6 mb-4 md:mb-0">
                        <ul className="md:flex md:flex-wrap">
                            {footerLinks.map((link, index) => (
                                <li key={index} className="p-4 text-center">
                                    <a className="font-small text-sm text-blue-800 font-bold hover:text-gray-700" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Indian Flag Image */}
                    <div className="hidden md:block lg:w-auto">
                        <div className="w-8 h-6 flex items-center justify-center">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/004/757/123/original/india-flag-free-vector.jpg"
                                alt="Indian Flag"
                                className="w-14 h-full object-cover"
                            />
                            {/* Add other social media icons here */}
                        </div>
                    </div>
                </div>
                {/* Line Separator */}
                <div className="container mx-auto px-4 ">
                    <hr className="border-gray-300" />
                </div>

                {/* Second row of footer */}
                <div className="flex flex-wrap items-center justify-between">
                    {/* First set of items */}
                    <div className="w-full md:w-3/5 mb-4 md:mb-0 ">
                        <ul className="md:flex md:flex-wrap ">
                            {footerLinks2.map((link, index) => (
                                <li key={index} className="p-2 text-center">
                                    <a className="font-small text-sm text-blue-800 font-bold hover:text-gray-700" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Second set of items */}
                    <div className="w-full md:w-2/5 flex md:justify-end justify-center">
                        <ul className="md:flex md:flex-wrap">
                            {footerLinks3.map((link, index) => (
                                <li key={index} className="p-2 text-center">
                                    <a className="font-small text-sm text-blue-800 font-bold hover:text-gray-700" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
