import "../styles/Global.css";
import "../styles/app.ts";
import Header from "../components/header";
import Player from "../components/player";
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