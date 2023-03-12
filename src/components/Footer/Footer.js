import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BiHeart } from "react-icons/bi";
import { FaRegImage } from "react-icons/fa";
import {
  BsShuffle,
  BsFillSkipStartFill,
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsArrowRepeat,
  BsFillDeviceSsdFill,
} from "react-icons/bs";
import { GoUnmute, GoMute } from "react-icons/go";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineQueueList } from "react-icons/hi2";
import { images } from "assets/images/images";
import "./Footer.scss";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [stateLove, setStateLove] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [mute, setMute] = useState(0);
  const isCheck = useRef();
  const handleLoveButton = () => {
    setStateLove(!stateLove);
    isCheck.current = true;
  };
  const handleShowImage = () => {
    setShowImage(!showImage);
  };
  const handleMute = (e) => {
    setMute(e.target.value);
  };
  useEffect(() => {
    if (isCheck.current) {
      if (stateLove) {
        toast.info("Đã thêm vào Bài Hát Đã Thích của bạn", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.info("Đã xoá khỏi Bài Hát Đã Thích của bạn", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  }, [stateLove]);
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div className="footer__image">
            <img src={images.user} alt="footer-image" />
          </div>
          <div className="footer__song">
            <h3>Anh Đã Ổn Hơn</h3>
            <h4>RPT MCK</h4>
          </div>
          <div className="footer__love">
            <span
              className={stateLove ? "footer__love--active" : ""}
              onClick={handleLoveButton}
            >
              <BiHeart />
            </span>
            <span
              className={showImage ? "footer__love--active" : ""}
              onClick={handleShowImage}
            >
              <FaRegImage />
            </span>
          </div>
        </div>
        <div className="footer-center">
          <div className="footer__music">
            <button className="footer__music-icon">
              <BsShuffle />
            </button>
            <button className="footer__music-icon">
              <BsFillSkipStartFill />
            </button>
            <button className="footer__music-icon">
              <BsFillPlayCircleFill />
            </button>
            <button className="footer__music-icon">
              <BsFillSkipEndFill />
            </button>
            <button className="footer__music-icon">
              <BsArrowRepeat />
            </button>
          </div>
          <div className="footer__time">
            <span className="footer__time-text">0:00</span>
            <input className="style-range" type="range" min="1" max="100" />
            <span className="footer__time-text">3:14</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer__desc">
            <button className="footer__music-icon footer__music-icon--edit">
              <TbMicrophone2 />
            </button>
            <button className="footer__music-icon footer__music-icon--edit">
              <HiOutlineQueueList />
            </button>
            <button className="footer__music-icon footer__music-icon--edit">
              <BsFillDeviceSsdFill />
            </button>
            {+mute ? (
              <button className="footer__music-icon footer__music-icon--edit">
                <GoUnmute />
              </button>
            ) : (
              <button className="footer__music-icon footer__music-icon--edit">
                <GoMute />
              </button>
            )}
            <input
              type="range"
              className="style-range style-range--edit"
              value={mute}
              onChange={(e) => handleMute(e)}
            />
          </div>
        </div>
      </div>
      {showImage && (
        <div className="modal__image">
          <img src={images.user} alt="modal-image" />
        </div>
      )}
      <ToastContainer />
    </>
  );
};
export default Footer;
