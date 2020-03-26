const Home = () => (
  <a
    href={`https://api.pinterest.com/oauth/?response_type=code&redirect_uri=https://pinterest-slideshow.now.sh/oauth&client_id=${process.env.PINTEREST_APP_ID}&scope=read_public&state=mysupersecretstate`}>
    Sign in
  </a>
);

export default Home;
