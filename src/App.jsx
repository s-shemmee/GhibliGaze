import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Movies from "./components/Movies";
import Trailers from "./components/Trailers";
import Gallery from "./components/Gallery";
import News from "./components/News";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import AudioToggle from "./components/AudioToggle";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Movies />
      <Trailers />
      <Gallery />
      <News />
      <Newsletter />
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <AudioToggle />
    </div>
  );
}
