import React, { useState } from 'react';

const NavStudent = () => {
    const [activeLink, setActiveLink] = useState('allNotices');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="flex justify-center">
            <ul className="flex items-center mr-8">
                <li
                    className={`cursor-pointer ${activeLink === 'allNotices' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'} mr-4`}
                    onClick={() => handleLinkClick('allNotices')}
                >
                    All Notices
                </li>
                <li
                    className={`cursor-pointer ${activeLink === 'latestNotices' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => handleLinkClick('latestNotices')}
                >
                    Latest Notices
                </li>
            </ul>
        </nav>
    );
};

export default NavStudent;
