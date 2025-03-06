import React, { useState, useEffect, useRef, useCallback  } from 'react';
import './home.css';
import { CSSTransition } from 'react-transition-group';
import { useSwipeable } from 'react-swipeable';
import { FaRegUser, FaPhone, FaStar, FaTimes } from "react-icons/fa";
import { TbUserPlus, TbUser } from "react-icons/tb";

function Home() {

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
            <li><a href="./register.jsx"><div>
                    <TbUser className='dropDownIcon' />
                  </div>
                  <p>Sign In</p>
                </a>
              </li>
              <li><a href="./register.jsx"><div>
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
            <li><a href='#'>Translations of Quran</a></li>
            <li><a href='#'>Interactive files</a></li>
            <li><a href='#'>Islamic applications</a></li>
            <li><a href='#'>Another Islamic sites</a></li>
          </ul>
          <li className="languageDropdown">
            <a>Language</a>
              <ul className="languageDropdownContent">
                <li><a href='#'>English</a></li>
                <li><a href='#'>العربية</a></li>
                <li><a href='#'>Français</a></li>
                <li><a href='#'>русский</a></li>
                <li><a href='#'>中国人</a></li>
                <li><a href='#'>Pilipino</a></li>
                <li><a href='#'>Türkçe</a></li>
                <li><a href='#'>Bahasa</a></li>
                <li><a href='#'>বাংলা</a></li>
                <li><a href='#'>हिंदी</a></li>
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
            <iframe src="https://www.youtube.com/embed/f8PTOQFl4f4?si=2TJ3xIob6pZcAgEz" title="YouTube video player" allowfullscreen></iframe>
            <iframe src="https://www.youtube.com/embed/6tJqEU9W4jg?si=n_EOnuzmkO8ATAx2" title="YouTube video player" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/rjcMwuVMuYc?si=coI-ULqr5Au1sNgZ" title="YouTube video player" allowfullscreen></iframe>
          </div>
          <a href='#'>View more</a>
        </main>
        <footer>
          <div className="rating-system">
            <h2>قيّم تجربتك</h2>
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
                placeholder="Enter your comment here..."
                required
              />
              <button type="submit">إرسال</button>
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