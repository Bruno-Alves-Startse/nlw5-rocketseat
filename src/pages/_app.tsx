import "../styles/Global.css";
import Header from "../components/header";
import "../styles/app.css";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <div className="wrapper">
      <main>
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </div>
  ) 
};