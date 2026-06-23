import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import logoZaish from "@assets/zaish-energy-logo.svg";
import heroImage from "@assets/solar-farm_1781983544856.webp";
import logoCanadianSolar from "@assets/partners/CANADIAN-SOLAR.webp";
import logoDubaiWater from "@assets/partners/DUBAI-WATER-AUTHORITY.webp";
import logoEnviromena from "@assets/partners/ENVIROMENA.webp";
import logoHensel from "@assets/partners/HENSEL.webp";
import logoHsbc from "@assets/partners/HSBC.webp";
import logoJinko from "@assets/partners/JINKO-SOLAR.webp";
import logoLapp from "@assets/partners/LAPP.webp";
import logoMap from "@assets/partners/MAP.webp";
import logoMasdar from "@assets/partners/MASDAR.webp";
import logoPvh from "@assets/partners/PVH.webp";
import logoTrina from "@assets/partners/TRINASOLAR.webp";
import logoVtti from "@assets/partners/VTTI.webp";
import logoYellowDoor from "@assets/partners/YELLOW-DOOR-ENERGY.webp";
import projectAirport from "@assets/portfolio/AbuDhabi_airport.webp";
import projectMBR from "@assets/portfolio/MBR-PROJECT.webp";
import projectHSBC from "@assets/portfolio/HSBC-PROJECT.webp";
import {
  Sun,
  Zap,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  ChevronsDown,
  ArrowRight,
  CheckCircle,
  Settings,
  Building2,
  BarChart3,
  Wrench,
  Cpu,
} from "lucide-react";

const partnerLogos = [
  { src: logoCanadianSolar, alt: "Canadian Solar" },
  { src: logoDubaiWater, alt: "Dubai Water Authority" },
  { src: logoEnviromena, alt: "Enviromena" },
  { src: logoHensel, alt: "Hensel" },
  { src: logoHsbc, alt: "HSBC" },
  { src: logoJinko, alt: "Jinko Solar" },
  { src: logoLapp, alt: "Lapp" },
  { src: logoMap, alt: "MAP" },
  { src: logoMasdar, alt: "Masdar" },
  { src: logoPvh, alt: "PVH" },
  { src: logoTrina, alt: "Trina Solar" },
  { src: logoVtti, alt: "VTTI" },
  { src: logoYellowDoor, alt: "Yellow Door Energy" },
];

function PartnersMarquee() {
  const controls = useAnimationControls();
  const [paused, setPaused] = useState(false);

  const duration = 30;
  const track = [...partnerLogos, ...partnerLogos];

  const start = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration, ease: "linear", repeat: Infinity },
    });

  const handleMouseEnter = () => {
    setPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setPaused(false);
    start();
  };

  return (
    <section className="py-24 border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <div className="text-xs font-bold tracking-widest mb-3 text-[#EE3600]">
          TRUSTED BY INDUSTRY LEADERS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-syne text-white">
          Our Strategic Partners
        </h2>
      </div>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #131314, transparent)",
          }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #131314, transparent)",
          }}
        />

        <motion.div
          className="flex gap-12 w-max"
          animate={controls}
          onViewportEnter={() => {
            if (!paused) start();
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-6 hover:bg-white/10 transition-all duration-300 cursor-default flex-shrink-0"
              style={{ minWidth: "160px" }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-auto object-contain brightness-100 opacity-80 hover:brightness-100 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131314] text-white font-sans selection:bg-[#EE3600] selection:text-white">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#131314]/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img
            alt="Zaish Energy Logo"
            className="h-10 w-auto"
            src={logoZaish}
          />
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#e7bdb3]">
            <a href="#about" className="hover:text-[#EE3600] transition-colors">
              About
            </a>
            <a
              href="#services"
              className="hover:text-[#EE3600] transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-[#EE3600] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-[#EE3600] transition-colors"
            >
              Contact
            </a>
          </div>
          <button
            data-testid="button-get-quote-nav"
            className="px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white bg-[#EE3600] hover:bg-[#d02e00] hover:shadow-[0_0_15px_rgba(238,54,0,0.4)] transition-all duration-300 active:scale-95"
            style={{ borderRadius: "0" }}
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroImage}
            alt="A sprawling, high-precision utility-scale solar farm"
            className="w-full h-full bg-cover bg-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,29,47,0.6) 0%, rgba(13,13,14,1) 100%)",
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest border backdrop-blur-sm"
              style={{
                borderColor: "rgba(238,54,0,0.4)",
                color: "#EE3600",
                backgroundColor: "rgba(238,54,0,0.1)",
              }}
            >
              UAE'S LEADING SOLAR EPC CONTRACTOR
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-extrabold font-syne leading-[1.1] tracking-tighter mb-6 uppercase text-white">
              THE FUTURE OF <br />
              <span style={{ color: "#EE3600" }}>ENERGY IS NOW</span>
            </h1>
            <p className="text-base sm:text-lg text-[#c5c7c8] mb-10 max-w-2xl mx-auto leading-relaxed">
              Precision solar engineering from design to commissioning. Serving
              utility, commercial, and industrial sectors across the UAE since
              2018.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                data-testid="button-get-quote-hero"
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-sm bg-[#EE3600] text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#d02e00] transition-all hover:shadow-[0_0_15px_rgba(238,54,0,0.4)] transition-all duration-300 active:scale-95 group"
              >
                GET FREE QUOTE{" "}
                <ArrowRight className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                data-testid="button-view-projects-hero"
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 text-sm font-bold uppercase tracking-widest flex items-center justify-center border border-[#EE3600] text-[#EE3600] hover:bg-[#d02e00] transition-all hover:text-white active:scale-95"
              >
                VIEW PROJECTS
              </button>
            </div>
            <div className="mt-20">
              <ChevronsDown className="inline-block tracking-wider text-white animate-bounce text-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. METRICS */}
      <section
        className="py-12 border-y border-white/5 relative z-20"
        style={{ backgroundColor: "#001D2F" }}
      >
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center px-4">
              <div
                className="text-4xl md:text-5xl font-bold font-syne mb-2"
                style={{ color: "#ffffff" }}
              >
                99.9<span className="text-xl md:text-3xl font-bold font-syne ml-1">%</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#c5c7c8] font-medium">
                Uptime
              </div>
            </div>
            <div className="text-center px-4">
              <div
                className="text-4xl md:text-5xl font-bold font-syne mb-2"
                style={{ color: "#ffffff" }}
              >
                 2<span className="text-xl md:text-3xl font-bold font-syne ml-1">TWh+</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#c5c7c8] font-medium">
                Generated
              </div>
            </div>
            <div className="text-center px-4">
              <div
                className="text-4xl md:text-5xl font-bold font-syne mb-2"
                style={{ color: "#ffffff" }}
              >
                8
              </div>
              <div className="text-xs uppercase tracking-widest text-[#c5c7c8] font-medium">
                Years
              </div>
            </div>
            <div className="text-center px-4">
              <div
                className="text-4xl md:text-5xl font-bold font-syne mb-2"
                style={{ color: "#ffffff" }}
              >
                40<span className="text-xl md:text-3xl font-bold font-syne ml-1">+</span>
              </div>
              <div className="text-xs uppercase tracking-widest text-[#c5c7c8] font-medium">
                Industry Certifications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT */}
      <section id="about" className="py-32 kinetic-grid relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="text-sm font-bold tracking-widest mb-4"
                style={{ color: "#EE3600" }}
              >
                ABOUT ZAISH ENERGY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-syne mb-6 leading-tight">
                Engineering the UAE's Solar Infrastructure
              </h2>
              <p className="text-[#c5c7c8] mb-8 leading-relaxed text-lg">
                We bring industrial precision and deep engineering expertise to
                every project. From multi-megawatt utility plants to complex
                commercial rooftops, we design, build, and operate solar assets
                that perform flawlessly.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Design and Engineering",
                  "Procurement",
                  "Construction",
                  "O&M Services",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#c5c7c8] font-medium"
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#EE3600" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                className="px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-[#EE3600] hover:bg-[#d02e00] transition-all hover:shadow-[0_0_15px_rgba(238,54,0,0.4)] transition-all duration-300 active:scale-95"
                style={{
                  borderRadius: "0",
                }}
              >
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="glass-card p-4 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80"
                  alt="Solar Tech"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div
                  className="absolute bottom-8 left-8 right-8 glass-card p-6 border-l-4"
                  style={{ borderLeftColor: "#EE3600" }}
                >
                  <div className="text-2xl font-bold font-syne mb-1">
                    SINCE 2018
                  </div>
                  <div className="text-sm text-[#c5c7c8] uppercase tracking-wider">
                    Main Contractor & Subcontractor
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section
        id="services"
        className="py-32"
        style={{ backgroundColor: "#001D2F" }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div
              className="text-sm font-bold tracking-widest mb-4"
              style={{ color: "#EE3600" }}
            >
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-syne">
              Comprehensive EPC Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Design and Engineering",
                icon: Settings,
                desc: "End-to-end solar engineering design and consultancy ensuring maximum efficiency and full regulatory compliance.",
              },
              {
                title: "EPC Contracting",
                icon: Cpu,
                desc: "Full Engineering, Procurement, and Construction management for seamless solar project delivery at every scale.",
              },
              {
                title: "Utility-Scale Plants",
                icon: Zap,
                desc: "Large-scale utility and industrial grid-tied installations built for maximum yield and grid stability.",
              },
              {
                title: "C and I Solar",
                icon: Building2,
                desc: "Rooftop and ground-mount solar solutions tailored for businesses, factories, and logistics facilities.",
              },
              {
                title: "Commissioning",
                icon: BarChart3,
                desc: "Expert system testing, grid connection validation, and comprehensive commissioning services to spec.",
              },
              {
                title: "Operation and Maintenance Services",
                icon: Wrench,
                desc: "Ongoing operation and maintenance services to maximize system performance and extend asset life.s",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 group hover:border-[#EE3600]/50 transition-colors"
              >
                <service.icon
                  className="w-10 h-10 mb-6"
                  style={{ color: "#EE3600" }}
                />
                <h3 className="text-xl font-bold font-syne mb-3">
                  {service.title}
                </h3>
                <p className="text-[#c5c7c8] text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div
                  className="w-8 h-0.5"
                  style={{ backgroundColor: "#EE3600" }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS */}
      <PartnersMarquee />

      {/* 7. PORTFOLIO */}
      <section id="projects" className="py-32 kinetic-grid bg-[#0d0e0e]">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div
                className="text-sm font-bold tracking-widest mb-4"
                style={{ color: "#EE3600" }}
              >
                PORTFOLIO
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-syne">
                Landmark Installations
              </h2>
            </div>
            <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#EE3600] transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative mb-6 border border-white/10">
                <img
                  src={projectMBR}
                  alt="Al Dhafra PV Expansion"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#131314] px-3 py-1 text-xs font-bold tracking-widest">
                  Operation & Maintenance
                </div>
              </div>
              <h3 className="text-2xl font-bold font-syne mb-2 group-hover:text-[#EE3600] transition-colors">
                MBR Phase III
              </h3>
              <div className="flex items-center justify-between text-[#c5c7c8] text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Dubai, UAE
                </span>
                <span
                  className="font-bold text-lg"
                  style={{ color: "#EE3600" }}
                >
                  1000 MW Ground Mount
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative mb-6 border border-white/10">
                <img
                  src={projectAirport}
                  alt="AbuDhabi International Airport"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#131314] px-3 py-1 text-xs font-bold tracking-widest">
                  Operation & Maintenance
                </div>
              </div>
              <h3 className="text-2xl font-bold font-syne mb-2 group-hover:text-[#EE3600] transition-colors">
                Abu Dhabi International Airport
              </h3>
              <div className="flex items-center justify-between text-[#c5c7c8] text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Abu Dhabi, UAE
                </span>
                <span
                  className="font-bold text-lg"
                  style={{ color: "#EE3600" }}
                >
                  3 MW Carport System
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section
        id="contact"
        className="py-32 bg-[#131314] relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-[#EE3600]/5 blur-[120px] pointer-events-none"
          aria-hidden="true"
        ></div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div
                className="text-sm font-bold tracking-widest mb-4"
                style={{ color: "#EE3600" }}
              >
                GET IN TOUCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-syne mb-8 leading-tight uppercase">
                READY TO POWER YOUR FUTURE?
              </h2>

              <p className="text-[#c5c7c8] font-body-lg mb-12 max-w-md">
                Discuss your solar requirements with our technical experts. We
                provide comprehensive consultations and feasibility studies for
                projects of all sizes.
              </p>

              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#EE3600]/10">
                    <MapPin className="w-6 h-6 text-[#EE3600]" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-bold tracking-widest uppercase mb-1">
                      Office Location
                    </div>
                    <div className="text-lg text-[#c5c7c8]">
                      2102, DAMAC Smart Heights, Barsha Heights,
                      <br />
                      TECOM, Dubai, UAE
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#EE3600]/10">
                    <Mail className="w-6 h-6 text-[#EE3600]" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-bold tracking-widest uppercase mb-1">
                      Email
                    </div>
                    <div className="text-lg text-[#c5c7c8] hover:text-[#EE3600] transition-colors cursor-pointer">
                      info@zaishenergy.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#EE3600]/10">
                    <Phone className="w-6 h-6 text-[#EE3600]" />
                  </div>
                  <div>
                    <div className="text-sm text-white font-bold tracking-widest uppercase mb-1">
                      Phone
                    </div>
                    <div className="text-lg text-[#c5c7c8] hover:text-[#EE3600] transition-colors cursor-pointer">
                      +971 4 123 4567
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[#c5c7c8] mb-2 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#131314]/50 border border-[#5d4039] p-4 text-white focus:outline-none focus:border-[#EE3600] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[#c5c7c8] mb-2 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#131314]/50 border border-[#5d4039] p-4 text-white focus:outline-none focus:border-[#EE3600] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[#c5c7c8] mb-2 uppercase">
                    Service Required
                  </label>
                  <div className="relative">
                    <select className="w-full bg-[#131314]/50 border border-[#5d4039] p-4 text-white focus:outline-none focus:border-[#EE3600] transition-colors appearance-none">
                      <option>Utility Scale Solar</option>
                      <option>Commercial & Industrial Rooftop</option>
                      <option>O&M Services</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#c5c7c8] pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold tracking-widest text-[#c5c7c8] mb-2 uppercase">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#131314]/50 border border-[#5d4039] p-4 text-white focus:outline-none focus:border-[#EE3600] transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  data-testid="button-submit-enquiry"
                  className="w-full py-4 text-sm font-bold uppercase text-white tracking-widest transition-colors bg-[#EE3600] hover:bg-[#d02e00] transition-all hover:shadow-[0_0_15px_rgba(238,54,0,0.4)] transition-all duration-300 active:scale-95 mt-4"
                  style={{
                    borderRadius: "0",
                  }}
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer
        style={{ backgroundColor: "#0d0e0e" }}
        className="border-t border-white/10 mt-0"
      >
        <div className="max-w-[1280px] mx-auto px-20 py-16">
          {/* 5-column link grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {/* Solutions */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Solutions
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["#", "Utility-scale"],
                  ["#", "C&I Solar"],
                  ["#", "Residential"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#c5c7c8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#c5c7c8")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["#about", "About"],
                  ["#", "Partners"],
                  ["#portfolio", "Projects"],
                  ["#", "Careers"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#c5c7c8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#c5c7c8")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Support
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["#contact", "Contact"],
                  ["#", "Get a Quote"],
                  ["#", "Technical Support"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#c5c7c8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#c5c7c8")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Legal
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["#", "Privacy Policy"],
                  ["#", "Terms of Service"],
                ].map(([href, label]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "#c5c7c8" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#c5c7c8")
                      }
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                Follow Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="transition-colors duration-200"
                  style={{ color: "#c5c7c8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EE3600")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#c5c7c8")
                  }
                  aria-label="Website"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="transition-colors duration-200"
                  style={{ color: "#c5c7c8" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#EE3600")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#c5c7c8")
                  }
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                alt="Zaish Energy Logo"
                className="h-8 w-auto"
                src={logoZaish}
              />
              <span className="text-xs" style={{ color: "#c5c7c8" }}>
                © {new Date().getFullYear()} Zaish Energy. All rights reserved.
              </span>
            </div>

            <div className="flex gap-3 items-center">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
                <svg
                  className="w-3.5 h-3.5"
                  style={{ color: "#EE3600" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span
                  className="text-[10px] font-bold uppercase tracking-tighter"
                  style={{ color: "#c5c7c8" }}
                >
                  ISO Certified
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10">
                <svg
                  className="w-3.5 h-3.5"
                  style={{ color: "#EE3600" }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                  />
                </svg>
                <span
                  className="text-[10px] font-bold uppercase tracking-tighter"
                  style={{ color: "#c5c7c8" }}
                >
                  UAE Registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
