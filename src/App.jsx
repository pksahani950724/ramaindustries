import logo from "./assets/logo.webp";
import about_us from "./assets/img/about_us.png";
import home from "./assets/img/home.png";
import machine from "./assets/img/machine_list.png";
import { useState } from "react";
const services = [
  {
    title: "CNC Machining",
    description:
      "High-precision machining for complex and critical components.",
    items: [
      "CNC Milling",
      "CNC Turning",
      "Surface Grinding",
      "Precision Component Manufacturing",
      "Batch Production",
      "Prototype Development",
    ],
  },
  {
    title: "Fabrication & Assembly",
    description:
      "Complete fabrication solutions for industrial applications.",
    items: [
      "Sheet Metal Fabrication",
      "Structural Fabrication",
      "Industrial Welding",
      "Sub-Assembly",
      "Mechanical Assembly",
      "Custom Fabricated Components",
    ],
  },
  {
    title: "Engineering Support",
    description:
      "Helping customers accelerate product development.",
    items: [
      "Product Development Support",
      "Reverse Engineering",
      "Design Assistance",
      "Prototype Manufacturing",
      "Process Optimization",
      "Technical Consultation",
    ],
  },
  {
    title: "Tooling, Jigs & Fixtures",
    description:
      "Custom tooling solutions designed to improve productivity and repeatability.",
    items: [
      "Fixture Design & Manufacturing",
      "Production Tooling",
      "Inspection Fixtures",
      "Assembly Fixtures",
      "Custom Manufacturing Solutions",
    ],
  },
  {
    title: "Surface Treatment & Finishing",
    description:
      "Enhancing performance, durability, and appearance.",
    items: [
      "Industrial Coating",
      "Painting",
      "Polishing",
      "Anodizing",
      "Powder Coating",
      "Surface Protection Treatments",
    ],
  },
  {
    title: "Automation & Supply Support",
    description:
      "Supporting modern manufacturing requirements.",
    items: [
      "Automation Integration Support",
      "Robotics Assistance",
      "Material Sourcing",
      "Specialized Component Supply",
      "Vendor Development Support",
    ],
  },
];

export default function RamaIndustriesWebsite() {
  const [files, setFiles] = useState([]);

const handleFileChange = (e) => {
  setFiles(Array.from(e.target.files));
};

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Files:", files);

  // Here you can send FormData to your backend
};
  return (
    <div className="bg-white text-slate-900 overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Rama Industries"
          className="h-14 w-auto"
        />

        <div>
      
        </div>
      </div>

          <nav className="hidden lg:flex gap-10 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-orange-500 transition-all">Home</a>
            <a href="#about" className="hover:text-orange-500 transition-all">About</a>
            <a href="#services" className="hover:text-orange-500 transition-all">Services</a>
            <a href="#gallery" className="hover:text-orange-500 transition-all">Gallery</a>
            <a href="#contact" className="hover:text-orange-500 transition-all">Contact</a>
          </nav>

         <a
        href="https://wa.me/91829187423?text=Hello%20Rama%20Industries,%20I%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all"
      >
        Get Free Quote
      </a>
        </div>
      </header>

      {/* Hero */}
      <section
  id="home"
  className="relative min-h-screen flex items-center bg-white overflow-hidden"
>
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-100 blur-[140px] rounded-full"></div>

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 blur-[140px] rounded-full"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">

    <div>

      <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-100 px-5 py-3 rounded-full mb-8">
        <span className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></span>

        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
          Trusted Industrial Partner
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black leading-tight text-slate-900">
        Precision 
        <span className="block text-blue-700">
          Manufacturing
        </span>

        Engineering
        <span className="block text-orange-500">
          Solutions.
        </span>
      </h1>

      <p className="mt-8 text-xl text-slate-600 leading-9 max-w-2xl">
       Rama Industries is a trusted manufacturing and engineering solutions company specializing in precision CNC machining, fabrication, assembly, tooling, and industrial product development. Backed by over 20 years of manufacturing expertise, we deliver high-accuracy components and end-to-end production support for demanding industries.
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        <a
  href="https://wa.me/91829187423?text=Hello%20Rama%20Industries,%20I%20am%20interested%20in%20your%20industrial%20services.%20Please%20share%20a%20quotation."
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition inline-block"
>
  Get Free Quote
</a>

        {/* <button className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-50 transition">
          Explore Services
        </button> */}
      </div>

      <div className="grid grid-cols-3 gap-5 mt-16">
        {[
          { value: "20+", label: "Years" },
          { value: "500+", label: "Projects" },
          { value: "100%", label: "Quality" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 text-center"
          >
            <h3 className="text-3xl font-black text-orange-500">
              {item.value}
            </h3>

            <p className="text-slate-600 text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </div>

    </div>

    <div>
      <img
       src={about_us}
        alt="Industry"
        className="rounded-[40px] shadow-2xl h-[700px] w-full object-cover"
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
              Engineering Excellence Built on Experience
            </h2>

            <p className="text-lg text-slate-600 leading-9 mb-10">
            Rama Industries is a precision manufacturing company headquartered in Thane, Maharashtra. Established with a vision to provide world-class engineering solutions, we combine modern manufacturing technology with practical industry expertise to serve customers across multiple sectors.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Precision in Every Component',
                'Quality in Every Process',
                'Reliability in Every Delivery',
                'Long-term Customer Partnerships ',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-lg"
                >
                  <p className="text-lg font-semibold">✓ {item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              What We Do
            </p>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Premium Industrial Services
            </h2>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             Comprehensive Engineering & Manufacturing Solutions
            </p>
          </div>

         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      className="group bg-white border border-slate-200 shadow-lg rounded-[35px] p-10 hover:-translate-y-4 transition-all duration-500 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]"
    >
      <div className="w-20 h-20 rounded-3xl bg-orange-500 text-white flex items-center justify-center text-3xl font-black mb-8 group-hover:rotate-6 transition-all">
        {String(index + 1).padStart(2, "0")}
      </div>

      <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

      <p className="text-slate-600 leading-7 mb-6">
        {service.description}
      </p>

      <ul className="space-y-3">
        {service.items.map((item, i) => (
          <li
            key={i}
            className="flex items-start text-slate-700"
          >
            <span className="text-orange-500 mr-3 mt-1">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Process */}
      {/* <section className="py-32">
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
                className="relative bg-white border border-slate-200 shadow-lg rounded-[35px] p-10 backdrop-blur-xl"
              >
                <div className="text-7xl font-black text-orange-500/30 absolute top-4 right-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mt-12">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-orange-500 uppercase tracking-[5px] mb-4 font-semibold">
              Infrastructure
            </p>

            <h2 className="text-5xl md:text-6xl font-black">
              Our Machineries
            </h2>
          </div>

         <div className="grid grid-cols-1">
          <div className="overflow-hidden rounded-[35px] shadow-xl group">
            <img
              src={machine}
              alt="Manufacturing Facility"
              className="w-full h-[550px] object-cover group-hover:scale-105 transition-all duration-700"
            />
          </div>
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

            <p className="text-lg text-slate-600 leading-9 mb-12">
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
                  <p className="text-slate-600">Unit 10, 1, Udyog Bhavan Rd, Anand Nagar, Additional M.I.D.C, Ambernath, Maharashtra 421506</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <h4 className="text-xl font-bold">Phone Number</h4>
                  <p className="text-gray-400">+91 82919 87423</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <div>
                  <h4 className="text-xl font-bold">Email Address</h4>
                  <p className="text-gray-400">business@ramaind.co.in</p>
                </div>
              </div>
            </div>
          </div>

        <div className="bg-white border border-slate-200 rounded-[40px] p-10 shadow-2xl">
  <form onSubmit={handleSubmit} className="space-y-6">

    <input
      type="text"
      placeholder="Your Name"
      required
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500"
    />

    <input
      type="email"
      placeholder="Your Email"
      required
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500"
    />

    <input
      type="text"
      placeholder="Phone Number"
      required
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500"
    />

    <input
      type="text"
      placeholder="Company Name"
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500"
    />

    <textarea
      rows="5"
      placeholder="Tell us about your project"
      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 outline-none focus:border-orange-500"
    ></textarea>

    {/* File Upload */}
    <div>

      <label className="block text-slate-700 font-semibold mb-3">
        Attach Drawings / Files
      </label>

      <label
        htmlFor="attachments"
        className="flex flex-col items-center justify-center w-full p-8 border-2 border-dashed border-slate-300 rounded-2xl cursor-pointer bg-slate-50 hover:bg-orange-50 hover:border-orange-500 transition"
      >

        <svg
          className="w-12 h-12 text-orange-500 mb-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 16V8a5 5 0 0110 0v8a3 3 0 11-6 0V9"
          />
        </svg>

        <p className="font-semibold">
          Click to Upload Files
        </p>

        <p className="text-sm text-slate-500 mt-2">
          PDF, DOC, DOCX, XLS, ZIP, JPG, PNG, STEP , STP (Multiple Files Allowed)
        </p>

        <input
          id="attachments"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.jpg,.jpeg,.png,.dwg,.dxf,.step,.stp"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

    </div>

    {/* Selected Files */}

    {files.length > 0 && (

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

        <h4 className="font-bold mb-3">
          Selected Files ({files.length})
        </h4>

        <div className="space-y-2">

          {files.map((file, index) => (

            <div
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-xl border"
            >

              <span className="truncate text-sm">
                📄 {file.name}
              </span>

              <span className="text-xs text-slate-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>

          ))}

        </div>

      </div>

    )}

    <button
      type="submit"
      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl text-xl font-bold transition duration-300 shadow-lg hover:shadow-orange-300"
    >
      Send Inquiry
    </button>

  </form>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 text-center text-slate-500 bg-white">
       <div className="flex justify-center mb-6">
  <img
    src={logo}
    alt="Rama Industries"
    className="h-16"
  />
</div>

        <p className="text-lg">
          © 2026 Rama Industries. All Rights Reserved.
        </p>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/918291987423"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all hover:scale-110 z-50"
      >
        💬
      </a>
    </div>
  );
}
