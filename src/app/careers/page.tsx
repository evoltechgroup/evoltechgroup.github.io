import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Careers() {
  return (
    <main className="bg-[#0B0F2B] text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Shape the future with EvolTech. Join our team of innovators and work
            on cutting-edge projects that make a difference.
          </p>
        </div>
      </section>

      {/* Career opportunities content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-white/80">
                Work on cutting-edge projects using the latest technologies.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p className="text-white/80">
                Continuous learning opportunities and career advancement.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Culture</h3>
              <p className="text-white/80">
                Collaborative environment with 55% women workforce.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
