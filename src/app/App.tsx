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

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-50/40 via-white to-teal-50/40 text-slate-900">
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
        <DownloadFooter />
      </main>
    </div>
  );
}
