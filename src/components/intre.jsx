import React from 'react'
// import { Link } from 'react-router-dom'
import './intractivefiles.css' // تأكد من إنشاء هذا الملف CSS
import Header from "./header";
import Footer from './footer';
function Intre() {

  
  // يمكنك إضافة المزيد من الكتب هنا
  
  const books = [
    {
      id: 1,
      title: "القرآن الكريم",
      image: "/path/to/quran-image.jpg",
      description: "النص الكامل للقرآن الكريم مع التفسير",
      link: "/quran"
    },
    {
      id: 2,
      title: "القرآن الكريم",
      image: "/path/to/quran-image.jpg",
      description: "النص الكامل للقرآن الكريم مع التفسير",
      link: "/quran"
    },
    // يمكنك إضافة المزيد من الكتب هنا
  ]
  
  return (
    <>
    <Header />
    <div class="intre-header">
            <h1>مكتبة الفيديوهات الإسلامية</h1>
            <p>مجموعة مميزة من المحاضرات والدروس في علوم الشريعة والسيرة النبوية</p>
            </div>

    <div className="interactive-files-container">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-info">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-description">{book.description}</p>
            <a href="/bigarabicquran" target='_blank' className="view-book-btn" >رؤية الكتاب</a>
          </div>
        </div>
      ))}
    </div>
    <div className="videos-grid">
      {books.map(book => (
        <div key={book.id} className="video-card pdf-card">
            <div className="video-thumbnail">
              <img src={book.link} alt={book.title} allowFullScreen ></img>
            </div>
            <div className="video-info">
              <h3 className="video-title">{book.title}</h3>
              <p className="video-description">{book.description}</p>
              <div className="video-meta">
              </div>
            </div>
          </div>
        ))}
    </div>
    <Footer/>
    </>
  )
}

export default Intre