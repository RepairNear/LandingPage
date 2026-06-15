import {
  ShieldCheck,
  Tag,
  MapPin,
  Search,
  ClipboardCheck,
  PackageCheck,
  Wrench,
  Users,
  Star,
  CheckCircle2,
  Apple,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import LOGO_SRC from "../../assets/icon.jpg";


function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/60 bg-white/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export function ProblemSolution() {
  const items = [
    {
      icon: ShieldCheck,
      problem: "No idea who to trust",
      solution: "Vetted, rated technicians",
      desc: "Every shop on RepairNear is verified and reviewed by real customers.",
    },
    {
      icon: Tag,
      problem: "Unclear what you're paying for",
      solution: "Full repair transparency",
      desc: "See exactly what each repair includes before you book — no surprises.",
    },
    {
      icon: MapPin,
      problem: "Where is my device?",
      solution: "Real-time order tracking",
      desc: "Watch your repair progress live, from drop-off to pickup.",
    },
  ];
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Why RepairNear
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            Repairs without the guesswork
          </h2>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, problem, solution, desc }) => (
            <StaggerItem key={problem}>
              <GlassCard className="h-full transition-transform duration-300 hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-5 text-sm text-slate-500 line-through">
                  {problem}
                </div>
                <div className="mt-1 text-xl text-slate-900">{solution}</div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Browse",
      desc: "Choose a shop nearby or search by device or brand.",
    },
    {
      icon: ClipboardCheck,
      title: "Book",
      desc: "Fill a quick QC checklist and pick a protection plan.",
    },
    {
      icon: PackageCheck,
      title: "Track",
      desc: "Get live updates from drop-off to pickup.",
    },
  ];
  return (
    <section className="relative px-6 py-20">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F766E]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            How it works
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            From broken to brand-new in 3 steps
          </h2>
        </div>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-3 md:gap-4">
          {steps.map((s, i) => (
            <StaggerItem key={s.title} className="relative">
              <GlassCard className="h-full text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FF6B00] to-[#ff944d] text-white shadow-lg shadow-[#FF6B00]/30">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="mt-4 text-xs uppercase tracking-widest text-[#0F766E]">
                  Step {i + 1}
                </div>
                <div className="mt-1 text-xl text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </GlassCard>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-[#FF6B00] md:block" />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function ForCustomersAndTechnicians() {
  const customer = [
    "Verified shops & technicians",
    "Optional protection plans",
    "Real-time order tracking",
    "Full repair transparency",
  ];
  const tech = [
    "Grow your repair business",
    "Manage jobs effortlessly",
    "Instant job alerts nearby",
    "Flexible subscription plans",
  ];

  const Card = ({
    title,
    subtitle,
    items,
    cta,
    icon: Icon,
    accent,
  }: {
    title: string;
    subtitle: string;
    items: string[];
    cta: string;
    icon: typeof Users;
    accent: string;
  }) => (
    <GlassCard className="flex h-full flex-col">
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
        style={{ backgroundColor: accent }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-5 text-2xl text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-slate-700">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" style={{ color: accent }} />
            {it}
          </li>
        ))}
      </ul>
      <Button
        className="mt-6 h-11 rounded-2xl text-white"
        style={{ backgroundColor: accent }}
      >
        {cta}
      </Button>
    </GlassCard>
  );

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Built for everyone
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            One marketplace. Two sides. Everyone wins.
          </h2>
        </div>

        {/* Mobile tabs */}
        <div className="mt-10 md:hidden">
          <Tabs defaultValue="customers">
            <TabsList className="w-full rounded-2xl bg-white/60 p-1 backdrop-blur">
              <TabsTrigger value="customers" className="flex-1 rounded-xl">
                For Customers
              </TabsTrigger>
              <TabsTrigger value="tech" className="flex-1 rounded-xl">
                For Technicians
              </TabsTrigger>
            </TabsList>
            <TabsContent value="customers" className="mt-6">
              <Card
                title="For Customers"
                subtitle="Find the right shop, fast."
                items={customer}
                cta="Get Started"
                icon={Users}
                accent="#FF6B00"
              />
            </TabsContent>
            <TabsContent value="tech" className="mt-6">
              <Card
                title="For Technicians"
                subtitle="Take your shop online."
                items={tech}
                cta="Register Your Shop"
                icon={Wrench}
                accent="#0F766E"
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop split */}
        <Stagger className="mt-12 hidden gap-6 md:grid md:grid-cols-2">
          <StaggerItem>
            <Card
              title="For Customers"
              subtitle="Find the right shop, fast."
              items={customer}
              cta="Get Started"
              icon={Users}
              accent="#FF6B00"
            />
          </StaggerItem>
          <StaggerItem>
            <Card
              title="For Technicians"
              subtitle="Take your shop online."
              items={tech}
              cta="Register Your Shop"
              icon={Wrench}
              accent="#0F766E"
            />
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

export function ProtectionPlan() {
  const features = [
    "Dispute resolution",
    "Mediator support",
    "48-hour technician response",
  ];
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl">
       <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-[#0F766E] to-[#0a534e] p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#FF6B00]/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                RepairNear Protection
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl">
                Add Protection — we step in if something goes wrong.
              </h3>
              <p className="mt-3 max-w-lg text-white/80">
                Optional peace of mind for any booking. Mediation, response
                guarantees, and dispute support — built in.
              </p>
            </div>
            <GlassCard className="bg-white/10 border-white/20 text-white">
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF6B00] text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
       </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  const quotes = [
    {
      name: "Ama Boateng",
      role: "Customer · Accra",
      rating: 5,
      text: "Got my iPhone screen replaced in 2 hours. The live tracking gave me total peace of mind.",
    },
    {
      name: "Kwame Mensah",
      role: "Technician · Kumasi",
      rating: 5,
      text: "RepairNear doubled my bookings in a month. The job alerts are a game changer.",
    },
    {
      name: "Yaa Owusu",
      role: "Customer · Tema",
      rating: 5,
      text: "Transparent pricing — exactly what I needed. No haggling, no surprises.",
    },
    {
      name: "Kojo Asare",
      role: "Technician · Takoradi",
      rating: 4,
      text: "Easy to manage all my jobs in one app. Customers love the protection plan too.",
    },
  ];
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Loved across Ghana
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            Trusted by customers and technicians alike
          </h2>
        </div>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quotes.map((q) => (
            <StaggerItem key={q.name}>
            <GlassCard className="flex h-full flex-col transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < q.rating
                        ? "fill-[#FF6B00] text-[#FF6B00]"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm text-slate-700">"{q.text}"</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-900">{q.name}</div>
                  <div className="text-xs text-slate-500">{q.role}</div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#0F766E]/10 px-2 py-0.5 text-[10px] text-[#0F766E]">
                  <ShieldCheck className="h-3 w-3" />
                  Verified
                </span>
              </div>
            </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function DownloadFooter() {
  return (
    <footer className="relative px-6 pb-10 pt-16">
      <div className="mx-auto max-w-6xl">
       <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 p-10 text-center shadow-xl backdrop-blur-md md:p-14">
          <div className="pointer-events-none absolute -left-20 top-0 h-60 w-60 rounded-full bg-[#FF6B00]/25 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-[#0F766E]/25 blur-3xl" />
          <h3 className="relative text-3xl text-slate-900 md:text-4xl">
            Your trusted repair, right around you.
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-600">
            Download RepairNear and book your first repair in minutes.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://apps.apple.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#FF6B00] px-6 text-white shadow-lg shadow-[#FF6B00]/30 transition hover:bg-[#e55f00]"
            >
              <Apple className="h-5 w-5" />
              Download for iOS
            </a>
            <a
              href="https://play.google.com"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
            >
              <Smartphone className="h-5 w-5" />
              Download for Android
            </a>
          </div>
        </div>
       </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={LOGO_SRC}
              alt="RepairNear logo"
              className="h-7 w-7 rounded-lg object-cover shadow-sm"
            />
            <span className="text-slate-900">RepairNear</span>
          </div>
          <div>© 2026 RepairNear. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <ImageWithFallback
            src={LOGO_SRC}
            alt="RepairNear logo"
            className="h-8 w-8 rounded-xl object-cover shadow-md shadow-[#FF6B00]/30"
          />
          <span className="text-slate-900">RepairNear</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#protection" className="hover:text-slate-900">Protection</a>
          <a href="#reviews" className="hover:text-slate-900">Reviews</a>
        </nav>
        <Button className="h-9 rounded-xl bg-[#FF6B00] px-4 text-white hover:bg-[#e55f00]">
          Get the app
        </Button>
      </div>
    </header>
  );
}
