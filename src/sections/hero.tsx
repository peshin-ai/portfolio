import { Button } from "../components/ui/button";

export function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:pt-20 md:pb-16 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="md:space-y-8 space-y-2">
            <div>
              <h1 className="text-3xl lg:text-6xl font-bold text-foreground mb-4 font-dm-sans">
                Ung Ta Hoang Tuan
              </h1>
              <p className="md:text-xl text-lg text-muted-foreground md:mb-6 mb-3 font-dm-sans">
                Frontend Engineer
              </p>
              <p className="md:text-lg text-md text-muted-foreground leading-relaxed max-w-md font-dm-sans">
                I craft delightful, accessible, and performant web experiences
                using React, TypeScript, and Motion.
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="px-6 font-dm-sans"
                onClick={handleContactClick}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden bg-black">
              <img
                src="/public/my-avatar.jpg"
                alt="Ung Ta Hoang Tuan - Frontend Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-6 md:py-16 py-10">
        <div className="max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 font-dm-sans">
            About Me
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Description */}
            <div className="lg:col-span-2 space-y-6">
              <p className="md:text-lg text-md text-muted-foreground leading-relaxed font-dm-sans">
                I'm a frontend engineer focused on crafting accessible,
                performant, and robust user interfaces. I thrive in
                component-driven systems, love thoughtful motion, and care
                deeply about clean code and great UX.
              </p>

              <p className="md:text-lg text-md text-muted-foreground leading-relaxed font-dm-sans">
                I work primarily with React, TypeScript, and Tailwind. I enjoy
                collaboration, design systems, and continuous improvement
                through testing and metrics.
              </p>
            </div>

            {/* Skills/Features List */}
            <div className="md:space-y-4 space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="md:text-lg text-md text-foreground font-dm-sans">
                  Component-driven development
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="md:text-lg text-md text-foreground font-dm-sans">
                  Accessibility-first mindset
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="md:text-lg text-md text-foreground font-dm-sans">
                  Performance and DX
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <span className="md:text-lg text-md text-foreground font-dm-sans">
                  Clear communication
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
