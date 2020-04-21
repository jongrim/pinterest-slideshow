import * as React from "react";
import styles from "../styles/Play.module.css";
import Menu from "../components/Menu";

interface Image {
  url: string;
}
interface PlayerProps {
  images: Image[];
}

const devImages = [
  "https://i.pinimg.com/originals/f7/6f/aa/f76faaf4aad8318b32c0846f6f45d88b.jpg",
  "https://i.pinimg.com/originals/64/6c/3a/646c3adfc6d046d81f73d2dd5129bceb.jpg",
  "https://i.pinimg.com/originals/13/f5/88/13f5884258bfbf882398d8285b38dfd2.jpg",
];

const Player: React.FC<PlayerProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [playbackSpeed, setPlaybackSpeed] = React.useState("30000");
  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((val) => (val + 1) % devImages.length);
    }, parseInt(playbackSpeed, 10));
    return () => window.clearInterval(timer);
  }, [playbackSpeed]);

  return (
    <div className={styles.page}>
      <div className={styles.player}>
        {devImages.map((image, i) => (
          <img
            src={image}
            key={image}
            className={styles.img}
            hidden={i !== activeIndex || undefined}
          />
        ))}
      </div>
      <Menu playbackSpeed={playbackSpeed} setPlaybackSpeed={setPlaybackSpeed} />
    </div>
  );
};

export default Player;
