import React from "react";
import bg from "../../assests/uniqs.jpg";

const UniquesTemp = ({noticeData}) => {
  

  return (
    <div className="bg-white  col-span-12  md:col-span-12  md:mx-auto lg:col-span-6 lg:mx-auto rounded-sm drop-shadow-lg w-[32rem]">
      <div
        className="mt4 relative"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          width: "126mm",
          minHeight: "180mm",
          margin: "auto",
        }}
      >
        <p className="absolute top-[100px] left-[63px] text-sm w-[11rem]">
          Ref. No:{" "}
          <input
            className="relative top-[3px] left-1 pb-2 pe-2  inline-block leading-[29px]  outline-none border-none align-middle"
            type="text"
            value={noticeData.ref}
            name="reff"
            readOnly
            
          />
        </p>
        <p className="absolute top-[100px] left-[330px] text-sm">
          Date:{" "}
          <input
            name="date"
            className="h-[max-content] leading-relaxed relative top-[3px] left-1 align-middle outline-none border-none border-0 pb-2 pe-2 inline-block "
            value={noticeData.date}
            type="date"
            readOnly
          />
        </p>
        <p
          className="absolute font-semibold text-xl top-[166px] left-[190px]"
          style={{ color: "black" }}
        >
          NOTIFICATION
        </p>
        <p className="">
        <textarea
          name="description"
          value={noticeData.description}
          className="absolute text-xs top-[215px] bg-transparent p-2 outline-none border-none left-[103px] w-[315px] h-[160px]"     
          placeholder="Enter your notification here"
      
          readOnly
        />
        </p>

    </div>

    </div>
  
  );
};

export default UniquesTemp;