import React, { useContext } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import SongRow from "components/SongRow/SongRow";
import { SpotifyContext } from "Context/SpotifyContext";
import "./Show.scss";

const Show = ({ url }) => {
  const [{ discovery_weekly }, dispatch] = useContext(SpotifyContext);

  return (
    <div className="show">
      <div className="show__body">
        <div className="show__image">
          <img src={url} alt="show-image" />
          <div className="show__image-title">
            <h3>
              Your
              <br />
              Discovery
              <br />
              Weekly
            </h3>
          </div>
        </div>
        <div className="show__title">
          <h6>PLAYLIST</h6>
          <h2>Discovery Weekly</h2>
          <p>
            Your weekly mixtape of fresh music. Enjoy new music and deep cuts
            picked for you. Updates every Monday.
          </p>
        </div>
      </div>
      <div className="show__song">
        <div className="show__song-icon">
          <button className="footer__music-icon icon-large color-success show__song-effect">
            <BsFillPlayCircleFill />
          </button>
          <button className="footer__music-icon color-success">
            <FaHeart />
          </button>
          <button className="footer__music-icon">
            <AiOutlineEllipsis />
          </button>
        </div>
        <div className="show__song-list">
          {discovery_weekly &&
            discovery_weekly.tracks &&
            Array.isArray(discovery_weekly.tracks.items) &&
            discovery_weekly.tracks.items.length > 0 &&
            discovery_weekly.tracks.items.map((item) => (
              <SongRow
                images={item.track.album.images[0].url}
                name={item.track.album.name}
                author={item.track.artists}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Show;
