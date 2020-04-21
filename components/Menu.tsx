import * as React from "react";
import MenuIcon from "../icons/MenuIcon";
import styles from "./Menu.module.css";

interface Menu {
  playbackSpeed: string;
  setPlaybackSpeed: (arg0: string) => void;
}

const Menu: React.FC<Menu> = ({ playbackSpeed, setPlaybackSpeed }) => {
  const [menuHidden, setMenuHidden] = React.useState(true);
  return (
    <>
      <button
        className={styles.menuIcon}
        onClick={() => setMenuHidden((cur) => !cur)}
      >
        <MenuIcon />
      </button>
      <div className={styles.popover} hidden={menuHidden}>
        <div className={styles.playbackSpeed}>
          <label htmlFor="playback-speed">Adjust playback speed</label>
          <input
            name="playback-speed"
            type="range"
            min="1000"
            max="60000"
            step="1000"
            value={playbackSpeed}
            onChange={({ target }) => {
              setPlaybackSpeed(target.value);
            }}
          />
          <div>{parseInt(playbackSpeed, 10) / 1000} seconds</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
