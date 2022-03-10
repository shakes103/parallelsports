// import Bootstrap’s CSS file
import 'bootstrap/dist/css/bootstrap.css'; 
import "../styles/globals.css";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  // import Bootstrap’s Javascript file
  useEffect(() => {
    import ("bootstrap/dist/js/bootstrap");
  }, []);

    return <Component {...pageProps} />
  }
  export default MyApp;