import { Hero } from "./components/Hero";
import {
  Navbar,
  ProblemSolution,
  HowItWorks,
  ForCustomersAndTechnicians,
  ProtectionPlan,
  Testimonials,
  DownloadFooter,
} from "./components/Sections";
import {
  CustomerTestimonials,
  FAQ,
  RefundPolicy,
  AboutRepairNear,
} from "./components/MoreSections";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <section id="how">
          <HowItWorks />
        </section>
        <ForCustomersAndTechnicians />
        <section id="protection">
          <ProtectionPlan />
        </section>
        <section id="reviews">
          <Testimonials />
        </section>
        <CustomerTestimonials />
        <FAQ />
        <RefundPolicy />
        <AboutRepairNear />
        <DownloadFooter />
      </main>
    </div>
  );
}
