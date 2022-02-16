import "../styles/Global.css";
import "../styles/ap";
import Header from "../components/header";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <div 
      className="wrapper"
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
    </div> 
  ) 
}; 