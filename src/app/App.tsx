// App.tsx
import { Hero } from "./components/Hero";
import {
  Navbar,
  ProblemSolution,
  HowItWorks,
  ForCustomersAndTechnicians,
  ProtectionPlan,
  DownloadFooter,
} from "./components/Sections";
import {
  CustomerTestimonials,
  FAQ,
  AboutRepairNear,
  TermsOfService,   // new import
  PrivacyPolicy,    // new import
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
          <CustomerTestimonials />
          <FAQ />
          <AboutRepairNear />
          <TermsOfService />
          <PrivacyPolicy />
          <DownloadFooter />
        </main>
      </div>
  );
}