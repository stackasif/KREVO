
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const workflowData = [
  {
    title: "Find & Hire",
    heading: "Find the Right Creator before You Commit",
    description:
      "Search 1.3m+ vetted Creators by platform, niche, audience, and budget. See verified engagement rates and demographics before you commit. Spend less time searching and more time running campaigns.",
    badges: [
      "Vetted creators",
      "Detailed audience demographics",
      "Free to search",
    ],
  },
  {
    title: "Campaigns",
    heading: "Post Detailed Campaign Briefs in Minutes. Let Creators Come to You.",
    description:
      "Skip the back-and-forth. Describe your campaign and Collabstr generates the brief, surfaces matched creators, and shows you their quoted rates before you hire anyone.",
    badges: [
      "AI campaign",
      "Instant Creator Match",
      "Pricing Transparency",
    ],
  },
  {
    title: "Approve & Pay",
    heading: "Only Pay When the Work Is Done.",
    description:
      "Funds stay in escrow until you approve the content. Once you do, payouts and tax forms to 150 countries are handled automatically.",
    badges: [
      "Pay after approval",
      "Automated tax docs",
      "Payments to 150 countries",
    ],
  },
  {
    title: "Track & Report",
    heading: "Know Exactly How Each Piece of Content Performs.",
    description:
      "See reach, engagement, and ROI across every creator, updated in real time. Say goodbye to messy spreadsheets and manual tracking.",
    badges: [
      "Real-time results",
      "Content tracked automatically",
      "Post-level Analytics",
    ],
  },
  {
    title: "Team",
    heading: "Bring Your Team Together in One Workspace.",
    description:
      "Keep everyone aligned with shared campaigns, organized workflows, and clear team responsibilities. Collaborate without losing track of important updates.",
    badges: [
      "Team collaboration",
      "Role-based access",
      "Shared campaigns",
    ],
  },
  {
    title: "Bring Creators",
    heading: "Manage Every Creator in One Place.",
    description:
      "Already working with Creators outside Collabstr? Invite them and run the same briefs, payments, and tracking alongside your marketplace hires. One roster. Full visibility.",
    badges: [
      "Full creator roster",
      "Unified Workflow",
      "All in one view",
    ],
  },
];

const creators = [
  {
    name: "Elena Rostova",
    username: "@elenaskincare • 184k followers",
    rating: "4.8% ER",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Chloe Davies",
    username: "@chloeglows • 92k followers",
    rating: "5.4% ER",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
  },
  {
    name: "Marcus Thorne",
    username: "@m.thorne • 310k followers",
    rating: "6.1% ER",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
  },
];

function PreviewCard({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-lg rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-4 shadow-md sm:rounded-3xl sm:p-5 ${className}`}
    >
      {children}
    </div>
  );
}

function CreatorRow({ creator }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-3">
      <div className="flex min-w-0 items-center gap-3">
        <img
          src={creator.image}
          alt={creator.name}
          className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-xs font-bold text-gray-900 sm:text-sm">
              {creator.name}
            </span>
          </div>

          <span className="block truncate text-[11px] font-medium text-gray-500">
            {creator.username}
          </span>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <div className="text-xs font-extrabold text-gray-900 sm:text-sm">
          {creator.rating}
        </div>
        <span className="rounded bg-[#eceae2] px-1.5 py-0.5 text-[10px] font-bold text-[#22201E]">
          Verified
        </span>
      </div>
    </div>
  );
}

function FindHirePreview() {
  return (
    <PreviewCard>
      <div className="mb-4 flex items-center gap-2.5 border-b border-[#B8B4A9] pb-4">
        <div className="relative flex-1">
          <input
            readOnly
            value="Beauty & Skincare Creators"
            className="w-full rounded-xl border border-[#B8B4A9] bg-[#eceae2] py-2 pl-9 pr-3 text-xs font-medium text-gray-800 outline-none sm:text-sm"
          />
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-[#B8B4A9] bg-[#eceae2] px-3 py-2 text-xs font-semibold text-gray-700">
          <span className="hidden sm:inline">Filters</span>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        <span className="flex items-center gap-1 rounded-lg border border-[#B8B4A9] bg-[#eceae2] px-2.5 py-1 text-[11px] font-semibold text-[#22201E]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22201E]" />
          Budget: $100 - $500
        </span>
        <span className="rounded-lg bg-[#eceae2] px-2.5 py-1 text-[11px] font-medium text-gray-600">
          US, UK & Canada
        </span>
        <span className="rounded-lg bg-[#eceae2] px-2.5 py-1 text-[11px] font-medium text-gray-600">
          4.9+ Rating
        </span>
      </div>

      <div className="space-y-3">
        {creators.map((creator) => (
          <CreatorRow key={creator.name} creator={creator} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-[#B8B4A9] pt-3 text-xs font-semibold text-gray-500">
        <span>Showing 3 of 1,240+ matched</span>
        <span className="flex cursor-pointer items-center gap-1 font-bold text-[#22201E]">
          View all matches
        </span>
      </div>
    </PreviewCard>
  );
}

function CampaignPreview() {
  return (
    <PreviewCard>
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#B8B4A9] pb-4">
        <div>
          <span className="rounded-md bg-[#eceae2] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#22201E]">
            Active Campaign
          </span>
          <h4 className="mt-1 text-sm font-bold text-[#22201E] sm:text-base">
            Summer Skincare Launch
          </h4>
          <p className="text-xs font-medium text-gray-500">
            Created 2 days ago • Accepting applicants
          </p>
        </div>

        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] px-3 py-1.5 text-center">
          <span className="block text-[10px] font-semibold uppercase text-gray-500">
            Budget
          </span>
          <span className="text-sm font-extrabold text-[#22201E]">
            $300+
          </span>
        </div>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2.5 text-xs">
        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5">
          <span className="block text-[10px] text-gray-400">Category</span>
          <span className="font-bold text-gray-800">
            Beauty & Cosmetics
          </span>
        </div>
        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5">
          <span className="block text-[10px] text-gray-400">
            Deliverable Type
          </span>
          <span className="font-bold text-gray-800">UGC Video (9:16)</span>
        </div>
      </div>

      <div className="mb-2 rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-900 sm:text-sm">
              Campaign Applicants
            </span>
            <span className="animate-pulse rounded-full bg-[#22201E] px-2 py-0.5 text-[10px] font-extrabold text-white">
              18 New
            </span>
          </div>
          <span className="text-xs font-medium text-gray-500">
            Quotes: $150–$400
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex -space-x-2.5 overflow-hidden py-1">
            {creators.map((creator) => (
              <img
                key={creator.name}
                src={creator.image}
                alt={creator.name}
                className="h-9 w-9 rounded-full border-2 border-[#B8B4A9] object-cover"
              />
            ))}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#B8B4A9] bg-[#22201E] text-[11px] font-bold text-white">
              +14
            </div>
          </div>

          <button className="rounded-xl bg-[#22201E] px-3.5 py-1.5 text-xs font-semibold text-white transition hover:bg-black">
            Review All
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5 text-[11px] text-gray-600">
        <span>
          AI Brief auto-matched with <strong>94% relevant</strong> creators
          instantly.
        </span>
      </div>
    </PreviewCard>
  );
}

function PaymentPreview() {
  return (
    <PreviewCard>
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#B8B4A9] pb-4">
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            Order #CL-84920
          </span>
          <h4 className="mt-0.5 text-base font-extrabold text-gray-900 sm:text-lg">
            Mason Park
          </h4>
          <p className="text-xs font-medium text-gray-500">
            Delivered: Unboxing & Routine Video
          </p>
        </div>

        <div className="text-right">
          <span className="text-lg font-extrabold text-gray-900 sm:text-xl">
            $150.00
          </span>
          <span className="block text-[10px] font-medium text-gray-400">
            USD • Direct Escrow
          </span>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 rounded-lg border border-[#B8B4A9] bg-[#eceae2] px-2.5 py-1 text-xs font-semibold text-[#22201E]">
          In escrow ($150 held)
        </span>
        <span className="flex items-center gap-1.5 rounded-lg border border-[#B8B4A9] bg-[#eceae2] px-2.5 py-1 text-xs font-semibold text-[#22201E]">
          In-progress review
        </span>
      </div>

      <div className="mb-5 flex items-center gap-3 rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-3.5">
        <div className="relative flex h-16 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-800">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
            alt="Video thumbnail"
            className="h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <h5 className="truncate text-xs font-bold text-gray-900">
            Mason_Skincare_Final_V1.mp4
          </h5>
          <p className="text-[11px] font-medium text-gray-500">
            0:47 duration • 1080x1920 (9:16)
          </p>
          <span className="mt-0.5 flex items-center gap-1 text-[10px] font-bold text-[#22201E]"> Ready for Brand Signoff
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22201E] px-4 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-black sm:text-sm">
          Mark Order Complete & Release Funds
        </button>

        <button className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#B8B4A9] bg-[#eceae2] px-4 py-2 text-xs font-semibold text-gray-700 transition hover:bg-[#eceae2] sm:text-sm">
          Request Revision
        </button>
      </div>
    </PreviewCard>
  );
}

function AnalyticsPreview() {
  return (
    <PreviewCard>
      <div className="mb-4 flex items-start justify-between border-b border-[#B8B4A9] pb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            Total Reach (30D)
          </span>
          <div className="mt-0.5 flex items-baseline gap-2.5">
            <h4 className="text-xl font-bold text-[#22201E] sm:text-2xl">
              2.4M
            </h4>
            <span className="inline-flex items-center rounded-full bg-[#eceae2] px-2 py-0.5 text-xs font-bold text-[#22201E]">
              +34%
            </span>
          </div>
        </div>

        <span className="rounded-lg bg-[#eceae2] px-2.5 py-1 text-xs font-semibold text-gray-600">
          Last 30 Days
        </span>
      </div>

      <div className="mb-5 rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-3">
        <div className="mb-1 flex items-center justify-between text-[11px] font-semibold text-gray-500">
          <span className="font-bold text-gray-900">Campaign Velocity</span>
          <span className="font-bold text-[#22201E]">Peak: 142k/day</span>
        </div>

        <svg
          viewBox="0 0 300 80"
          className="h-20 w-full overflow-visible"
          fill="none"
          role="img"
          aria-label="Campaign velocity graph"
        >

          <path
            d="M 0 70 Q 30 65, 60 50 T 120 40 T 180 25 T 240 35 T 300 10 L 300 80 L 0 80 Z"
            fill="#D8D5CC"
          />
          <path
            d="M 0 70 Q 30 65, 60 50 T 120 40 T 180 25 T 240 35 T 300 10"
            stroke="#22201E"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="300" cy="10" r="4.5" fill="#22201E" />
          <circle
            cx="300"
            cy="10"
            r="4.5"
            fill="none"
            stroke="#22201E"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-2.5 text-center">
        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Likes
          </span>
          <span className="text-sm font-extrabold text-gray-900 sm:text-base">
            58K
          </span>
        </div>
        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Avg ER
          </span>
          <span className="text-sm font-extrabold text-[#22201E] sm:text-base">
            4.8%
          </span>
        </div>
        <div className="rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-400">
            Avg CPM
          </span>
          <span className="text-sm font-extrabold text-gray-900 sm:text-base">
            $0.08
          </span>
        </div>
      </div>
    </PreviewCard>
  );
}

const teamMembers = [
  {
    name: "Sarah Miller",
    email: "sarah@brandgrowth.co",
    role: "Admin",
    roleStyle: "border-[#B8B4A9] bg-[#eceae2] text-[#22201E]",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "David Sterling",
    email: "david@brandgrowth.co",
    role: "Manager",
    roleStyle: "border-[#B8B4A9] bg-[#eceae2] text-[#22201E]",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Anna Ruiz",
    email: "anna@brandgrowth.co",
    role: "Member",
    roleStyle: "bg-[#eceae2] text-gray-600",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  },
];

function TeamPreview() {
  return (
    <PreviewCard>
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#B8B4A9] pb-4">
        <div>
          <h4 className="text-sm font-bold text-[#22201E] sm:text-base">
            Team & Roles
          </h4>
          <p className="text-xs font-medium text-gray-500">
            5 active team members in workspace
          </p>
        </div>

        <button className="flex shrink-0 items-center gap-1.5 rounded-xl bg-[#22201E] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-black">
          <span className="hidden sm:inline">Invite Team Member</span>
          <span className="sm:hidden">Invite</span>
        </button>
      </div>

      <div className="mb-4 space-y-3">
        {teamMembers.map((member) => (
          <div
            key={member.email}
            className="flex items-center justify-between gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={member.image}
                alt={member.name}
                className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-white"
              />
              <div className="min-w-0">
                <span className="block truncate text-xs font-bold text-gray-900 sm:text-sm">
                  {member.name}
                </span>
                <span className="block truncate text-[11px] font-medium text-gray-400">
                  {member.email}
                </span>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-lg border px-2 py-0.5 text-[11px] font-bold ${member.roleStyle}`}
            >
              {member.role}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5 text-xs">
        <div className="flex min-w-0 items-center gap-2 font-medium text-[#22201E]">
          <span className="truncate">
            1 Pending invitation: <strong>alex@agency.com</strong>
          </span>
        </div>
        <span className="shrink-0 cursor-pointer text-[10px] font-bold text-[#22201E] underline">
          Resend
        </span>
      </div>
    </PreviewCard>
  );
}

const rosterMembers = [
  {
    name: "Liam Vance",
    detail: "TikTok UGC • 5.2% ER",
    type: "Marketplace",
    style: "border-[#B8B4A9] bg-[#eceae2] text-[#22201E]",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Kylie Reed",
    detail: "Direct Agency Contract • 4.9% ER",
    type: "Off-platform",
    style: "border-[#B8B4A9] bg-[#eceae2] text-[#22201E]",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
  },
  {
    name: "Maya Lin",
    detail: "Instagram Partner • 6.1% ER",
    type: "Off-platform",
    style: "border-[#B8B4A9] bg-[#eceae2] text-[#22201E]",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
  },
];

function RosterPreview() {
  return (
    <PreviewCard>
      <div className="mb-3.5 flex items-center justify-between gap-2 border-b border-[#B8B4A9] pb-3.5">
        <h4 className="text-sm font-bold text-[#22201E] sm:text-base">
          Creator Roster
        </h4>

        <div className="flex items-center rounded-xl bg-[#eceae2] p-1 text-[10px] font-bold text-gray-600 sm:text-[11px]">
          <span className="rounded-lg bg-[#eceae2] px-2 py-1 text-gray-900 shadow-sm">
            All (42)
          </span>
          <span className="px-2 py-1">Marketplace (26)</span>
          <span className="hidden px-2 py-1 sm:inline">Off-platform (16)</span>
        </div>
      </div>

      <div className="mb-4 space-y-3">
        {rosterMembers.map((member) => (
          <div
            key={member.name}
            className="flex items-center justify-between gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-2.5"
          >
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={member.image}
                alt={member.name}
                className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-white"
              />
              <div className="min-w-0">
                <span className="block truncate text-xs font-bold text-gray-900 sm:text-sm">
                  {member.name}
                </span>
                <span className="block truncate text-[11px] font-medium text-gray-500">
                  {member.detail}
                </span>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-lg border px-2.5 py-1 text-[10px] font-bold sm:text-[11px] ${member.style}`}
            >
              {member.type}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 rounded-xl border border-[#B8B4A9] bg-[#eceae2] p-3 text-xs">
        <span className="font-semibold text-[#22201E]">
          1-Click Auto Tax 1099 & Escrow for all hires
        </span>
        <span className="shrink-0 cursor-pointer text-[11px] font-bold text-[#22201E]">
          Invite More +
        </span>
      </div>
    </PreviewCard>
  );
}

const previewComponents = [
  FindHirePreview,
  CampaignPreview,
  PaymentPreview,
  AnalyticsPreview,
  TeamPreview,
  RosterPreview,
];

export default function WorkflowSection() {
  const [activeTab, setActiveTab] = useState(0);
  const reduceMotion = useReducedMotion();

  // Automatically move to the next tab every 4 seconds.
  // Clicking a tab also restarts this timer.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveTab((current) => (current + 1) % workflowData.length);
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [activeTab]);



  // Fast Refresh can preserve an old tab index after tabs are removed.
  // Keep the index within the current six-tab range before reading arrays.
  const safeActiveTab = activeTab % workflowData.length;
  const activeData = workflowData[safeActiveTab];
  const ActivePreview = previewComponents[safeActiveTab];

  return (
    <section className="krevo-workflow w-full bg-[#E6E3D6] px-4 py-12 text-[#22201E] selection:bg-[#22201E] selection:text-white cursor-default [&_*]:!cursor-default sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          className="mb-10 text-center md:mb-14"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#22201E] sm:text-4xl lg:text-[46px]">
            Everything in One Workflow
          </h2>

          <p className="mx-auto max-w-2xl text-sm font-medium text-[#22201E]/65 sm:text-base">
            Streamline your end-to-end UGC creator operations from initial
            discovery to real-time ROI tracking.
          </p>
        </motion.div>

        {/* Navigation tabs */}
        <motion.div
          className="mb-8 flex justify-center md:mb-12"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.65,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="no-scrollbar inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-[#22201E] p-1.5 shadow-xl sm:gap-1.5 sm:p-2">
            {workflowData.map((tab, index) => {
              const isActive = safeActiveTab === index;

              return (
                <button
                  key={tab.title}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  aria-pressed={isActive}
                  className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-all duration-300 sm:px-4 sm:py-2 sm:text-xs ${
                    isActive
                      ? "bg-[#eceae2] font-bold text-gray-950 shadow-md"
                      : "bg-transparent text-gray-300 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 sm:h-6 sm:w-6 sm:text-xs ${
                      isActive
                        ? "bg-[#22201E] text-white shadow-sm"
                        : "bg-[#3A3833] text-gray-300"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Main workflow panel */}
        <motion.div
          layout
          transition={{
            layout: {
              duration: reduceMotion ? 0 : 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="relative flex min-h-[580px] items-center overflow-hidden rounded-[28px] bg-[#eceae2] p-6 shadow-lg sm:rounded-[36px] sm:p-10 lg:min-h-[640px] lg:p-14"
        >

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={safeActiveTab}
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: -3 }
              }
              transition={{
                opacity: {
                  duration: reduceMotion ? 0 : 0.28,
                  ease: "easeOut",
                },
                y: {
                  duration: reduceMotion ? 0 : 0.42,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              className="relative z-10 grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
            {/* Left content */}
            <div className="space-y-6 sm:space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eceae2]/70 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-[#22201E] shadow-sm backdrop-blur-sm">
                <span>Step 0{safeActiveTab + 1} of 06</span>
                <span>•</span>
                <span className="text-gray-600">{activeData.title}</span>
              </div>

              <h3 className="text-xl font-bold leading-[1.25] tracking-tight text-[#22201E] sm:text-2xl lg:text-3xl">
                {activeData.heading}
              </h3>

              <p className="max-w-xl text-xs font-normal leading-relaxed text-[#22201E]/80 sm:text-sm">
                {activeData.description}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {activeData.badges.map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-[#B8B4A9] bg-[#eceae2] px-3.5 py-1.5 text-xs font-bold text-gray-800 shadow-sm"
                  >
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right dashboard preview */}
            <div className="pointer-events-none flex w-full cursor-default select-none items-center justify-center">
              <ActivePreview />
            </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
