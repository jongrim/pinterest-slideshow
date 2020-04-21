import * as React from "react";
import "@reach/menu-button/styles.css";

import useLocalStorage from "../hooks/useLocalStorage";

import "../styles/App.css";

interface AuthContext {
  accessToken?: string;
  setAccessToken?: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = React.createContext<AuthContext>({});

function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useLocalStorage<string>(
    "accessToken",
    ""
  );
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default App;
