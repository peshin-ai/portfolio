import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Roadmap from "./sections/roadmap";
import ContactSection from "./sections/contact";
import Header from "./components/layouts/header";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Roadmap />
      <ContactSection />
    </div>
  );
}

export default App;
