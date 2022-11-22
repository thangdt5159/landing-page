import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../index.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
