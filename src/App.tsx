import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Roadmap from "./sections/roadmap";
import ContactSection from "./sections/contact";
import Header from "./components/layouts/navbar";
import View from "./components/layouts/view";

function App() {
  return (
    <div>
      <Header />
      <View>
        <Hero />
      </View>
      <View>
        <Skills />
      </View>
      <View>
        <Roadmap />
      </View>
      <ContactSection />
    </div>
  );
}

export default App;
