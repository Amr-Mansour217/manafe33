import React, { useState, useEffect, useRef } from 'react';
import './video.css';
import { useTranslation } from 'react-i18next';
import Logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faUserPlus, 
  faGlobe, 
  faChevronDown, 
  } from '@fortawesome/free-solid-svg-icons';

function Videos(){
    const { t, i18n } = useTranslation();
      const [isLanguageOpen, setIsLanguageOpen] = useState(false);
      const languageRef = useRef(null);
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (languageRef.current && !languageRef.current.contains(event.target)) {
            setIsLanguageOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    
      const toggleLanguageMenu = () => {
        setIsLanguageOpen(!isLanguageOpen);
      };
    
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
        setIsLanguageOpen(false);
      };
    return (
        <>
        <header>
              <div className="header-pattern"></div>
              <div className="top-nav">
                <div className="logo-container">
                  <img src={Logo} alt="منافع" className="logo" />
                  <div className="brand-name">
                    <p>{t('منصة تعليمية إسلامية')}</p>
                  </div>
                </div>
                <div className="auth-links">
                  <a to="/login" className="auth-btn login-btn">
                    <FontAwesomeIcon icon={faUser} />
                    {t('تسجيل الدخول')}
                  </a>
                  <a to="/register" className="auth-btn register-btn">
                    <FontAwesomeIcon icon={faUserPlus} />
                    {t('إنشاء حساب')}
                  </a>
                </div>
              </div>
              <nav className="main-nav">
                <ul className="nav-menu">
                  <li><a href="/" className="nav-link">{t('الرئيسية')}</a></li>
                  <li><a href="/videos" className="nav-link active">{t('الفيدوهات')}</a></li>
                  <li><a href="/quran" className="nav-link">{t('القرءان المترجم')}</a></li>
                  <li><a href="/library" className="nav-link">{t('الملفات التفاعلية')}</a></li>
                  <li><a href="/about" className="nav-link">{t('تطبيقات إسلامية')}</a></li>
                  <li><a href="/contact" className="nav-link">{t('مواقع إسلامية أخرى')}</a></li>
                </ul>
                <div className="language-dropdown" ref={languageRef}>
                  <button className="language-btn" onClick={toggleLanguageMenu}>
                    <FontAwesomeIcon icon={faGlobe} />
                    {t('العربية')}
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                  <div className={`language-content ${isLanguageOpen ? 'show' : ''}`}>
                    <a href="#" onClick={() => changeLanguage('ar')}>العربية</a>
                    <a href="#" onClick={() => changeLanguage('en')}>English</a>
                    <a href="#" onClick={() => changeLanguage('fr')}>Français</a>
                    <a href="#" onClick={() => changeLanguage('tr')}>Türkçe</a>
                    <a href="#" onClick={() => changeLanguage('id')}>Bahasa</a>
                    <a href="#" onClick={() => changeLanguage('ru')}>русский</a>
                    <a href="#" onClick={() => changeLanguage('hi')}>हिंदी</a>
                    <a href="#" onClick={() => changeLanguage('ur')}>اردو</a>
                    <a href="#" onClick={() => changeLanguage('bn')}>বাংলা</a>
                    <a href="#" onClick={() => changeLanguage('zh')}>中国人</a>
                    <a href="#" onClick={() => changeLanguage('fil')}>Pilipino</a>
                  </div>
                </div>
              </nav>
            </header>
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

        <div class="videos-grid">
            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=أساسيات+العقيدة" alt="أساسيات العقيدة الإسلامية"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">أساسيات العقيدة الإسلامية</h3>
                    <p class="video-description">شرح لأهم أصول العقيدة الإسلامية للمبتدئين ومجمل أركان الإيمان</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 1.7K</span>
                        <span><i class="fas fa-clock"></i> 45 دقيقة</span>
                    </div>
                </div>
            </div>

            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=تفسير+الفاتحة" alt="تفسير سورة الفاتحة"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">تفسير سورة الفاتحة</h3>
                    <p class="video-description">شرح تفصيلي لمعاني سورة الفاتحة ومقاصدها وفوائدها التعبدية</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 3.5K</span>
                        <span><i class="fas fa-clock"></i> 30 دقيقة</span>
                    </div>
                </div>
            </div>

            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=أحكام+الصلاة" alt="أحكام الصلاة"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">أحكام الصلاة</h3>
                    <p class="video-description">شرح عملي لأحكام الصلاة وكيفيتها والأخطاء الشائعة فيها</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 2.4K</span>
                        <span><i class="fas fa-clock"></i> 40 دقيقة</span>
                    </div>
                </div>
            </div>

            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=الأخلاق+الإسلامية" alt="الأخلاق الإسلامية"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">الأخلاق الإسلامية</h3>
                    <p class="video-description">محاضرة عن منظومة الأخلاق في الإسلام وأهميتها وتطبيقاتها</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 1.8K</span>
                        <span><i class="fas fa-clock"></i> 35 دقيقة</span>
                    </div>
                </div>
            </div>

            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=أحكام+الصيام" alt="أحكام الصيام"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">أحكام الصيام</h3>
                    <p class="video-description">شرح مفصل لأحكام الصيام ومستحباته في الإسلام</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 2.1K</span>
                        <span><i class="fas fa-clock"></i> 25 دقيقة</span>
                    </div>
                </div>
            </div>

            <div class="video-card">
                <div class="video-thumbnail">
                    <img src="https://placehold.co/600x400/1e3157/ffffff?text=السيرة+النبوية" alt="السيرة النبوية"/>
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">السيرة النبوية</h3>
                    <p class="video-description">دروس من حياة النبي صلى الله عليه وسلم وعبرها في حياتنا</p>
                    <div class="video-meta">
                        <span><i class="fas fa-eye"></i> 4.3K</span>
                        <span><i class="fas fa-clock"></i> 50 دقيقة</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <ul>
                <li><a href="#"><i class="fas fa-chevron-right"></i></a></li>
                <li><a href="#" class="active">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#"><i class="fas fa-chevron-left"></i></a></li>
            </ul>
        </div>
    </section>

        </>
    )
}

export default Videos;