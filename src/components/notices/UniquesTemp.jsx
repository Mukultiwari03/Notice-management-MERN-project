import React, { useRef, useState } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
import bg from "../../assests/uniqs.jpg";
// import bg from "../../assests/asd.jpg";
import axios from "axios";
const UniquesTemp = () => {
  const divRef = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  // const [data, setData] = useState({
  //   ref: "SVGOI/THEUNIQUES/2023/30",
  //   date: "",
  //   description: "This is to inform that on 8th December 2023, a technical test covering the yet completed syllabus would be conducted for the members of Uniques 2.0 batch. Everyone's attendance is mandatory. \nFor any questions or concerns, please do not hesitate to contact our office.",
  // });

  const [noticeData, setNoticeData] = useState({
    ref: "SVGOI/THEUNIQUES/2023/30",
    date: "",
    description: "This is to inform that on 8th December 2023, a technical test covering the yet completed syllabus would be conducted for the members of Uniques 2.0 batch. Everyone's attendance is mandatory. \nFor any questions or concerns, please do not hesitate to contact our office.",
    batch: "The Uniques",
  });
  const handleEditToggle = async () => {
    setIsEditable(!isEditable);
    if (isEditable) {
      try {
        await axios.post('http://127.0.0.1:4000/api/v1/createNotice', noticeData);
        console.log("Notice data sent successfully");
      } catch (error) {
        console.log("Error while sending notice data to the backend: ", error.message);
      }
    }
  }

  const changeHandler = (e) => {
    setNoticeData({ ...noticeData, [e.target.name]: e.target.value });
  };

  const printDocument = () => {
    const input = divRef.current;

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "JPEG", -4, 0, imgWidth, imgHeight);
      try{

      }catch(err){
        console.log(err)
      }
      pdf.save("download.pdf");
    });
  };

  return (
    <div >
      <div className="w-[50rem] mx-auto">
      <div className="flex justify-end my-10">
      <button
          onClick={handleEditToggle}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded"
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      <button
          onClick={printDocument}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 ml-4 rounded"
        >
          Download PDF
        </button>
      </div>
      </div>
   
      <div
        ref={divRef}
        className=" relative drop-shadow-lg rounded-md"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          width: "210mm",
          minHeight: "297mm",
          margin: "auto",
        }}
      >
        <p className="absolute top-[180px] left-[100px] text-[15px]">
          Ref. No:{" "}
          <input
            className={`relative top-[3px] left-1 pb-2 pe-2  inline-block leading-[29px]  outline-none border-none align-middle ${
              isEditable ? "bg-gray-200" : "bg-white"
            }`}
            type="text"
            value={noticeData.ref}
            onChange={changeHandler}
            name="reff"
            readOnly={!isEditable}
            
          />
        </p>
        <p className="absolute top-[180px] left-[590px] text-[15px]">
          Date:{" "}
          <input
            name="date"
            className={`h-[max-content] leading-relaxed relative top-[3px] left-1 align-middle outline-none border-none border-0 pb-2 pe-2 inline-block  ${
              isEditable ? "bg-gray-200" : "bg-white"
            } `}
            value={noticeData.date}
            onChange={changeHandler}
            type="date"
            readOnly={!isEditable}
          />
        </p>
        <p
          className="absolute font-semibold text-4xl top-[280px] left-[300px]"
          style={{ color: "black" }}
        >
          NOTIFICATION
        </p>
        <p className="">
        <textarea
          name="description"
          value={noticeData.description}
          className={`absolute top-[400px] p-2 outline-none border-none left-[200px] w-[515px] h-[400px]  ${
            isEditable ? "bg-gray-200" : "bg-white"
          }`}
          placeholder="Enter your notification here"
          onChange={changeHandler}
          readOnly={!isEditable}
        />
        </p>
      </div>
    </div>
  );
};

export default UniquesTemp;