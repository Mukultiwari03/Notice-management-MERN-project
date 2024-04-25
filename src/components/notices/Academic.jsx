import React, { useState, useRef } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
import axios from 'axios';

const Academic = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [noticeData, setNoticeData] = useState({
    ref: "SVGOI/Admin/2024/38",
    date: "Dated:29.02.2024",
    description: "This is for the information of all the students studying in Swami Vivekanand Group of Institutes (Except students admitted in 2023 batch) that the last date for deposit of their fee for odd semester (5th & 7th semester) is 10.04.2024. They are, therefore, directed to deposit their odd semester fee on or before 10.04.2024 positively. After due date, penalty will be applicable.",
    batch: "academic",
  });

  const noticeRef = useRef(null);

  const handleChange = (e) => {
    setNoticeData({ ...noticeData, [e.target.name]: e.target.value });
  };

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
  };

  const handleDownloadPDF = () => {
    const input = noticeRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;;

      pdf.addImage(imgData, "JPEG", 10, 30, imgWidth, imgHeight);

      pdf.save("notice.pdf");
    });
  };

  return (

    <div>
      <div className="flex justify-end mb-4 mt-8">
        <button
          onClick={handleEditToggle}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded"
        >
          {isEditable ? "Save" : "Edit"}
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 ml-4 rounded"
        >
          Download PDF
        </button>
      </div>
      <div className="bg-white drop-shadow-lg w-[710px] h-[800px] p-[5rem]">
        <div ref={noticeRef}>
          <div>
            <h2 className="font-bold text-3xl">
              Swami Vivekanand Group of Institutes,
            </h2>
            <p className="font-medium">
              Chandigarh Patiala National Highway, Ram Nagar, Banur
            </p>
            <div className="w-full h-[1.5px] bg-slate-400" />
            <div className="flex justify-between">
              <div>
                <p className="text-[15px]">
                  Ref. No:{" "}
                  <input
                    className={`pb-2 pt-1 pe-2 inline-block outline-none border-none align-middle ${
                      isEditable ? "bg-gray-200" : "bg-white"
                    }`}
                    type="text"
                    value={noticeData.ref}
                    onChange={handleChange}
                    name="ref"
                    readOnly={!isEditable}
                  />
                </p>
              </div>
              <div>
              <p className="text-[15px]">
          Date:{" "}
          <input
            name="date"
            className={`h-[max-content] leading-relaxed  outline-none border-none border-0 pb-2 pe-2 inline-block  ${
              isEditable ? "bg-gray-200" : "bg-white"
            } `}
            value={noticeData.date}
            onChange={handleChange}
            type="date"
            readOnly={!isEditable}
          />
        </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <h2 className="text-lg font-bold underline">Notice</h2>
          </div>
          <div className="text-center mt-10 break-normal">
            <textarea
              className={`text-xs mt-4 text-txtPrimary resize-none h-[100px] tracking-wider w-full outline-none break-normal border-none ${
                isEditable ? "bg-gray-200" : "bg-white"
              }`}
              name="description"
              rows="3"
              value={noticeData.description}
              onChange={handleChange}
              readOnly={!isEditable}
              style={{ wordBreak: "break-word" }}
              wrap="hard"
            ></textarea>
          </div>
          <div>
            <p className="text-sm font-bold mt-[100px]">Principal</p>
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
      </div>
    </div>
  );
};

export default Academic;
