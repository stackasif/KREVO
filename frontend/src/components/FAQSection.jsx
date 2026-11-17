"use client";

import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What sets KREVO apart from other services?",
    answer:
      "KREVO connects brands with vetted UGC creators through a simple and streamlined process. Discover talented creators, launch campaigns, manage collaborations, and receive authentic content all in one place. Spend less time managing creators and more time growing your brand.",
  },
  {
    id: 2,
    question: "Who owns the content created through KREVO?",
    answer:
      "Brands receive the content usage and licensing rights agreed upon for each campaign. All deliverables and usage terms are clearly defined before collaboration begins.",
  },
  {
    id: 3,
    question: "How quickly will I receive my content?",
    answer:
      "Delivery timelines depend on the campaign requirements and creator agreement. You can track your campaign progress and communicate with creators throughout the collaboration.",
  },
  {
    id: 4,
    question: "Do creators post content on their social media?",
    answer:
      "Not necessarily. KREVO supports UGC content creation for your brand's own marketing channels as well as campaigns that include creator social media posting, depending on the agreed requirements.",
  },
  {
    id: 5,
    question: "Can KREVO work for my agency?",
    answer:
      "Yes. Agencies can manage multiple client campaigns, discover suitable creators, organise collaborations, and manage content requirements in one place.",
  },
  {
    id: 6,
    question: "Can I communicate with creators?",
    answer:
      "Yes. Brands can communicate directly with creators to discuss campaign requirements, deliverables, pricing, revisions, and project updates.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  const answerId = `faq-answer-${faq.id}`;

  return (
    <article className="rounded-2xl bg-[#eceae2] px-5 py-5 transition-colors duration-200 hover:bg-[#e9e6dc] sm:px-7 sm:py-6">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-5 text-left"
      >
        <span className="text-base font-semibold leading-snug text-[#22201E] sm:text-lg">
          {faq.question}
        </span>

        <span
          aria-hidden="true"
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#22201E] text-xl font-normal leading-none text-[#E6E3D6] transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        id={answerId}
        hidden={!isOpen}
        className="max-w-3xl pr-2 pt-4 text-sm leading-7 text-[#625F57] sm:pr-12 sm:text-[15px]"
      >
        {faq.answer}
      </div>
    </article>
  );
}

export default function FAQSection() {
  const [openId, setOpenId] = useState(1);

  function toggleFAQ(id) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
            Need to know
          </p>

          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-[#22201E] sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#625F57] sm:text-base">
            Find answers to common questions about discovering creators and
            managing campaigns with KREVO.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[#22201E] px-7 py-3.5 text-sm font-semibold text-[#E6E3D6] transition-colors duration-200 hover:bg-[#3A3732]"
          >
            Start your campaign
            <span aria-hidden="true" className="ml-3 text-base">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
