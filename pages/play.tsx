import * as React from "react";
import styles from "../styles/Play.module.css";
import Menu from "../components/Menu";

import axios from "axios";

interface PlayerProps {
  images?: string[];
  xml?: string;
}

const Player: React.FC<PlayerProps> = ({ images, xml }) => {
  const [xmlImages, setXmlImages] = React.useState<string[]>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [playbackSpeed, setPlaybackSpeed] = React.useState("30000");

  React.useEffect(() => {
    if (xml) {
      const doc = new DOMParser().parseFromString(xml, "text/xml");
      const descriptions = Array.from(doc.querySelectorAll("description"));
      const imageLinks = descriptions
        .map((d) => d.innerHTML)
        .filter(Boolean)
        .map((t) => {
          const r = new RegExp(/src="(.+)"/gm);
          return r.exec(t)[1];
        })
        .map((l) => l.replace("236x", "640x"));
      setXmlImages(imageLinks);
    }
  }, [xml]);

  const displayImages = xmlImages || images || [];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((val) => (val + 1) % displayImages.length);
    }, parseInt(playbackSpeed, 10));
    return () => window.clearInterval(timer);
  }, [displayImages, playbackSpeed]);

  return (
    <div className={styles.page}>
      <div className={styles.player}>
        {displayImages.map((image, i) => (
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

export async function getServerSideProps(context) {
  const { query } = context;
  if (query.board) {
    try {
      const res = await axios.get(query.board);
      const text = res.data;
      return {
        props: { xml: text },
      };
    } catch (e) {
      console.log(e);
      return { props: { error: "Board not found" } };
    }
  }
  return { props: {} };
}

export default Player;
