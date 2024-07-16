import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import profile from '../../assests/profile.jpg';
import person from '../../assests/person.jpg';
import History from '../admin/History';

const Student = () => {
    const [activeLink, setActiveLink] = useState('allNotices');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <Navbar />
            <div
                className='h-[24.325rem] w-full flex items-end bg-[#f1f1f194] justify-center'
                style={{
                    background: `url(${profile}) no-repeat center center/cover`,
                    filter: 'brightness(70%)', // Reduce brightness for dull effect
                }}
            >
                <div className="relative top-20 text-center">
                    <img
                        src={person}
                        width={100}
                        height={100}
                        className='rounded-full border-2  border-white'
                        alt="Person"
                        style={{ boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)', filter: 'brightness(100%)' }} // Adding a shadow effect
                    />
                    <p className='text-lg'>Hi, there!</p>
                </div>
            </div>

            {/* nav all notices and all */}
            <div className='pt-[6rem] text-center p-0 sm:pl-8 bg-[#f1f1f194] '>
                <div className='bg-slate-700 w-[25rem] md:w-[36rem] h-[0.5px] mx-auto mb-3'></div>
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
            </div>

            {/* Conditionally render the History component based on active link */}
            {activeLink === 'allNotices' && <History all="All Notices"/>}
            {activeLink === 'latestNotices' && <History all="Latest Notices"/>}
        </div>
    );
};

export default Student;
