"use client";

import { motion, useReducedMotion } from "motion/react";

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your brand, product, content style, platform, and budget. A clear brief helps us understand the creators your campaign needs.",
    detail: "Your campaign brief",
    tags: ["Campaign goal", "Content type", "Budget range"],
  },
  {
    number: "02",
    title: "Discover your best-fit creators",
    description:
      "KREVO helps you explore relevant creators based on your campaign requirements, content style, and audience fit.",
    detail: "Creator matching",
    tags: ["Niche relevance", "Content quality", "Audience fit"],
  },
  {
    number: "03",
    title: "Choose and confirm",
    description:
      "Review creator profiles, compare their work, and confirm the creators who feel right for your brand and campaign.",
    detail: "Your creator shortlist",
    tags: ["Review profiles", "Compare creators", "Confirm selection"],
  },
  {
    number: "04",
    title: "Receive content made for your brand",
    description:
      "Creators produce content based on the agreed brief. Review the submissions and receive content ready for your marketing needs.",
    detail: "Content delivery",
    tags: ["Creator production", "Content review", "Final delivery"],
  },
];

function StepCard({ step }) {
  return (
    <motion.article
      variants={cardItemVariants}
      className="h-full rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.18em] text-[#6E6A60]">
          STEP {step.number}
        </span>
        <span className="h-px w-12 bg-[#B8B4A9]" />
      </div>

      <h3 className="max-w-sm text-lg font-semibold leading-snug text-[#22201E] sm:text-xl">
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[#625F57]">
        {step.description}
      </p>

      <div className="mt-6 border-t border-[#B8B4A9] pt-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#777267]">
          {step.detail}
        </p>
        <div className="flex flex-wrap gap-2">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#B8B4A9] px-3 py-1.5 text-xs text-[#4F4B43]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
              How it works
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              From your brief to content that moves your brand.
            </h2>
          </motion.div>

          <motion.div
            className="lg:justify-self-end lg:pb-1"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="max-w-xl text-sm leading-7 text-[#625F57] sm:text-base">
              Finding the right creators should feel simple. KREVO brings the
              campaign journey into one clear process, so you can move from an
              idea to creator-made content with confidence.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          variants={reduceMotion ? undefined : cardContainerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.08 }}
        >
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-5 rounded-2xl border border-[#B8B4A9] bg-[#22201E] px-6 py-7 text-[#E6E3D6] sm:flex-row sm:items-center sm:justify-between sm:px-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8B4A9]">
              Ready when you are
            </p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Your next campaign starts with a brief.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#D0CCC0]">
              Tell us what you want to create. We’ll help you find creators
              who fit the work.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#E6E3D6] px-5 py-3 text-sm font-semibold text-[#22201E] transition-colors hover:bg-white"
          >
            Find your creator
            <span aria-hidden="true" className="ml-3 text-base">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
