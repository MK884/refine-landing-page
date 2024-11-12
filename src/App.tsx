import { Header } from "@/layout";
import { Features, HeroSection, Packages } from "@/sections";
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
        </div>
      </div>
    </>
  );
}

export default App;
