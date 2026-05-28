export default function RamaIndustriesWebsite() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-wide text-white">
              RAMA <span className="text-orange-500">INDUSTRIES</span>
            </h1>
          </div>

          <nav className="hidden lg:flex gap-10 text-sm font-semibold text-gray-300">
            <a href="#home" className="hover:text-orange-500 transition-all">Home</a>
            <a href="#about" className="hover:text-orange-500 transition-all">About</a>
            <a href="#services" className="hover:text-orange-500 transition-all">Services</a>
            <a href="#gallery" className="hover:text-orange-500 transition-all">Gallery</a>
            <a href="#contact" className="hover:text-orange-500 transition-all">Contact</a>
          </nav>

          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all">
            Get Free Quote
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-32">
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/10 px-5 py-3 rounded-full mb-8">
              <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-sm tracking-widest uppercase text-gray-200">
                Industrial Engineering Experts
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Next Generation
              <span className="block text-orange-500">
                Manufacturing Solutions
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-9 mb-10 max-w-2xl">
              Rama Industries delivers premium CNC machining, fabrication,
              industrial engineering, automation, and custom manufacturing
              services with precision, speed, and innovation.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(249,115,22,0.6)] transition-all hover:scale-105">
                Explore Services
              </button>

              <button className="border border-white/30 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition-all">
                View Projects
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 text-center"
                >
                  <h3 className="text-4xl font-black text-orange-500 mb-2">
                    {item.value}
                  </h3>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -top-10 -left-10 w-full h-full border border-orange-500/30 rounded-[40px]"></div>

            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop"
              alt="Industry"
              className="rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.5)] object-cover h-[700px] w-full"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
              className="rounded-[40px] shadow-2xl"
            />

            {/* <div className="absolute -bottom-10 -right-10 bg-orange-500 p-10 rounded-3xl shadow-[0_0_40px_rgba(249,115,22,0.5)]">
              <h3 className="text-5xl font-black">20+</h3>
              <p className="text-lg">Years Industry Experience</p>
            </div> */}
          </div>

          <div>
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              About Company
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">
              Building Modern Industrial Excellence
            </h2>

            <p className="text-lg text-gray-300 leading-9 mb-10">
              We specialize in precision engineering, heavy fabrication,
              industrial automation, custom manufacturing, and advanced
              machining solutions. Our focus is on innovation, durability,
              quality assurance, and long-term industrial partnerships.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Advanced CNC Machines',
                'Skilled Engineering Team',
                'Premium Quality Control',
                'Fast Production & Delivery',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl"
                >
                  <p className="text-lg font-semibold">✓ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              What We Do
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Premium Industrial Services
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Delivering world-class industrial manufacturing and engineering
              solutions for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {[
              'CNC Machining',
              'Heavy Fabrication',
              'Industrial Automation',
              'Prototype Development',
              'Machine Maintenance',
              'Custom Manufacturing',
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[35px] p-10 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
              >
                <div className="w-20 h-20 rounded-3xl bg-orange-500 flex items-center justify-center text-3xl font-black mb-8 group-hover:rotate-6 transition-all">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold mb-5">{item}</h3>

                <p className="text-gray-400 leading-8 text-lg">
                  High-performance industrial solutions engineered for maximum
                  efficiency, durability, and precision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
            Workflow
          </p>

          <h2 className="text-5xl md:text-6xl font-black mb-20">
            Our Working Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              'Requirement Analysis',
              'Industrial Planning',
              'Manufacturing Process',
              'Quality Delivery',
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl"
              >
                <div className="text-7xl font-black text-orange-500/30 absolute top-4 right-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-12">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-white/[0.03] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              Infrastructure
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              Workshop & Machinery
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1974&auto=format&fit=crop',
               'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1974&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1974&auto=format&fit=crop',
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[35px] group border border-white/10"
              >
                <img
                  src={img}
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-[40px] p-16 text-center shadow-[0_0_60px_rgba(249,115,22,0.4)]">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              Ready To Start Your Industrial Project?
            </h2>

            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-9 mb-10">
              Partner with Rama Industries for reliable, innovative, and
              high-quality industrial manufacturing solutions.
            </p>

            <button className="bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              Contact Us
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              Let’s Build Something Great Together
            </h2>

            <p className="text-lg text-gray-400 leading-9 mb-12">
              Connect with our industrial experts for manufacturing,
              fabrication, machining, and engineering requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <h4 className="text-xl font-bold">Location</h4>
                  <p className="text-gray-400">Jodhpur, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h4 className="text-xl font-bold">Phone Number</h4>
                  <p className="text-gray-400">+91 XXXXX XXXXX</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xl font-bold">Email Address</h4>
                  <p className="text-gray-400">info@ramaindustries.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-400 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your project"
                className="w-full bg-white/10 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-400 outline-none"
              ></textarea>

              <button className="w-full bg-orange-500 hover:bg-orange-600 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all hover:scale-[1.02]">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-gray-400">
        <h3 className="text-3xl font-black text-white mb-4">
          RAMA <span className="text-orange-500">INDUSTRIES</span>
        </h3>

        <p className="text-lg">
          © 2026 Rama Industries. All Rights Reserved.
        </p>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all hover:scale-110 z-50"
      >
        💬
      </a>
    </div>
  );
}
