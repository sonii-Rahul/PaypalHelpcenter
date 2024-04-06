import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const menuItems = [
    {
        name: 'Personal',
        href: '#',
    },
    {
        name: 'Business',
        href: '#',
    },
    {
        name: 'Developer',
        href: '#',
    },
    {
        name: 'Help',
        href: '#',
    },
];

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative w-full bg-white  border-b-2 border-gray-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Paypal.png"
                        alt="Paypal Logo"
                        width="60"
                        height="60"
                    />
                </div>
                <div className="hidden lg:flex grow items-start">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold text-blue-800 hover:text-blue-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:flex m-4">
                    <button
                        type="button"
                        className="rounded-full border-2 border-blue-800 bg-white px-3 py-2 text-sm text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <span className="mx-4">Log In</span>
                    </button>
                </div>
                <div className="hidden lg:flex">
                    <button
                        type="button"
                        className="rounded-full border-2 border-blue-800 bg-white px-3 py-2 text-sm text-blue-800 shadow-sm hover:bg-blue-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        <span className="mx-4">Sign up</span>
                    </button>
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>
                                            <img
                                                src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Paypal.png"
                                                alt="Paypal Logo"
                                                width="30"
                                                height="30"
                                            />
                                        </span>
                                        <span className="font-bold text-blue-800">PayPal</span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                    
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-blue-800 hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-blue-800">
                                                    {item.name}
                                                </span>
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Login
                                </button>
                                <button
                                    type="button"
                                    className="mt-4 w-full rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
