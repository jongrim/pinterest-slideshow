import axios from 'axios';

const OAuth = ({ accessToken }) => {
  if (accessToken) {
    console.log(accessToken);
    if (sessionStorage) {
      console.log('session storage available');
      sessionStorage.setItem('pinterestAccessToken', accessToken);
    }
    return <div>You are now signed in</div>;
  }
  return <div>You are not signed in</div>;
};

export async function getServerSideProps(context) {
  const { query: { code = '' } = {} } = context;
  let accessToken = '';
  if (code) {
    const res = await axios
      .post(
        `https://api.pinterest.com/v1/oauth/token?grant_type=authorization_code&client_id=${process.env.PINTEREST_APP_ID}&client_secret=${process.env.PINTEREST_APP_SECRET}&code=${code}`
      )
      .catch((err) => {
        console.error(err);
      });
    if (res) {
      accessToken = res.data;
    }
  }
  return { props: { accessToken } };
}

export default OAuth;
