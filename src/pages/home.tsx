import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const projects = [
  {
    id: 1,
    title: "Insight Blog",
    category: "BLOG",
    categoryColor: "bg-white text-[#1D4ED8]",
    badgeBg: "bg-white",
    badgeText: "text-[#1D4ED8]",
    image: "https://picsum.photos/id/1015/800/600",
    imageModal: "https://picsum.photos/id/1015/1200/800",
    desc: "SEO-optimized blog platform with AI content tools. Clean design, lightning-fast loading, and easy admin panel.",
    year: "2025 • Karachi Client",
    testimonialImg: "https://picsum.photos/id/64/48/48",
    testimonialName: "Ayesha Khan • Bloom Boutique",
    testimonialQuote: "Syeda's blog design helped us grow our newsletter subscribers by 450% in just two months. The AI tools made updates effortless.",
    timeline: "3 weeks",
    stack: "Tailwind + AI design tools",
    features: "SEO, Newsletter, Dark mode, Comments",
    result: "450% subscriber growth",
    cta: "Visit Live Website →",
    ctaBg: "bg-[#1D4ED8]",
  },
  {
    id: 2,
    title: "TrendStore",
    category: "E-COMMERCE",
    categoryColor: "bg-[#F59E0B] text-white",
    badgeBg: "bg-[#F59E0B]",
    badgeText: "text-white",
    image: "https://picsum.photos/id/1005/800/600",
    imageModal: "https://picsum.photos/id/1005/1200/800",
    desc: "Full-featured online store with payment integration, cart system, and mobile-first design. Built for a fashion brand.",
    year: "2026 • 300% sales growth",
    testimonialImg: "https://picsum.photos/id/1009/48/48",
    testimonialName: "Bilal Ahmed • TrendStore",
    testimonialQuote: "Sales tripled within 30 days of launch. The checkout experience is buttery smooth and mobile friendly.",
    timeline: "5 weeks",
    stack: "AI design + Payment gateways",
    features: "Cart, Filters, Stripe/JazzCash, Admin panel",
    result: "300% sales increase",
    cta: "Browse Live Store →",
    ctaBg: "bg-[#F59E0B]",
  },
  {
    id: 3,
    title: "GrowthCo",
    category: "BUSINESS",
    categoryColor: "bg-[#1D4ED8] text-white",
    badgeBg: "bg-[#1D4ED8]",
    badgeText: "text-white",
    image: "https://picsum.photos/id/201/800/600",
    imageModal: "https://picsum.photos/id/201/1200/800",
    desc: "Professional website for a service-based business. Booking system, lead forms, and stunning visuals that convert visitors.",
    year: "2026 • Local business",
    testimonialImg: "https://picsum.photos/id/201/48/48",
    testimonialName: "Sara Malik • GrowthCo",
    testimonialQuote: "The website perfectly captures our brand. We receive 20+ leads every week now. Syeda is incredibly talented.",
    timeline: "2 weeks",
    stack: "Tailwind + Booking system",
    features: "Contact forms, Calendar booking, Testimonials",
    result: "Consistent monthly leads",
    cta: "View Live Site →",
    ctaBg: "bg-[#1D4ED8]",
  },
];

const testimonials = [
  {
    img: "https://picsum.photos/id/64/64/64",
    name: "Ayesha Khan",
    role: "Founder, Bloom Boutique",
    quote: '"Syeda delivered a stunning blog website in record time. My audience doubled in the first month! Her AI tools made everything so efficient."',
  },
  {
    img: "https://picsum.photos/id/1009/64/64",
    name: "Bilal Ahmed",
    role: "CEO, TrendStore",
    quote: '"The e-commerce store she built for us is flawless. Payment integration was seamless and we saw immediate sales growth. Extremely professional!"',
  },
  {
    img: "https://picsum.photos/id/201/64/64",
    name: "Sara Malik",
    role: "Director, GrowthCo",
    quote: '"Perfect small business website. She understood my brand instantly and the final result looks premium. Would hire again in a heartbeat."',
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you! I'll reply within 24 hours.",
    });
    setFormData({ name: "", email: "", projectType: "", message: "" });
  }

  const activeProject = projects.find((p) => p.id === activeModal);

  return (
    <div className="bg-[#F3F4F6] text-gray-900 font-inter">
      {/* NAVBAR */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <div className="w-9 h-9 bg-[#1D4ED8] rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-inner">
              SD
            </div>
            <span className="font-space-grotesk text-2xl font-semibold tracking-tight text-[#1D4ED8]">
              Syeda Daniya
            </span>
          </div>

          <div className="hidden md:flex items-center gap-x-8 text-sm font-medium">
            {["about", "portfolio", "services", "testimonials", "contact"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link text-gray-700 hover:text-[#1D4ED8] capitalize transition-colors"
                data-testid={`nav-${id}`}
              >
                {id === "portfolio" ? "Work" : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:flex items-center gap-x-2 px-6 py-3 bg-[#1D4ED8] hover:bg-[#1D4ED8]/90 text-white rounded-3xl font-semibold text-sm shadow-lg shadow-[#1D4ED8]/30 transition-all"
            data-testid="button-hire-nav"
          >
            <span>Hire Me Now</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-[#1D4ED8]"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4">
            <div className="flex flex-col gap-y-4 text-base font-medium">
              {["about", "portfolio", "services", "testimonials", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => { scrollTo(id); setMobileMenuOpen(false); }}
                  className="py-2 text-gray-700 text-left"
                >
                  {id === "portfolio" ? "Portfolio" : id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <button
                onClick={() => { scrollTo("contact"); setMobileMenuOpen(false); }}
                className="mt-4 flex items-center justify-center gap-x-2 px-8 py-4 bg-[#1D4ED8] text-white rounded-3xl font-semibold"
                data-testid="button-hire-mobile"
              >
                Hire Me for Your Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex items-center pt-16"
        style={{ background: "linear-gradient(135deg, #F3F4F6 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-x-2 bg-white px-5 py-2 rounded-3xl shadow-sm text-sm font-medium text-[#1D4ED8]">
              <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
              1 Year Experience • AI-Powered Designs
            </div>

            <h1 className="font-space-grotesk text-5xl md:text-7xl font-semibold leading-none tracking-tighter text-gray-900">
              I'm Syeda Daniya,<br />Web Developer &amp; Designer
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
              with 1 year of experience using AI tools.<br />
              I create modern, responsive websites that help your business grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("portfolio")}
                className="flex-1 md:flex-none px-8 py-5 bg-white border-2 border-[#1D4ED8] hover:border-[#1D4ED8]/80 text-[#1D4ED8] font-semibold rounded-3xl flex items-center justify-center gap-x-3 text-lg shadow-md transition-all"
                data-testid="button-view-work"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex-1 md:flex-none px-8 py-5 bg-[#1D4ED8] hover:bg-[#1D4ED8]/90 text-white font-semibold rounded-3xl flex items-center justify-center gap-x-3 text-lg shadow-xl shadow-[#1D4ED8]/40 transition-all"
                data-testid="button-hire-hero"
              >
                Hire Me
                <span className="text-[#F59E0B] text-2xl">→</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
              <div className="flex items-center gap-x-3">
                <div className="w-8 h-8 bg-[#F59E0B] rounded-2xl border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  100%
                </div>
                <p className="font-medium">Client Satisfaction</p>
              </div>
              <div className="h-5 w-px bg-gray-300 hidden sm:block"></div>
              <div>
                <span className="font-semibold text-[#1D4ED8]">5+ Projects</span> delivered in 1 year
              </div>
              <div className="h-5 w-px bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center gap-x-1">
                <span className="text-[#F59E0B]">★★★★☆</span>
                <span className="font-medium text-gray-600">4.9 Average</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                <img
                  src="https://picsum.photos/id/1015/800/620"
                  alt="Syeda Daniya working on laptop - modern web design"
                  className="w-full rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-3xl shadow-xl px-6 py-3 flex items-center gap-x-3 text-sm font-semibold border border-[#F59E0B]/20">
                <span className="text-[#F59E0B]">✦</span>
                AI-POWERED
                <span className="px-3 py-1 bg-[#F59E0B] text-white text-xs rounded-3xl">Fast Delivery</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1D4ED8] text-white text-sm font-medium px-5 py-3 rounded-3xl flex items-center gap-x-2 shadow-2xl">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                100% RESPONSIVE &amp; MODERN
              </div>
              <div className="absolute top-12 left-12 w-8 h-8 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center text-[#F59E0B] text-xl animate-pulse">
                ✺
              </div>
              <div className="absolute bottom-20 right-8 w-6 h-6 bg-[#1D4ED8]/10 rounded-2xl flex items-center justify-center text-[#1D4ED8] text-xl animate-pulse">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <span className="uppercase tracking-[2px] text-[#F59E0B] font-medium text-sm">MY STORY</span>
              <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold tracking-tight mt-3 mb-8">
                I'm Syeda Daniya,<br />passionate about turning ideas into websites
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                I have delivered{" "}
                <span className="font-semibold text-[#1D4ED8]">100% client satisfaction</span> through creative and
                functional web designs. I specialize in blog websites, e-commerce stores, and small business websites
                — all built faster and smarter with AI tools.
              </p>

              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <div className="text-[#F59E0B] text-6xl font-semibold">1</div>
                  <p className="uppercase text-sm tracking-widest font-medium">Year of professional experience</p>
                </div>
                <div>
                  <div className="text-[#1D4ED8] text-6xl font-semibold">100%</div>
                  <p className="uppercase text-sm tracking-widest font-medium">Client satisfaction rate</p>
                </div>
                <div>
                  <div className="text-[#F59E0B] text-6xl font-semibold">5+</div>
                  <p className="uppercase text-sm tracking-widest font-medium">Projects launched</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-[#F3F4F6] rounded-3xl p-8">
                <h3 className="font-semibold mb-6 flex items-center gap-x-3">
                  <span className="text-[#1D4ED8]">📍</span>
                  MY 1-YEAR JOURNEY
                </h3>
                <div className="space-y-8 relative pl-8 before:content-[''] before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[#1D4ED8] before:to-[#F59E0B]">
                  {[
                    {
                      label: "2025",
                      bg: "bg-[#1D4ED8]",
                      title: "Started freelancing with AI tools",
                      sub: "Learned modern frameworks and AI design automation",
                    },
                    {
                      label: "2025",
                      bg: "bg-[#F59E0B]",
                      title: "First client project delivered",
                      sub: "Blog website — 100% satisfaction in 3 weeks",
                    },
                    {
                      label: "NOW",
                      bg: "bg-[#1D4ED8]",
                      title: "Specializing in AI-enhanced websites",
                      sub: "Helping businesses grow with beautiful, fast-loading sites",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div
                        className={`w-8 h-8 ${item.bg} text-white rounded-2xl flex-shrink-0 flex items-center justify-center text-xs font-bold`}
                      >
                        {item.label}
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#F59E0B] uppercase text-sm font-medium tracking-widest">FEATURED WORK</span>
              <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold tracking-tighter">
                Real projects. Real results.
              </h2>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:flex items-center text-[#1D4ED8] font-medium hover:underline"
            >
              Get in touch →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModal(project.id)}
                className="portfolio-card bg-white rounded-3xl overflow-hidden cursor-pointer group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-4 right-4 ${project.categoryColor} px-4 py-1 text-xs font-semibold rounded-3xl shadow`}
                  >
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-2xl">{project.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{project.desc}</p>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-[#1D4ED8] font-medium">View Project →</span>
                    <span className="text-gray-400">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-6 py-2 bg-[#F3F4F6] text-[#1D4ED8] text-sm font-semibold rounded-3xl">
              WHAT I OFFER
            </span>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold tracking-tighter mt-4">
              Services tailored to grow your business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                bg: "bg-[#1D4ED8]",
                title: "Website Development",
                desc: "Custom, responsive websites built from scratch using the latest frameworks and AI tools for speed and performance.",
                items: [
                  "Responsive layout on all devices",
                  "SEO optimized",
                  "Fast loading (under 2 seconds)",
                ],
              },
              {
                icon: "🎨",
                bg: "bg-[#F59E0B]",
                title: "Website Design",
                desc: "Modern, beautiful UI/UX designs powered by AI. I turn your vision into pixel-perfect interfaces that stand out.",
                items: [
                  "AI-enhanced visual design",
                  "Brand-consistent colors & typography",
                  "Interactive animations",
                ],
              },
              {
                icon: "🛒",
                bg: "bg-[#1D4ED8]",
                title: "E-commerce Solutions",
                desc: "Complete online stores with payment gateways, inventory management, and customer-friendly checkout experience.",
                items: [
                  "Payment integration (EasyPaisa, JazzCash, Stripe)",
                  "Product management dashboard",
                  "Abandoned cart recovery",
                ],
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-[#F3F4F6] rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
                data-testid={`card-service-${i}`}
              >
                <div
                  className={`w-12 h-12 ${service.bg} text-white rounded-2xl flex items-center justify-center text-2xl mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-x-2">
                      <span className="text-green-500">✅</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-x-4 px-12 py-7 bg-[#1D4ED8] hover:bg-[#1D4ED8]/90 text-white text-xl md:text-2xl font-semibold rounded-3xl shadow-2xl transition-all"
              data-testid="button-cta-services"
            >
              Get Your Custom Website Built
              <span className="text-[#F59E0B] text-3xl">→</span>
            </button>
            <p className="text-sm text-gray-500 mt-6">Delivery in as little as 10 days • 100% satisfaction guaranteed</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="uppercase text-[#F59E0B] text-sm font-medium">DON'T JUST TAKE MY WORD</span>
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold tracking-tighter mt-2">
              Over the past year, I've helped clients achieve 100% satisfaction
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm" data-testid={`card-testimonial-${i}`}>
                <div className="flex gap-x-4 items-center mb-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-2xl object-cover" />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="italic text-lg leading-relaxed">{t.quote}</p>
                <div className="mt-8 text-[#F59E0B]">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold tracking-tighter">
              Ready to bring your website idea to life?
            </h2>
            <p className="mt-4 text-xl text-gray-600">Let's build something amazing together. I reply within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#F3F4F6] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-5 bg-white rounded-3xl border border-transparent focus:border-[#1D4ED8] outline-none text-lg transition-colors"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-5 bg-white rounded-3xl border border-transparent focus:border-[#1D4ED8] outline-none text-lg transition-colors"
                  data-testid="input-email"
                />
              </div>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-6 py-5 bg-white rounded-3xl border border-transparent focus:border-[#1D4ED8] outline-none text-lg transition-colors"
                data-testid="select-project-type"
              >
                <option value="">Select your project</option>
                <option value="Blog Website">Blog Website</option>
                <option value="E-commerce Store">E-commerce Store</option>
                <option value="Small Business Website">Small Business Website</option>
                <option value="Custom Web App">Custom Web App / Landing Page</option>
                <option value="Redesign Existing Site">Redesign My Existing Website</option>
              </select>
            </div>

            <div className="mt-8">
              <label className="block text-sm font-medium mb-2">Tell me about your project</label>
              <textarea
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-6 py-5 bg-white rounded-3xl border border-transparent focus:border-[#1D4ED8] outline-none text-lg resize-y transition-colors"
                data-testid="textarea-message"
              />
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className="px-12 py-6 bg-[#1D4ED8] hover:bg-[#1D4ED8]/90 text-white text-xl md:text-2xl font-semibold rounded-3xl flex items-center gap-x-4 shadow-2xl transition-all"
                data-testid="button-submit-contact"
              >
                SEND MESSAGE
                <span className="text-[#F59E0B]">🚀</span>
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-8">
              Or message me instantly on{" "}
              <a href="https://wa.me/923718018621" target="_blank" rel="noreferrer" className="text-[#F59E0B] underline">
                WhatsApp
              </a>{" "}
              • I usually reply in minutes
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1D4ED8] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-y-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-x-2 mb-6">
                <div className="w-9 h-9 bg-white text-[#1D4ED8] rounded-2xl flex items-center justify-center font-bold text-sm">
                  SD
                </div>
                <span className="font-space-grotesk text-3xl">Syeda Daniya</span>
              </div>
              <p className="text-white/70 max-w-xs">
                Modern websites designed &amp; developed with AI to help your business stand out and grow.
              </p>
              <div className="mt-8 flex gap-x-6">
                <a href="https://linkedin.com/in/syeda-daniya" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">LinkedIn</a>
                <a href="https://instagram.com/syeda.daniya" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">Instagram</a>
                <a href="https://facebook.com/syeda.daniya.dev" target="_blank" rel="noreferrer" className="hover:text-[#F59E0B] transition-colors">Facebook</a>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="uppercase text-white/60 text-xs font-medium mb-4">QUICK LINKS</p>
              <div className="flex flex-col gap-y-3 text-white/80">
                {[
                  { label: "Home", id: "hero" },
                  { label: "About", id: "about" },
                  { label: "Portfolio", id: "portfolio" },
                  { label: "Services", id: "services" },
                  { label: "Testimonials", id: "testimonials" },
                ].map((link) => (
                  <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left hover:text-[#F59E0B] transition-colors">
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="uppercase text-white/60 text-xs font-medium mb-4">SERVICES</p>
              <div className="flex flex-col gap-y-3 text-white/80">
                <button onClick={() => scrollTo("services")} className="text-left hover:text-[#F59E0B] transition-colors">Website Development</button>
                <button onClick={() => scrollTo("services")} className="text-left hover:text-[#F59E0B] transition-colors">Website Design</button>
                <button onClick={() => scrollTo("services")} className="text-left hover:text-[#F59E0B] transition-colors">E-commerce Solutions</button>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="uppercase text-white/60 text-xs font-medium mb-4">GET IN TOUCH</p>
              <a href="mailto:syedadaniya621@gmail.com" className="block text-white/80 hover:text-white mb-2 transition-colors">
                syedadaniya621@gmail.com
              </a>
              <a href="https://wa.me/923718018621" className="block text-white/80 hover:text-white transition-colors">
                WhatsApp: +92 371 8018621
              </a>
              <div className="mt-10 text-xs text-white/50">
                © 2026 Syeda Daniya<br />
                Built with passion in Karachi, Pakistan
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT MODAL */}
      {activeModal && activeProject && (
        <div
          className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModal(null);
          }}
        >
          <div
            className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-8 py-8 md:px-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className={`px-5 py-2 text-xs ${activeProject.badgeBg} ${activeProject.badgeText} font-semibold rounded-3xl`}>
                    {activeProject.category}
                  </span>
                  <h2 className="font-space-grotesk text-4xl md:text-5xl font-semibold mt-4">{activeProject.title}</h2>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="text-4xl leading-none text-gray-400 hover:text-gray-900 transition-colors"
                  data-testid="button-close-modal"
                >
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <img
                    src={activeProject.imageModal}
                    alt={activeProject.title}
                    className="rounded-3xl shadow-xl w-full"
                  />
                  <div className="mt-8 bg-[#F3F4F6] p-6 rounded-3xl">
                    <h4 className="font-semibold mb-3">Client Proof</h4>
                    <p className="italic">{activeProject.testimonialQuote}</p>
                    <div className="mt-6 flex items-center gap-x-3">
                      <img src={activeProject.testimonialImg} className="rounded-2xl w-12 h-12 object-cover" alt="" />
                      <div>
                        <p className="text-sm font-medium">{activeProject.testimonialName}</p>
                        <p className="text-[#F59E0B]">★★★★★</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#1D4ED8] uppercase text-sm font-semibold">Project Details</h3>
                    <ul className="mt-4 space-y-4">
                      {[
                        ["Timeline", activeProject.timeline],
                        ["Tech Stack", activeProject.stack],
                        ["Features", activeProject.features],
                        ["Result", activeProject.result],
                      ].map(([label, value]) => (
                        <li key={label} className="flex justify-between border-b border-gray-100 pb-2">
                          <span className="text-gray-500">{label}</span>
                          <span className={`font-medium ${label === "Result" ? "text-[#F59E0B]" : ""}`}>{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t">
                    <button
                      onClick={() => {
                        setActiveModal(null);
                        toast({ title: "Live site", description: "This would open the live website in a real portfolio." });
                      }}
                      className={`block w-full text-center py-6 ${activeProject.ctaBg} text-white font-semibold rounded-3xl text-xl transition-all hover:opacity-90`}
                      data-testid="button-live-site"
                    >
                      {activeProject.cta}
                    </button>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Built with AI-assisted design process. Fully responsive and optimized for speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
