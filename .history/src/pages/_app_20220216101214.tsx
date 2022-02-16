import "../styles/Global.css";
import Header from "../components/header";
import "../styles/app.module.css";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <div c
    lassName="wrapper"
    >
      <main>
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </div> 
  ) 
}; 