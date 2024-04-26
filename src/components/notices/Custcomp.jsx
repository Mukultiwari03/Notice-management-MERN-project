import React from 'react';
const Custcomp = ({data}) => {
//   const [data, setData] = useState([]);


  return (
    <div>
        <div className="mt-4 flex mx-5 bg-white items-center justify-between px-4 py-2 border-[1px] rounded-sm">
        <div className="flex space-x-4 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <span>
            <p className="text-sm  text-slate-500 ">
              Name / Semester / Contact
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm  text-slate-500 mr-[2.75rem]">
              Purpose / Place
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm text-slate-500">
             In Time / Out Time
            </p>
          </span>
        </div>
      </div>
      {/* overall div  */}
      {data.map((item) => (
        <div key={item._id} className='flex items-center bg-white justify-between px-4 mx-5 py-2 border-x-[1px] border-b-[1px] '>
          {/* customer name/email/... */}
          <div className='flex space-x-4 '>
            <input type="checkbox" className='w-4 h-4 mt-2' />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>{item.name}</p>
              <span><p className='text-sm text-slate-500'>ID:_{item._id}</p></span>
              {/* <span><p className='text-sm text-slate-500'>{item.personalContact}</p></span>/ */}
            </div>
          </div>
          {/* status/gender/... */}
          <div className='flex flex-col space-y-1'>
            <span><p className='text-sm text-slate-500'>{item.email}</p></span>
            {/* <span><p className='text-sm  text-slate-500'>{item.place}</p></span> */}
          </div>
          {/* revenue/order/count... */}
          <div className='flex space-x-4  justify-between'>
            {/* <div className='flex flex-col space-y-1'>
              <span><p className='text-sm text-slate-500'>In:- {formatDateTime(item.inDateTime)}</p></span>
              <span><p className='text-sm text-slate-500'>Out:- {formatDateTime(item.outDateTime)}</p></span>
            </div> */}
            <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Edit</button>
            <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6'>Delete</button>
          </div>
        </div>
      ))}

      
    </div>
  );
};

export default Custcomp;