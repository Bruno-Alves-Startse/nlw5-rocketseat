import "../styles/Global.css";
import Header from "../components/header";
import Player from "../components/player";

export default function MyApp({ Component, pageProps }) {
  return(
    <div 
      style={{
        display: 'flex'
        width: '100vw'
      }}
    >
      <main
        style={{
        }}
      >
        <Header />  
        <Component {...pageProps} />
      </main>

      <Player />
    </div> 
  ) 
}; 