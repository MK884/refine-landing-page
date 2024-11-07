import "@/styles/app.scss";
import { Header } from "@/layout";
import { HeroSection } from "@/sections";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div
         className='container_box'
        >
         <HeroSection />

        </div>
      </div>
    </>
  );
}

export default App;
