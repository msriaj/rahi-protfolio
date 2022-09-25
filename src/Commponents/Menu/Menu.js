import React from 'react';
import menLogo from './logo.png';
import menubtn from './navbtn.png';
const Menu = () => {
    return (
        <div>
            <header className="text-gray-600 body-font w-10/12 mx-auto">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='w-16' src={menLogo} alt="" />

                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 text-white hover:text-gray-500">First Link</a>
                        <a className="mr-5 text-white hover:text-gray-500">Second Link</a>
                        <a className="mr-5 text-white hover:text-gray-500">Third Link</a>
                        <a className="mr-5 text-white hover:text-gray-500">Fourth Link</a>
                    </nav>
                    <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0">
                        <img src={menubtn} alt="" />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Menu;