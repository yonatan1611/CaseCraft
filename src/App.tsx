import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import type { Variants } from 'motion/react';
import AnimatedList from './components/AnimatedList';
import DecryptedText from './components/DecryptedText';
import FloatingLines from './components/FloatingLines';
import GradientText from './components/GradientText';
import Silk from './components/Silk';
import SpotlightCard from './components/SpotlightCard';
import StarBorder from './components/StarBorder';
import TiltedCard from './components/TiltedCard';
import TrueFocus from './components/TrueFocus';
import Waves from './components/Waves';

const heroImage =
  'https://images.unsplash.com/photo-1758551059627-e891d671e010?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600';
const editorialImage =
  'https://images.unsplash.com/photo-1765019710750-c83f44556c46?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600';
const gridImage =
  'https://images.unsplash.com/photo-1771448234972-ba5a3a346105?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600';
const gradientImage =
  'https://images.unsplash.com/photo-1771814574230-49e5a374aafe?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600';


const featureHighlights = [
  'Patient-first research summaries',
  'Clinician-ready care pathways',
  'Regulatory-grade evidence design',
  'Multidisciplinary collaboration',
  'Outcome-driven storytelling'
];

const metrics = [
  { label: 'Care plan adoption', value: 2.1, suffix: 'x' },
  { label: 'Trial enrollment lift', value: 32, suffix: '%' },
  { label: 'Discharge time reduction', value: 18, suffix: '%' },
  { label: 'Partner sites onboarded', value: 14, suffix: '' }
];

const timeline = [
  {
    title: 'Clinical Discovery',
    body: 'Map patient cohorts, unmet needs, and research hypotheses.'
  },
  {
    title: 'Evidence Design',
    body: 'Structure protocols, endpoints, and validation milestones.'
  },
  {
    title: 'Care Enablement',
    body: 'Align teams on pathways, tools, and adoption readiness.'
  },
  {
    title: 'Impact Review',
    body: 'Measure outcomes, iterate on care delivery, and scale.'
  }
];

const sectionVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const containerClass = 'mx-auto w-full max-w-[1400px] px-6 lg:px-12';

type CounterProps = {
  value: number;
  suffix?: string;
};

const Counter = ({ value, suffix = '' }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(parseFloat((value * progress).toFixed(1)));
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-3xl font-semibold text-white md:text-4xl">
      {display}
      {suffix}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-ice">
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className={`${containerClass} flex items-center justify-between py-4`}>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5" />
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-white/60">Asteria Health</p>
              <p className="text-base font-semibold text-white">Clinical Innovation Lab</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-[0.6rem] uppercase tracking-[0.4em] text-white/60 md:flex">
            <a
              href="#manifesto"
              className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
            >
              Mission
            </a>
            <a
              href="#case-studies"
              className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
            >
              Programs
            </a>
            <a
              href="#deep-dive"
              className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
            >
              Impact
            </a>
            <a
              href="#create"
              className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
            >
              Collaborate
            </a>
          </nav>
          <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:border-white/50">
            Partner With Us
          </button>
        </div>
      </header>

      <main className="pt-24">
        <section className="relative overflow-hidden pb-28 pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-70">
              <Silk speed={4.8} scale={1} color="#2F2B39" noiseIntensity={1.4} rotation={0.1} />
            </div>
            <div className="film-grain"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/70 to-obsidian" />
          </div>

          <motion.div
            className={`${containerClass} relative grid min-h-[80vh] items-center gap-14 lg:grid-cols-[0.85fr,1.15fr]`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="space-y-8 lg:pr-16" variants={fadeUp}>
              <GradientText
                className="px-4 py-1 text-xs uppercase tracking-[0.35em]"
                colors={['#22d3ee', '#a855f7', '#38bdf8']}
                showBorder
              >
                Asteria Health Innovation Lab
              </GradientText>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
                <DecryptedText
                  text="Clinical breakthroughs, told with clarity."
                  className="font-semibold"
                  animateOn="view"
                  revealDirection="center"
                  sequential
                />
              </h1>
              <p className="max-w-xl text-lg text-white/70">
                We translate complex healthcare research into human-centered stories that clinicians, patients, and
                partners can act on with confidence.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <StarBorder className="text-xs uppercase tracking-[0.35em]">
                  Explore Programs
                </StarBorder>
                <button className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white/80 transition hover:border-white/60 hover:text-white">
                  View Clinical Trials
                </button>
              </div>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-white/60">
                <span>Patient-first outcomes</span>
                <span>Evidence-led design</span>
                <span>Collaborative care</span>
              </div>
            </motion.div>

            <motion.div className="relative space-y-6 lg:pl-12" variants={scaleIn}>
              <div className="lg:ml-auto lg:w-[78%] float-slow image-grade">
                <TiltedCard
                  imageSrc={heroImage}
                  altText="Asteria Health program preview"
                  captionText="Hero story preview"
                  containerHeight="440px"
                  imageHeight="440px"
                  imageWidth="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={12}
                  showMobileWarning={false}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="w-screen">
            <div className="relative left-1/2 w-[120vw] -translate-x-1/2 px-6">
              <div className="relative overflow-hidden rounded-[40px]">
                <img
                  src={editorialImage}
                  alt="Full bleed feature"
                  className="h-[360px] w-full object-cover md:h-[440px] image-grade parallax-float"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian/60 via-transparent to-obsidian/70" />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <TrueFocus
                    sentence="True Focus"
                    manualMode={false}
                    blurAmount={8}
                    borderColor="#7c3aed"
                    glowColor="rgba(124, 58, 237, 0.7)"
                    animationDuration={0.55}
                    pauseBetweenAnimations={1}
                    className="text-white drop-shadow-[0_14px_30px_rgba(0,0,0,0.75)]"
                    wordClassName="text-[5.5rem] md:text-[7rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="manifesto" className="relative py-20">
          <div className="absolute inset-0 -z-10 opacity-70">
            <FloatingLines
              animationSpeed={0.85}
              linesGradient={['#22d3ee', '#8b5cf6', '#38bdf8']}
              lineCount={20}
              lineDistance={0.14}
              interactive
              parallax
              parallaxStrength={0.18}
              mixBlendMode="screen"
            />
          </div>
          <div className={`${containerClass} grid gap-12 lg:grid-cols-[1fr,1.2fr]`}>
            <div className="space-y-6">
              <GradientText className="px-4 py-1 text-xs uppercase tracking-[0.35em]" showBorder>
                Our Mission
              </GradientText>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                <DecryptedText text="Accelerate care with evidence and empathy." animateOn="view" />
              </h2>
              <p className="text-white/70">
                We partner with clinicians to deliver patient-first research, clear clinical pathways, and measurable
                outcomes.
              </p>
              <AnimatedList
                items={featureHighlights}
                className="w-full"
                itemClassName="bg-white/5"
                activeItemClassName="bg-white/10"
                textClassName="text-white"
                displayScrollbar={false}
                showGradients={false}
                enableArrowNavigation={false}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SpotlightCard className="bg-white/5">
                <img
                  src={editorialImage}
                  alt="Editorial visuals"
                  className="h-64 w-full rounded-2xl object-cover image-grade"
                />
              </SpotlightCard>
              <SpotlightCard className="bg-white/5">
                <img
                  src={gridImage}
                  alt="Patterned visuals"
                  className="h-64 w-full rounded-2xl object-cover image-grade"
                />
              </SpotlightCard>
              <SpotlightCard className="bg-white/5 md:col-span-2">
                <img
                  src={gradientImage}
                  alt="Gradient field"
                  className="h-48 w-full rounded-2xl object-cover image-grade"
                />
              </SpotlightCard>
            </div>
          </div>
        </section>

        <section id="deep-dive" className="relative overflow-hidden py-24">
          <div className="absolute inset-0">
            <img
              src={gradientImage}
              alt="Gradient backdrop"
              className="h-full w-full object-cover opacity-20 image-grade"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/80 to-obsidian" />
          </div>
          <div className={`${containerClass} relative`}>
            <motion.div
              className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div className="space-y-6" variants={fadeUp}>
                <GradientText className="px-4 py-1 text-xs uppercase tracking-[0.35em]" showBorder>
                  Impact Review
                </GradientText>
                <h2 className="text-3xl font-semibold text-white md:text-5xl">
                  <DecryptedText text="Evidence that turns into outcomes." animateOn="view" />
                </h2>
                <p className="text-white/70">
                  We translate trial data into clear clinical actions and measurable results at scale.
                </p>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <motion.div key={item.title} variants={fadeUp} className="relative pl-8">
                      <span className="absolute left-0 top-1.5 h-full w-px bg-white/10" />
                      <span className="absolute left-[-6px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-white/30 bg-obsidian text-[0.55rem] text-white">
                        {index + 1}
                      </span>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-white/70">{item.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={scaleIn}>
                <SpotlightCard className="bg-white/5">
                  <img
                    src={gridImage}
                    alt="Deep dive visual"
                    className="h-64 w-full rounded-2xl object-cover image-grade"
                  />
                </SpotlightCard>
                <SpotlightCard className="bg-white/5">
                  <img
                    src={editorialImage}
                    alt="Process visual"
                    className="h-56 w-full rounded-2xl object-cover image-grade"
                  />
                </SpotlightCard>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 opacity-50">
            <Waves
              lineColor="rgba(124, 58, 237, 0.5)"
              backgroundColor="transparent"
              waveAmpX={16}
              waveAmpY={10}
              xGap={18}
              yGap={34}
            />
          </div>
          <div className={`${containerClass} relative`}>
            <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 px-8 py-16 text-center backdrop-blur">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">Asteria Standard</p>
              <h2 className="mt-6 text-4xl font-semibold text-white md:text-6xl">
                This is not a brochure. It's a care transformation story.
              </h2>
              <p className="mt-6 text-lg text-white/70">
                A single moment that aligns clinicians, partners, and patients on what matters.
              </p>
            </div>
          </div>
        </section>

        <motion.section
          id="create"
          className="py-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={`${containerClass} grid gap-12 lg:grid-cols-[1.1fr,0.9fr]`}>
            <motion.div className="space-y-6" variants={fadeUp}>
              <GradientText className="px-4 py-1 text-xs uppercase tracking-[0.35em]" showBorder>
                Collaborate
              </GradientText>
              <h2 className="text-3xl font-semibold text-white md:text-5xl">
                <DecryptedText text="Build the next care pathway together." animateOn="view" />
              </h2>
              <p className="text-white/70">
                Bring research, clinical teams, and partners into a shared, evidence-led workflow.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {metrics.map(metric => (
                  <SpotlightCard key={metric.label} className="bg-white/5">
                    <Counter value={metric.value} suffix={metric.suffix} />
                    <p className="mt-3 text-xs uppercase tracking-[0.35em] text-white/60">{metric.label}</p>
                  </SpotlightCard>
                ))}
              </div>
            </motion.div>

            <motion.form className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur" variants={fadeUp}>
              <div className="space-y-4">
                <label className="text-xs uppercase tracking-[0.35em] text-white/60">Program Name</label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70"
                  placeholder="Cardio Remote Monitoring"
                />
              </div>
              <div className="mt-4 space-y-4">
                <label className="text-xs uppercase tracking-[0.35em] text-white/60">Clinical Focus</label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70"
                  placeholder="Reducing readmissions through continuous care"
                />
              </div>
              <div className="mt-4 space-y-4">
                <label className="text-xs uppercase tracking-[0.35em] text-white/60">Milestones</label>
                <div className="grid gap-3">
                  {['Discovery', 'Validation', 'Launch', 'Outcomes'].map(section => (
                    <div
                      key={section}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                    >
                      <span>{section}</span>
                      <button className="rounded-full border border-white/20 px-3 py-1 text-[0.6rem] uppercase tracking-[0.3em] text-white/70">
                        Edit
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <label className="text-xs uppercase tracking-[0.35em] text-white/60">Clinical Summary</label>
                <textarea
                  className="h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/70"
                  placeholder="Summarize patient impact, evidence, and delivery plan."
                />
              </div>
              <button className="mt-6 w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white shadow-lg shadow-cyan-500/30 transition hover:shadow-cyan-500/60">
                Submit Program
              </button>
            </motion.form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
