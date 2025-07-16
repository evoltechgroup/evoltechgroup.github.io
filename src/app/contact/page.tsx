import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <main className="bg-[#0B0F2B] text-white font-sans min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            Let's discuss how we can help bring your vision to life. Get in
            touch with our team of experts.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-[#0B0F2B]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-white/80">info@evoltech.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-phone text-[#0B0F2B]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-location-dot text-[#0B0F2B]"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Offices</h3>
                    <p className="text-white/80">US & India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-yellow-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-yellow-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:border-yellow-400"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
