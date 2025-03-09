import React from 'react';
import Book from "./big-quran.pdf";
import './pdf.css'; // تأكد من إنشاء هذا الملف

function Pdf() {
  return (
    <>
      <div className="pdf-container">
        <embed 
          src={Book} 
          type="application/pdf" 
          width="100%" 
          height="100%" 
          className="pdf-embed"
        />
      </div>
    </>
  )
}

export default Pdf