import "../styles/Global.css";
import { Wrapper } from "../styles/app.module";

import Header from "../components/header";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <Wrapper>
      <main>
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </Wrapper> 
  ) 
}; 