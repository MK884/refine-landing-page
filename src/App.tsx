import "@/styles/app.scss";
import { Header } from "@/layout";
import { Features, HeroSection } from "@/sections";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="container_box">
          <HeroSection />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
