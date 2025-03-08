import React, { useState, useEffect, useRef } from 'react';
import './quran.css';
import { useTranslation } from 'react-i18next';
import Logo from './imgs/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faUserPlus, 
  faGlobe, 
  faChevronDown, 
  } from '@fortawesome/free-solid-svg-icons';

function Quran(){
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
                  <li><a href="/" className="nav-link active">{t('الرئيسية')}</a></li>
                  <li><a href="/videos" className="nav-link">{t('الفيديوهات')}</a></li>
                  <li><a href="/scholars" className="nav-link">{t('القرءان المترجم')}</a></li>
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
        </>
    )
}

export default Quran;