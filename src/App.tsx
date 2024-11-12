import { Header } from "@/layout";
import { Community, Features, HeroSection, Packages } from "@/sections";
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
        </div>
      </div>
    </>
  );
}

export default App;
