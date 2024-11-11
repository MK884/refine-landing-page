import "@/styles/app.scss";
import { Header } from "@/layout";
import { Features, HeroSection, Packages } from "@/sections";
import { ReactLogo } from "./components";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="container_box">
          <HeroSection />
          <Features />
          <Packages />
          <ReactLogo />
        </div>
      </div>
    </>
  );
}

export default App;
