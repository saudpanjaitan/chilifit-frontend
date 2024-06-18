import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css"; // Pastikan jalur ini benar
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
