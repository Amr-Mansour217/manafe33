import React from 'react';
import './video.css';
import Header from './header'
import Footer from './footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';



function Videos(){
    const videos = [
        {
            id: 1,
            title: 'أساسيات العقيدة الإسلامية',
            description: 'شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان',
            link: 'https://www.youtube.com/embed/FsDrBKQy7gM?si=h414kkga6ycM4r5o'
        },
        {
            id: 2,
            title: 'أساسيات العقيدة الإسلامية',
            description: 'شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان',
            link: 'https://www.youtube.com/embed/ZINjuzYQxX4?si=LIMh4FGyhj_5goO6'
        },
        {
            id: 3,
            title: 'أساسيات العقيدة الإسلامية',
            description: 'شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان',
            link: 'https://www.youtube.com/embed/tjp7wiUaPZk?si=QTrBLZ8nzMYXSliB'
        },
    ]

    return (
        <>
            <Header/>
            <div class="videos-header">
            <h1>مكتبة الفيديوهات الإسلامية</h1>
            <p>مجموعة مميزة من المحاضرات والدروس في علوم الشريعة والسيرة النبوية</p>
            </div>

    <div class="video-categories">
        <ul>
            <li><a href="#" class="active">جميع الفيديوهات</a></li>
            <li><a href="#">العقيدة</a></li>
            <li><a href="#">الفقه</a></li>
            <li><a href="#">تفسير القرآن</a></li>
            <li><a href="#">السيرة النبوية</a></li>
            <li><a href="#">الحديث</a></li>
            <li><a href="#">الأخلاق</a></li>
            <li><a href="#">العلوم التربوية</a></li>
        </ul>
    </div>

    <section class="videos-section">
        <div class="section-title">
            <h2>فيديوهات مختارة</h2>
        </div>

        <div className="videos-grid">
                    {videos.map(video => (
                        <div key={video.id} className="video-card">
                            <div className="video-thumbnail">
                                <iframe src={video.link} alt={video.title} allowFullScreen ></iframe>
                            </div>
                            <div className="video-info">
                                <h3 className="video-title">{video.title}</h3>
                                <p className="video-description">{video.description}</p>
                                <div className="video-meta">
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


        <div class="pagination">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faChevronRight} /></a></li>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><FontAwesomeIcon icon={faChevronLeft} /></a></li>
            </ul>
        </div>
    </section>
    <Footer />
        </>
    )
}

export default Videos;