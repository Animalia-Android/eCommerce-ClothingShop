import "./App.scss";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Section from "./components/Section";
import SmallSection from "./components/SmallSection";
import SubSmallSection from "./components/SubSmallSection";

import { Data } from "./components/Data";

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <SmallSection />
      <SubSmallSection />
      <Carousel slides={Data} />
    </div>
  );
}

export default App;
