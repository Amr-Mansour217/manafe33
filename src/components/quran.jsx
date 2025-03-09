import React from 'react';
import Header from "./header";
import Book from "./translation.pdf";
import './quran.css'; // تأكد من إنشاء هذا الملف

function Quran() {
  return (
    <>
      <Header />
      <div className="container">
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

export default Quran