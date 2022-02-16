import "../styles/Global.css";

import { Wrapper } from "../styles/app";

export default function MyApp({ Component, pageProps }) {
  return(
    <Wrapper 
      style={{
      }}
    >
      <main
        style={{
          width: '70vw'
        }}
      >
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </wrapper> 
  ) 
}; 