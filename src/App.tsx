import { Footer, Header } from "@/layout";
import { Community, Features, HeroSection, Packages, Reviews } from "@/sections";
import "@/styles/app.scss";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="container_box">
          <HeroSection />
          <Features />
          <Packages />
          <Community />
          <Reviews />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
