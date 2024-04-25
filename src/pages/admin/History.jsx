import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Acasample from '../../components/notices/acaSample';
import Unqsample from '../../components/notices/unqSample';

const History = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const fetchNotices = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/getNotices');
                setNotices(response.data.notices);
            } catch (error) {
                console.log("Error while fetching notices: ", error.message);
            }
        };
        fetchNotices();
    }, []);

    return (
      <div className='bg-[#e8e8e8]' >
        <div>
            <h2 className='text-3xl font-bold text-gray-900 text-center py-8'>Past Notices</h2>
        </div>
       <div className='grid grid-cols-12 gap-3 w-[fit-content] md:w-full'>
            {notices.map(notice => {
                if (notice.batch === 'academic') {
                    return <Acasample key={notice._id} noticeData={notice} />;
                } else if (notice.batch === 'The Uniques') {
                    return <Unqsample key={notice._id} noticeData={notice} />;
                }
                return null; 
            })}
        </div>
        </div>
    );
};

export default History;
