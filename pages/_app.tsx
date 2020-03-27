import React from "react";

interface AuthContext {
  accessToken?: string;
  setAccessToken?: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = React.createContext<AuthContext>({});

function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = React.useState("");
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default App;
