import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <main className="bg-[#0B0F2B] text-white font-sans min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            We are EvolTech - a team of passionate innovators dedicated to
            bringing visionary ideas to life through cutting-edge technology
            solutions.
          </p>
        </div>
      </section>

      {/* Content sections will go here */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <p className="text-lg text-white/80 text-center max-w-4xl mx-auto">
            Content about your company story, mission, vision, and values will
            go here.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
