import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Acasample from '../../components/notices/acaSample';
import Unqsample from '../../components/notices/unqSample';

const History = ({ all }) => {
  const [notices, setNotices] = useState([]);
  const [filteredNotices, setFilteredNotices] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');

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

  useEffect(() => {
    let filtered = [...notices];

    if (selectedBatch !== 'All') {
      filtered = filtered.filter(notice => notice.batch === selectedBatch);
    }

    if (all === 'Latest Notices' && selectedDate !== 'All') {
      const currentDate = new Date();
      if (selectedDate === 'Today') {
        filtered = filtered.filter(notice => {
          const noticeDate = new Date(notice.date);
          return noticeDate.toDateString() === currentDate.toDateString();
        });
      } else if (selectedDate === 'This Week') {
        const weekStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay());
        const weekEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 6);
        filtered = filtered.filter(notice => {
          const noticeDate = new Date(notice.date);
          return noticeDate >= weekStartDate && noticeDate <= weekEndDate;
        });
      } else if (selectedDate === 'This Month') {
        const monthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const monthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        filtered = filtered.filter(notice => {
          const noticeDate = new Date(notice.date);
          return noticeDate >= monthStartDate && noticeDate <= monthEndDate;
        });
      }
    }

    setFilteredNotices(filtered);
  }, [all, selectedBatch, selectedDate, notices]);

  const handleBatchChange = (e) => {
    setSelectedBatch(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className='bg-[#f1f1f194]'>
      <div>
        <h2 className='text-3xl font-bold text-gray-900 text-center pt-10'>
          {all === "All Notices" ? "All Notices" : all === "Latest Notices" ? "Latest Notices" : "Past Notices"}
        </h2>
      </div>
      <div className='flex justify-center my-8'>
        <h2 className='text-lg font-bold text-gray-900'>
          Filter Notices by Batch:
        </h2>
        <select
          className='ml-4 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
          value={selectedBatch}
          onChange={handleBatchChange}
        >
          <option value='All'>All</option>
          <option value='academic'>Academic</option>
          <option value='The Uniques'>The Uniques</option>
        </select>
        {(all === 'Latest Notices') && (
          <>
            <h2 className='text-lg font-bold text-gray-900 ml-4'>
              Filter Notices by Date:
            </h2>
            <select
              className='ml-4 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'
              value={selectedDate}
              onChange={handleDateChange}
            >
              <option value='All'>All</option>
              <option value='Today'>Today</option>
              <option value='This Week'>This Week</option>
              <option value='This Month'>This Month</option>
            </select>
          </>
        )}
      </div>
      <div className='grid grid-cols-12 gap-3 w-[fit-content] md:w-full'>
        {filteredNotices.map(notice => {
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
