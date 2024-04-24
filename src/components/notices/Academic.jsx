import React, { useState, useRef } from "react";
import html2canvas from "@nidi/html2canvas";
import jsPDF from "jspdf";
// 1204 x 1754
const Academic = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [refValue, setRefValue] = useState("Ref. No.: SVGOI/Admin/2024/38");
  const [dateValue, setDateValue] = useState("Dated:29.02.2024");
  const [descValue, setDescValue] = useState(
    "This is for the information of all the students studying in Swami Vivekanand Group of Institutes (Except students admitted in 2023 batch) that the last date for deposit of their fee for odd semester (5th & 7th semester) is 10.04.2024. They are, therefore, directed to deposit their odd semester fee on or before 10.04.2024 positively. After due date, penalty will be applicable."
  );

  const noticeRef = useRef(null);

  const handleEditToggle = async () => {
    setIsEditable(!isEditable);
    if(isEditable) {
      console.log("Ref: ", refValue);
      console.log("Date: ", dateValue);
      console.log("Desc: ", descValue);
      // send the notice data in backend using axios 
      try{

      }
      catch(err){
        console.log("Error while sending notice data in backend ", err.message)
      }
    }
  };

  const handleRefChange = (e) => {
    setRefValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescValue(e.target.value);
  };

  const handleDownloadPDF = () => {
    const input = noticeRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg",1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = 190; //
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      // const yPos = (pdfHeight - imgHeight) / 2;

      pdf.addImage(imgData, "JPEG", 10, 30, imgWidth, imgHeight);

      pdf.save("notice.pdf");
    });
  };

  return (
    <div className="w-[576px] h-[900px]">
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
      <div>
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
                <input
                  name="Ref"
                  type="text"
                  className={`outline-none border-none text-base tracking-eide text-txtDark w-[250px] ${
                    isEditable ? "bg-gray-200" : "bg-white"
                  }`}
                  value={refValue}
                  onChange={handleRefChange}
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <input
                  name="Date"
                  type="text"
                  className={`outline-none border-none text-base tracking-eide text-txtDark w-full ${
                    isEditable ? "bg-gray-200" : "bg-white"
                  }`}
                  value={dateValue}
                  onChange={handleDateChange}
                  readOnly={!isEditable}
                />
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
              name="Content"
              rows="3"
              value={descValue}
              onChange={handleDescChange}
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
