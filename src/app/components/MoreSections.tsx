import { Star, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
          }`}
        />
      ))}
    </div>
  );
}

export function CustomerTestimonials() {
  const items = [
    {
      rating: 5,
      quote:
        "My laptop screen was fixed the same day. Tracked the whole thing from the app — no calls, no stress.",
      name: "Esi Quaye",
      location: "Kumasi",
    },
    {
      rating: 5,
      quote:
        "Found a verified shop two streets away. The quote matched what I paid. Finally, transparency.",
      name: "Daniel Owusu",
      location: "Accra",
    },
    {
      rating: 4,
      quote:
        "Booked, dropped off, picked up. Super smooth. Protection plan saved me when a part needed replacing.",
      name: "Akua Sarpong",
      location: "Tema",
    },
    {
      rating: 5,
      quote:
        "Felt safe choosing a technician for the first time. The reviews and verified badge made the difference.",
      name: "Yaw Boadu",
      location: "Takoradi",
    },
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Customer stories
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <StaggerItem key={t.name}>
              <GlassCard className="flex h-full flex-col transition-transform duration-300 hover:-translate-y-1">
                <StarRating rating={t.rating} />
                <p className="mt-4 flex-1 text-sm text-slate-700">"{t.quote}"</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/60 pt-4">
                  <div>
                    <div className="text-sm text-slate-900">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.location}, Ghana</div>
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

export function FAQ() {
  const faqs = [
    {
      q: "How do I book a repair?",
      a: "Open the RepairNear app, search for your device or browse shops nearby, choose a technician, fill the quick QC checklist, and confirm. You'll get an instant booking confirmation and tracking link.",
    },
    {
      q: "What is RepairNear Protection?",
      a: "An optional add-on you can attach to any booking. It includes dispute resolution, mediator support, and a 48-hour technician response guarantee — so we step in if something goes wrong.",
    },
    {
      q: "How do I find a trusted technician?",
      a: "Every shop on RepairNear is vetted and rated by real customers. Look for the Verified badge, read the reviews, and compare response times before you book.",
    },
    {
      q: "Can I cancel a booking?",
      a: "Yes. You can cancel free of charge any time before the technician begins the repair. Cancellations after work has started may be subject to a partial fee depending on the shop's policy.",
    },
    {
      q: "How do technicians get verified?",
      a: "Technicians submit their business details, ID, and a workspace photo. Our team reviews each application, checks references, and only approves shops that meet our quality standards.",
    },
    {
      q: "What if I'm not satisfied with the repair?",
      a: "Raise an issue in-app within 7 days of pickup. If you have RepairNear Protection, our mediation team will step in within 48 hours to resolve the dispute or process a refund.",
    },
  ];

  return (
    <section id="faq" className="relative px-6 py-20 scroll-mt-20">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[#0F766E]/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <Reveal className="text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Got questions?
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <GlassCard className="p-2 md:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-b border-white/60 last:border-0"
                >
                  <AccordionTrigger className="px-4 py-4 text-left text-base text-slate-900 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm text-slate-600">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

export function RefundPolicy() {
  const points = [
    {
      title: "Before the repair starts",
      desc: "Cancel any booking before the technician begins work and get a full refund — no questions asked.",
    },
    {
      title: "If the technician doesn't show up",
      desc: "Missed a confirmed appointment? You're automatically eligible for a 100% refund and a credit on your next booking.",
    },
    {
      title: "If the repair fails or causes new issues",
      desc: "With RepairNear Protection, you can request a re-repair or refund within 7 days of pickup. Our mediator will respond within 48 hours.",
    },
    {
      title: "How to request a refund",
      desc: "Open your booking in the app, tap 'Request Refund', and choose a reason. Funds are returned to your original payment method within 3–5 business days.",
    },
  ];

  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-sm uppercase tracking-widest text-[#0F766E]">
            Fair & simple
          </div>
          <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
            Refund & cancellation policy
          </h2>
          <p className="mt-3 text-slate-600">
            We keep refunds straightforward. Here's what you need to know.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <GlassCard className="p-8 md:p-10">
            <ol className="space-y-6">
              {points.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[#FF6B00]/10 text-sm text-[#FF6B00]">
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-lg text-slate-900">{p.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 rounded-2xl border border-white/60 bg-white/50 p-4 text-sm text-slate-600">
              Need help with a specific booking? Reach out to{" "}
              <a href="mailto:support@repairnear.app" className="text-[#0F766E] underline">
                support@repairnear.app
              </a>{" "}
              and our team will respond within one business day.
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutRepairNear() {
  return (
    <section id="about" className="relative px-6 py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="text-sm uppercase tracking-widest text-[#0F766E]">
              About RepairNear
            </div>
            <h2 className="mt-3 text-3xl text-slate-900 md:text-4xl">
              Built in Ghana, for everyday device owners and the people who fix
              them.
            </h2>
            <p className="mt-5 text-slate-600">
              RepairNear started with a simple frustration: getting a phone or
              laptop fixed shouldn't feel like a gamble. Our mission is to make
              device repair transparent, trustworthy, and stress-free for every
              Ghanaian — from Accra to Takoradi.
            </p>
            <p className="mt-4 text-slate-600">
              We connect customers with vetted technicians, show what each
              repair includes upfront, and back every booking with optional
              Protection. For technicians, we provide tools to grow their shop,
              manage jobs, and reach more customers.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Users, label: "Customers first" },
                { icon: Wrench, label: "Skilled shops" },
                { icon: Sparkles, label: "Real transparency" },
              ].map((v) => (
                <GlassCard key={v.label} className="p-4 text-center">
                  <v.icon className="mx-auto h-5 w-5 text-[#FF6B00]" />
                  <div className="mt-2 text-xs text-slate-700">{v.label}</div>
                </GlassCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#FF6B00] via-[#ff944d] to-[#0F766E]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_60%)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                  <ShieldCheck className="h-12 w-12" />
                  <div className="mt-3 text-2xl">The RepairNear team</div>
                  <div className="mt-1 text-sm text-white/80">
                    Made with care in Accra
                  </div>
                </div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
