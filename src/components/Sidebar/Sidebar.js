import React, { useContext, useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { FaPlus, FaHeart, FaArrowAltCircleDown } from "react-icons/fa";
import PropTypes from "prop-types";
import Logo from "components/Logo/Logo";
import "./Sidebar.scss";
import SpotifyIcon from "components/SpotifyIcon/SpotifyIcon";
import ColorIcon from "components/ColorIcon/ColorIcon";
import BackgroundIcon from "components/BackgroundIcon/BackgroundIcon";
import Line from "components/Line/Line";
import { SpotifyContext } from "Context/SpotifyContext";
import Dowload from "components/Dowload/Dowload";

const Sidebar = (props) => {
  const [{ playlist }, dispatch] = useContext(SpotifyContext);
  const [editItem, setEditItem] = useState({});

  let isEdit = Object.keys(editItem).length != 0;
  return (
    <div className="sidebar">
      <Logo />
      <div className="sidebar__content">
        <SpotifyIcon title="Trang chủ" icon={<AiOutlineHome />} href="/" />
        <SpotifyIcon
          title="Thư viện"
          icon={<AiOutlineHome />}
          href="/library"
        />
      </div>
      <div className="sidebar__evaluate">
        <ColorIcon
          color="#2d2d2d"
          bgColor="#b2b2b2"
          icon={<FaPlus />}
          title="Tạo playlist"
          href="/create"
        />
        <BackgroundIcon
          color="#b2b2b2"
          bgImage="linear-gradient(135deg,#450af5,#c4efd9)"
          icon={<FaHeart />}
          title="Bài hát đã thích"
          href="/love-song"
        />
      </div>
      <Line
        marginTop="8px"
        marginLeft="24px"
        marginRight="24px"
        marginBottom="0px"
        color="#282828"
      />
      <div className="sidebar__playlist">
        <h4>PLAYLIST</h4>
        {playlist &&
          Array.isArray(playlist.items) &&
          playlist.items.length > 0 &&
          playlist.items.map((item) => (
            <SpotifyIcon
              isEdit={isEdit}
              editItem={editItem}
              setEditItem={setEditItem}
              key={item.id}
              item={item}
              id={item.id}
              title={item.name}
            />
          ))}
      </div>
      <div className="sidebar__dowload">
        <Dowload
          icon={<FaArrowAltCircleDown />}
          title="Cài đặt Ứng Dụng"
          color="#b3b3b3"
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
