
const ArrowRight = () => (
  <svg
    className="w-4 h-4 ml-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#22201E] shrink-0"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-3 h-3 text-white fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const VerifiedIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-blue-400 fill-current"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

// Reusable creator video card


function CreatorVideoCard({
  position,
  category,
  categoryColor,
  creatorName,
  creatorStats,
  performance,
  performanceColor,
  video,
}) {
  return (
    <div
      className={`absolute ${position} w-[190px] sm:w-[230px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(34,32,30,0.18)] border-[3px] border-[#E6E3D6] bg-[#22201E] cursor-pointer transition-transform duration-300`}
    >
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none flex flex-col justify-between p-3.5 sm:p-4 text-white">
        <div className="flex items-center justify-between gap-2">
          <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${categoryColor}`} />
            {category}
          </span>

          <div className="w-6 h-6 shrink-0 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <HeartIcon />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
              {creatorName}
            </span>
            <VerifiedIcon />
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px] sm:text-xs text-white/80 font-medium">
            <span>{creatorStats}</span>
            <span className={`${performanceColor} font-semibold`}>
              {performance}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



// Main Hero component
function Hero() {
  return (
    <section
      id="hero"
      className="w-full bg-[#E6E3D6] text-[#22201E] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left column: Hero content */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">

          {/* Top badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22201E]/5 border border-[#22201E]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />

            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase text-[#22201E]/80">
              Top 1% UGC Creator Network
            </span>
          </div>

          {/* Main heading - reduced by one size level */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-[#22201E] mb-6">
            Scale your brand with authentic{" "}
            <span className="relative inline-block text-[#22201E] underline decoration-[#22201E]/30 underline-offset-8">
              creator videos.
            </span>
            
          </h1>

          {/* Description - reduced by 4px */}
          <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#22201E]/80 max-w-2xl font-normal leading-relaxed mb-8 md:mb-10">
            Connect with high-converting creators, streamline content
            production, and launch high-impact ad creative tested to
            drive real ROAS across TikTok, Meta, and YouTube.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">

            {/* Primary CTA */}
            <a
              href="#find-creators"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-[#22201E] text-[#E6E3D6] shadow-lg shadow-[#22201E]/15 hover:bg-[#22201E]/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
            >
              <span>Find Your Creator</span>
              <ArrowRight />
            </a>

            {/* Secondary CTA */}
            <a
              href="#try-free"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold bg-transparent text-[#22201E] border-2 border-[#22201E] hover:bg-[#22201E]/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
            >
              Try It For Free
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 pt-8 border-t border-[#22201E]/10 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#22201E]/70 font-medium">

            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>Verified 48h turnaround</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckIcon />
              <span>No upfront commitments</span>
            </div>
          </div>
        </div>

        {/* Right column: Creator video cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6 sm:py-10">

          {/* Background glow */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#22201E]/5 blur-3xl -z-10 pointer-events-none" />

          {/* Video cards container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] h-[480px] sm:h-[540px] flex items-center justify-center">

         
{/* First creator video card */}
<CreatorVideoCard
  position="-left-2 sm:left-2 top-2 sm:top-4 rotate-[-7deg] hover:rotate-[-3deg] z-10"
  category="Beauty & Skincare"
  categoryColor="bg-rose-400"
  creatorName="Elena Rostova"
  creatorStats="UGC Creator • 182k"
  performance="+3.8x ROAS"
  performanceColor="text-emerald-300"
  video="/videos/creator-beauty.mp4"
/>

{/* Second creator video card */}
<CreatorVideoCard
  position="right-0 sm:right-2 bottom-2 sm:bottom-4 rotate-[7deg] hover:rotate-[3deg] z-20"
  category="Fashion & Lifestyle"
  categoryColor="bg-amber-400"
  creatorName="Marcus & Claire"
  creatorStats="Style & OOTD • 340k"
  performance="Top Performing"
  performanceColor="text-amber-300"
  video="/videos/creator-fashion.mp4"
/>


          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
