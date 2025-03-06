import React, { useState, useEffect, useRef, useCallback  } from 'react';
import './home.css';
import { useTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import { useSwipeable } from 'react-swipeable';
import { FaRegUser, FaPhone, FaStar, FaTimes } from "react-icons/fa";
import { TbUserPlus, TbUser } from "react-icons/tb";

function Home() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const rtlLanguages = ['ar', 'fa', 'he', 'ur'];
    document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const timerRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
      setKey((prevKey) => prevKey + 1);
    }, 5000);
  }, []);

  const changeSlide = useCallback((index) => {
    setCurrentSlide(index);
    setKey((prevKey) => prevKey + 1);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide((currentSlide + 1) % 2),
    onSwipedRight: () => changeSlide((currentSlide - 1 + 2) % 2),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim() !== '') {
      console.log('Sending to backend:', { rating, comment });
      setRating(0);
      setComment('');
      setShowModal(true);
      document.body.classList.add('modal-open'); // أضف هذا السطر
    }
  };
  
  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove('modal-open'); // أضف هذا السطر
  };
  useEffect(() => {
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  return (
    <>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <button 
                ref={buttonRef}
                onClick={toggleDropdown}
                className={isDropdownVisible ? 'active' : ''}
              >
                <FaRegUser className='icon'/>
              </button>
            </li>
            <li><button><FaPhone className='icon'/></button></li>
          </ul>
        </nav>
        <div ref={dropdownRef} className={`dropdown ${isDropdownVisible ? 'visible' : ''}`}>
          <div className="dropdown-content">
            <ul>
            <li><a href="#"><div>
                    <TbUser className='dropDownIcon' />
                  </div>
                  <p>Sign In</p>
                </a>
              </li>
              <li><a href="#"><div>
              <TbUserPlus className='dropDownIcon' />
                </div>
                <p>Create Account</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="secondNav">
          <ul>
            <li><a href='#'>{t('Home')}</a></li>
            <li><a href='#'>{t('Videos')}</a></li>
            <li><a href='#'>{t('Translations of Quran')}</a></li>
            <li><a href='#'>{t('Interactive files')}</a></li>
            <li><a href='#'>{t('Islamic applications')}</a></li>
            <li><a href='#'>{t('Another Islamic sites')}</a></li>
          </ul>
          <li className="languageDropdown">
            <a>{t('English')}</a>
            <ul className='languageDropdownContent'>
              <li><a href='#' onClick={() => changeLanguage('en')}>English</a></li>
              <li><a href='#' onClick={() => changeLanguage('ar')}>العربية</a></li>
              <li><a href='#' onClick={() => changeLanguage('fr')}>Français</a></li>
              <li><a href='#' onClick={() => changeLanguage('ru')}>Русский</a></li>
              <li><a href='#' onClick={() => changeLanguage('zh')}>中文</a></li>
              <li><a href='#' onClick={() => changeLanguage('tl')}>Filipino</a></li>
              <li><a href='#' onClick={() => changeLanguage('tr')}>Türkçe</a></li>
              <li><a href='#' onClick={() => changeLanguage('id')}>Bahasa Indonesia</a></li>
              <li><a href='#' onClick={() => changeLanguage('bn')}>বাংলা</a></li>
              <li><a href='#' onClick={() => changeLanguage('hi')}>हिंदी</a></li>
            </ul>
          </li>
        </div>
        <header></header>
        <section>
        <div className="slider-container" {...handlers}>
        <CSSTransition
          key={key}
          in={true}
          timeout={400}
          classNames="slide-right"
        >
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`}></div>
        </CSSTransition>
        <CSSTransition
          key={key + 1}
          in={true}
          timeout={400}
          classNames="slide-right"
        >
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`}></div>
        </CSSTransition>
        <div className="slider-dots">
          <span 
            className={`dot ${currentSlide === 0 ? 'active' : ''}`} 
            onClick={() => changeSlide(0)}
          ></span>
          <span 
            className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
            onClick={() => changeSlide(1)}
          ></span>
        </div>
      </div>
        </section>
        <main>
          <div className='youtubeVids'>
          <iframe src={t('videoLinks.video1')} title="YouTube video player" allowFullScreen></iframe>
          <iframe src={t('videoLinks.video2')} title="YouTube video player" allowFullScreen></iframe>
          <iframe src={t('videoLinks.video3')} title="YouTube video player" allowFullScreen></iframe>
          </div>
          <a href='#'>{t('View more')}</a>
        </main>
        <footer>
          <div className="rating-system">
            <h2>{t('Rate your experience')}</h2>
            <form onSubmit={handleSubmit}>
              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={star <= rating ? 'star active' : 'star'}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
              <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder={t('Enter your comment here...')}
                required
              />
              <button type="submit">{t('Send')}</button>
            </form>
          </div>
        </footer>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <FaTimes className="close-icon" onClick={closeModal} />
            <p>تم إرسال تعليقك بنجاح</p>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Home