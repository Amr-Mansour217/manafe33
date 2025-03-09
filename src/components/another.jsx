import React from 'react'
import Header from './header';
import './another.css';
import webimage from "./imgs/webimage.jpg";
import Footer from './footer';

function Another() {
  // قائمة بالمواقع (يمكنك إضافة المزيد حسب الحاجة)
  const websites = [
    { id: 1, name: "موقع ابن جبرين", url: "https://www.ibn-jebreen.com/", image: webimage },
    { id: 2, name: "موقع آخر", url: "https://www.ibn-jebreen.com/", image: webimage },
    { id: 3, name: "موقع ثالث", url: "https://www.ibn-jebreen.com/", image: webimage },
    // أضف المزيد من المواقع هنا
  ];

  return (
    <div className="page-container">
      <Header/>
      <div className="content-wrap">
        <div className="another-container">
          <div className="another-categories">
            <ul>
              <li><a href="#" className="active">جميع المواقع</a></li>
              <li><a href="#">العقيدة</a></li>
              <li><a href="#">الفقه</a></li>
              <li><a href="#">تفسير القرآن</a></li>
              <li><a href="#">السيرة النبوية</a></li>
              <li><a href="#">الحديث</a></li>
              <li><a href="#">الأخلاق</a></li>
              <li><a href="#">العلوم التربوية</a></li>
            </ul>
          </div>

          <div className="websites-grid">
            {websites.map(site => (
              <a key={site.id} href={site.url} target="_blank" rel="noopener noreferrer" className="website-item">
                <img src={site.image} alt={site.name} />
                <p>{site.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Another