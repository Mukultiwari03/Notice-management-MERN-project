import React from "react";

const acaSample = ({noticeData}) => {


  return (
    // w-[35rem] h-[40rem]
    <div className=" col-span-12  md:col-span-12  md:mx-auto lg:col-span-6 lg:mx-auto h-[43rem] w-[32rem] drop-shadow-lg bg-white p-10 rounded-sm">
          <div>
            <h2 className="font-bold text-xl">
              Swami Vivekanand Group of Institutes,
            </h2>
            <p className="font-regular">
              Chandigarh Patiala National Highway, Ram Nagar, Banur
            </p>
            <div className="w-full h-[1.5px] bg-slate-400" />
            <div className="flex justify-between">
              <div>
                <p className="text-sm">
                  Ref. No:{" "}
                  <input
                    className="pb-2 pt-1 pe-2 inline-block outline-none border-none align-middle" 
                    type="text"
                    value={noticeData.ref}
                    name="ref"
                    readOnly
                  />
                </p>
              </div>
              <div>
              <p className="text-sm">
          Date:{" "}
          <input
            name="date"
            className="h-[max-content] leading-relaxed  outline-none border-none border-0 pb-2 pe-2 inline-block"     
            value={noticeData.date}
            type="date"
            readOnly
          />
        </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <h2 className="text-lg font-bold underline">Notice</h2>
          </div>
          <div className="text-center mt-5 break-normal">
            <textarea
              className="text-xs mt-4 resize-none h-[100px] tracking-wider w-full outline-none break-normal border-none"
              name="description"
              rows="3"
              value={noticeData.description}
              readOnly
              style={{ wordBreak: "break-word" }}
              wrap="hard"
            ></textarea>
          </div>
          <div className="mt-10">
            <p className="text-sm font-bold ">Principal</p>
            <p className="text-sm font-bold ">SVIET</p>
          </div>
          <div className="mt-8">
            <p className="text-sm underline font-bold">CC to:-</p>
            <p className="text-sm">
              Hon'ble Chairman/President for their kind information;
            </p>
            <p className="text-sm">All Directors/Principals;</p>
            <p className="text-sm">All concerned Officals;</p>
            <p className="text-sm">Notice Board;</p>
            <p className="text-sm">Head of the Accounts.</p>
          </div>
       
    </div>
  );
};

export default acaSample;
