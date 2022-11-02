import "./App.scss";
import { Data } from "./components/Data";
import Header from "./components/Header";
import Section from "./components/Section";
import SmallSection from "./components/SmallSection";
import SubSmallSection from "./components/SubSmallSection";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SmallSection />
      <SubSmallSection />
      <Carousel slides={Data} />
      <Footer />
    </div>
  );
}

export default App;
