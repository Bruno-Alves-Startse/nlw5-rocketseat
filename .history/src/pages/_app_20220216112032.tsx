import "../styles/Global.css";
import { Wrapper } from "../styles/app";

import Header from "../components/header";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <Wrapper>
      <main
        style={{
          width: '70vw'
        }}
      >
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </Wrapper> 
  ) 
}; 