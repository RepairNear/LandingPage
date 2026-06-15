import { Apple, Smartphone, Star, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import phone from "../../assets/phone.jpg";
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Floating blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#FF6B00]/25 blur-3xl"
        animate={reduce ? undefined : { y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-[#0F766E]/25 blur-3xl"
        animate={reduce ? undefined : { y: [0, -25, 0], x: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#FF6B00]/15 blur-3xl"
        animate={reduce ? undefined : { y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-4 py-1.5 text-sm text-[#0F766E] backdrop-blur-md shadow-sm"
          >
            <ShieldCheck className="h-4 w-4" />
            Trusted device repair across Ghana
          </motion.div>
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
            className="mt-6 text-4xl leading-tight tracking-tight text-slate-900 md:text-6xl md:leading-[1.05]"
          >
            Find trusted repair technicians{" "}
            <span className="text-[#FF6B00]">near you</span>
          </motion.h1>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mt-5 max-w-xl text-lg text-slate-600"
          >
            Compare shops, book instantly, and track your repair — all in one place.
          </motion.p>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="h-12 rounded-2xl bg-[#FF6B00] px-6 text-white shadow-lg shadow-[#FF6B00]/30 hover:bg-[#e55f00]">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="h-12 rounded-2xl bg-slate-900 px-6 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800">
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mt-8 flex items-center gap-6 text-sm text-slate-600"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FF6B00] text-[#FF6B00]" />
                ))}
              </div>
              <span>4.9 · 2,300+ reviews</span>
            </div>
            <div className="hidden h-4 w-px bg-slate-300 sm:block" />
            <div className="hidden sm:block">500+ vetted shops</div>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-[#FF6B00]/30 to-[#0F766E]/30 blur-2xl" />
          <motion.div
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto aspect-[9/19] w-full max-w-[300px] overflow-hidden rounded-[3rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl"
          >
            <ImageWithFallback
              src={phone}
              alt="RepairNear app shown on a smartphone"
              className="h-full w-full rounded-[2.2rem] object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
