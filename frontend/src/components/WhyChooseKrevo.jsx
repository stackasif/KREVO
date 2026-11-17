const benefits = [
  {
    number: "01",
    title: "Creators that fit your brand",
    description:
      "Find creators based on your niche, campaign goals, content style, and audience relevance instead of scrolling through endless profiles.",
    proof: "Relevant creator discovery",
  },
  {
    number: "02",
    title: "One place for your campaign",
    description:
      "Keep your brief, creator selection, collaboration details, and content progress organised in one clear campaign workflow.",
    proof: "A more organised workflow",
  },
  {
    number: "03",
    title: "Clear collaboration from start to finish",
    description:
      "Know what has been agreed, what content is expected, and where each collaboration stands throughout the campaign.",
    proof: "Transparent campaign progress",
  },
  {
    number: "04",
    title: "Content made for real audiences",
    description:
      "Work with creators who understand their communities and create content that feels natural to the platforms where people discover brands.",
    proof: "Creator-led storytelling",
  },
];

export default function WhyChooseKrevo() {
  return (
    <section className="bg-[#E6E3D6] py-20 text-[#22201E] sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#777267]">
              Why choose KREVO
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Less time managing. More time creating.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#625F57] sm:text-base lg:justify-self-end">
            Creator collaborations should move your brand forward, not add
            more complexity to your day. KREVO brings the key parts of the
            process together so your team can focus on the work that matters.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="flex min-h-[250px] flex-col rounded-2xl border border-[#B8B4A9] bg-[#eceae2] p-6 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-[#777267]">
                  {benefit.number}
                </span>
                <span className="h-px w-12 bg-[#B8B4A9]" />
              </div>

              <h3 className="mt-8 max-w-md text-xl font-semibold leading-snug sm:text-2xl">
                {benefit.title}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-[#625F57]">
                {benefit.description}
              </p>

              <div className="mt-auto border-t border-[#B8B4A9] pt-4">
                <p className="text-xs font-medium text-[#4F4B43]">
                  {benefit.proof}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-[#B8B4A9] bg-[#22201E] px-6 py-8 text-[#E6E3D6] sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B8B4A9]">
              Built for better collaborations
            </p>
            <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
              Make every creator collaboration count.
            </h3>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#D0CCC0] lg:mt-0">
            Bring your next campaign to KREVO and build a creator partnership
            around what your brand actually needs.
          </p>
        </div>
      </div>
    </section>
  );
}
