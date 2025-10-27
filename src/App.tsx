import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Roadmap from "./sections/roadmap";
import ContactSection from "./sections/contact";
import Header from "./components/layouts/navbar";
import View from "./components/layouts/view";
import Footer from "./components/layouts/footer";
import { Toaster } from "./components/ui/sonner.tsx";

function App() {
  return (
    <div>
      <Toaster />
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
      <Footer />
    </div>
  );
}

export default App;
