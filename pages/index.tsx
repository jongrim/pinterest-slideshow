import * as React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [url, setUrl] = React.useState("");
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Pinterest Slideshow</h1>
      <label htmlFor="board" className={styles.boardLabel}>
        Enter the rss URL of your public board to make a slideshow from it
      </label>
      <div className={styles.inputContainer}>
        <input
          className={styles.boardInput}
          id="board"
          name="board"
          placeholder="https://www.pinterest.com/username/board.rss"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Link href={`/play?board=${url}`}>
          <a className={styles.goButton} href={`/play?board=${url}`}>
            Go
          </a>
        </Link>
      </div>
      <section className={styles.signInSection}>
        <p>Or</p>
        <a
          className={styles.signIn}
          href={`https://api.pinterest.com/oauth/?response_type=code&redirect_uri=https://pinterest-slideshow.now.sh/oauth&client_id=${process.env.PINTEREST_APP_ID}&scope=read_public&state=mysupersecretstate`}
        >
          Sign in with Pinterest to choose from your boards
        </a>
      </section>
    </main>
  );
};

export default Home;
