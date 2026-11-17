"use client";

import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
      {
        id: "all",
        name: "All Creators",
        creators: [
          {
            id: "all-1",
            name: "Camila Duarte",
            handle: "@camilafoodie",
            location: "Miami, FL",
            verified: true,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
            tags: ["Food & Dining", "Latin Bistro"],
            bio: "Exploring Michelin spots & hidden Latin food trucks. Creating candid dining reviews & high-res culinary reels.",
            rating: "4.9",
            jobs: 142
          },
          {
            id: "all-2",
            name: "Liam Vance",
            handle: "@liamvancelife",
            location: "Austin, TX",
            verified: true,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
            tags: ["Lifestyle", "Smart Home"],
            bio: "Modern apartment aesthetic, daily coffee rituals, and smart workspace productivity essentials.",
            rating: "5.0",
            jobs: 98
          },
          {
            id: "all-3",
            name: "Sienna Miller",
            handle: "@siennaglows",
            location: "Los Angeles, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
            tags: ["Skincare", "Clean Beauty"],
            bio: "Certified esthetician testing organic barrier serums and everyday no-makeup makeup routines.",
            rating: "4.9",
            jobs: 215
          },
          {
            id: "all-4",
            name: "Julian Rivera",
            handle: "@juliantechguy",
            location: "San Francisco, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
            tags: ["Tech & Audio", "Unboxing"],
            bio: "Macro 4K unboxings, wireless audio comparisons, and crisp desk setups for early adopters.",
            rating: "4.8",
            jobs: 120
          }
        ]
      },
      {
        id: "food",
        name: "Food & Restaurants",
        creators: [
          {
            id: "food-1",
            name: "Chef Marco Rossi",
            handle: "@marcocooks",
            location: "New York, NY",
            verified: true,
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=700&q=80",
            tags: ["Artisan Pasta", "Restaurant Guide"],
            bio: "Brooklyn culinary creator crafting viral sourdough guides and reviewing iconic city dining rooms.",
            rating: "5.0",
            jobs: 184
          },
          {
            id: "food-2",
            name: "Chloe Chen",
            handle: "@chloeeatsnyc",
            location: "Brooklyn, NY",
            verified: true,
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
            tags: ["Boba & Desserts", "Matcha Cafes"],
            bio: "Aesthetic cafe hopping, bakery crawls, and playful beverage taste-tests with 9.2% engagement.",
            rating: "4.9",
            jobs: 156
          },
          {
            id: "food-3",
            name: "Darius King",
            handle: "@dariusbbq",
            location: "Nashville, TN",
            verified: true,
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80",
            tags: ["Smoked Meats", "Grill Master"],
            bio: "Low & slow brisket master. Delivering high-energy taste test reels and outdoor fire cooking.",
            rating: "4.9",
            jobs: 112
          },
          {
            id: "food-4",
            name: "Ananya Patel",
            handle: "@spicensoul",
            location: "Chicago, IL",
            verified: true,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
            tags: ["Plant-Based", "Global Flavors"],
            bio: "Elevated vegetarian dinner party recipes, pantry essentials, and flavor-forward brand showcases.",
            rating: "4.8",
            jobs: 89
          }
        ]
      },
      {
        id: "lifestyle",
        name: "Lifestyle",
        creators: [
          {
            id: "life-1",
            name: "Hannah Lindqvist",
            handle: "@nordic.hannah",
            location: "Seattle, WA",
            verified: true,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80",
            tags: ["Home Decor", "Minimalist Living"],
            bio: "Warm Scandinavian interiors, morning calm routines, and conscious organic home goods.",
            rating: "4.9",
            jobs: 167
          },
          {
            id: "life-2",
            name: "Devon Brooks",
            handle: "@devonresides",
            location: "Denver, CO",
            verified: true,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
            tags: ["Everyday Carry", "Urban Loft"],
            bio: "Architectural spaces, sustainable furniture styling, and minimalist urban lifestyle routines.",
            rating: "5.0",
            jobs: 104
          },
          {
            id: "life-3",
            name: "Zoe Bennett",
            handle: "@zoecandlelab",
            location: "Portland, OR",
            verified: true,
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80",
            tags: ["Self-Care", "Studio Decor"],
            bio: "Curating serene studio vibes, slow evenings, aesthetic stationery, and bath essentials.",
            rating: "4.8",
            jobs: 135
          },
          {
            id: "life-4",
            name: "Mateo Alvarez",
            handle: "@mateo_dayto",
            location: "San Diego, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80",
            tags: ["Coastal Living", "Morning Routine"],
            bio: "Sunrise surf sessions, pour-over coffee guides, and elevated everyday men's essentials.",
            rating: "4.9",
            jobs: 94
          }
        ]
      },
      {
        id: "beauty",
        name: "Beauty & Fashion",
        creators: [
          {
            id: "beauty-1",
            name: "Aria Montgomery",
            handle: "@ariaglam",
            location: "Los Angeles, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
            tags: ["Glass Skin", "Editorial Makeup"],
            bio: "Hydrating skincare layers, Korean sunscreens, and effortless sunset glam transformations.",
            rating: "5.0",
            jobs: 278
          },
          {
            id: "beauty-2",
            name: "Kendra Jones",
            handle: "@kendrawears",
            location: "New York, NY",
            verified: true,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
            tags: ["Streetwear", "Capsule Wardrobe"],
            bio: "Transitional seasonal styling, neutral trench coats, and luxury handbag unboxings.",
            rating: "4.9",
            jobs: 194
          },
          {
            id: "beauty-3",
            name: "Sophie De Luca",
            handle: "@sophiedeluca",
            location: "Milan / London",
            verified: true,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
            tags: ["Clean Fragrance", "Runway Trends"],
            bio: "Luxury perfume layering, silk scarves, and timeless European quiet-luxury lookbooks.",
            rating: "4.9",
            jobs: 162
          },
          {
            id: "beauty-4",
            name: "Nicolette Ray",
            handle: "@nicoleglow",
            location: "Dallas, TX",
            verified: true,
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
            tags: ["Hair Health", "Dermatology Picks"],
            bio: "Curly hair routines, scalp care regimens, and dermatologist-tested product breakdowns.",
            rating: "4.8",
            jobs: 140
          }
        ]
      },
      {
        id: "travel",
        name: "Travel",
        creators: [
          {
            id: "travel-1",
            name: "Lucas & Maya",
            handle: "@roamtwogether",
            location: "Nomadic / Bali",
            verified: true,
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=700&q=80",
            tags: ["Boutique Resorts", "Drone Guides"],
            bio: "Cinematic 4K drone videography of hidden cliffside villas, luxury rail tours, and island stays.",
            rating: "5.0",
            jobs: 210
          },
          {
            id: "travel-2",
            name: "Clara Dupont",
            handle: "@clarasuitcase",
            location: "Paris, France",
            verified: true,
            image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80",
            tags: ["European Escapes", "Hotel Stays"],
            bio: "Historical hotel suites, Riviera day trips, and curated hidden gem itineraries across Europe.",
            rating: "4.9",
            jobs: 175
          },
          {
            id: "travel-3",
            name: "Kai Tanaka",
            handle: "@kaioverland",
            location: "Vancouver, BC",
            verified: true,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
            tags: ["Outdoor Adventure", "Alpine Hikes"],
            bio: "Glacier trekking, campervan builds, and weather-tested outdoor gear field evaluations.",
            rating: "4.9",
            jobs: 130
          },
          {
            id: "travel-4",
            name: "Isla MacLeod",
            handle: "@isla.explores",
            location: "Edinburgh, UK",
            verified: true,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
            tags: ["Solo Travel", "Coastal Towns"],
            bio: "Moody coastal lighthouses, pack-light luggage systems, and solo female travel safety tips.",
            rating: "4.8",
            jobs: 98
          }
        ]
      },
      {
        id: "fitness",
        name: "Fitness & Wellness",
        creators: [
          {
            id: "fit-1",
            name: "David Kim",
            handle: "@davidkstrength",
            location: "Seattle, WA",
            verified: true,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80",
            tags: ["Strength Training", "Macro Nutrition"],
            bio: "Science-backed hypertrophy programming, clean protein supplement reviews, and form breakdowns.",
            rating: "5.0",
            jobs: 192
          },
          {
            id: "fit-2",
            name: "Elena Ward",
            handle: "@elenaflowyoga",
            location: "San Diego, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
            tags: ["Vinyasa Yoga", "Mindfulness"],
            bio: "Breathwork tutorials, flexibility milestones, sustainable yoga mat reviews, and holistic habits.",
            rating: "4.9",
            jobs: 164
          },
          {
            id: "fit-3",
            name: "Marcus Vance",
            handle: "@marcus.runs",
            location: "Boulder, CO",
            verified: true,
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80",
            tags: ["Marathon Prep", "Recovery Tech"],
            bio: "Sub-3 marathoner testing carbon-plated super shoes, hydration salts, and massage guns.",
            rating: "4.9",
            jobs: 147
          },
          {
            id: "fit-4",
            name: "Tasha Williams",
            handle: "@tashapilates",
            location: "Atlanta, GA",
            verified: true,
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
            tags: ["Mat Pilates", "Activewear Review"],
            bio: "Reformer-inspired mat workouts, compressive leggings wear-tests, and morning core resets.",
            rating: "4.8",
            jobs: 118
          }
        ]
      },
      {
        id: "tech",
        name: "Tech & Products",
        creators: [
          {
            id: "tech-1",
            name: "Alex Sterling",
            handle: "@alexgadgets",
            location: "San Jose, CA",
            verified: true,
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80",
            tags: ["Flagship Phones", "Audio Gear"],
            bio: "Real-world camera battery stress tests, noise-canceling shootouts, and clean studio demos.",
            rating: "5.0",
            jobs: 245
          },
          {
            id: "tech-2",
            name: "Mira Patel",
            handle: "@miracreates",
            location: "Austin, TX",
            verified: true,
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
            tags: ["Desk Setups", "Mechanical Keyboards"],
            bio: "Custom tactile switches, OLED monitors, minimal walnut desks, and creator workspace tours.",
            rating: "4.9",
            jobs: 180
          },
          {
            id: "tech-3",
            name: "Jordan Lee",
            handle: "@jordanunboxes",
            location: "Seattle, WA",
            verified: true,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
            tags: ["Smart Wearables", "EDC Tech"],
            bio: "Titanium smartwatch durability tests, compact GaN chargers, and everyday travel gear.",
            rating: "4.9",
            jobs: 155
          },
          {
            id: "tech-4",
            name: "Serena Cruz",
            handle: "@serenatechlife",
            location: "Boston, MA",
            verified: true,
            image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=700&q=80",
            tags: ["Creator Cameras", "Lighting Kits"],
            bio: "Mirrorless vlogging setups, RGB tube lighting tricks, and wireless microphone clarity tests.",
            rating: "4.8",
            jobs: 132
          }
        ]
      }
    ];

function CreatorCard({ creator, isAnimating }) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[22px] bg-[#eceae2] transition-all duration-300 ${
        isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#d8d5ca]">
        <img
          src={creator.image}
          alt={creator.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <h3 className="truncate text-[17px] font-bold tracking-tight text-[#22201E]">
              {creator.name}
            </h3>
            {creator.verified && (
              <span className="shrink-0 text-[#4f6b62]" title="Verified creator" aria-label="Verified creator">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2 14.8 4l3.4-.1 1.1 3.2 2.7 2-1.1 3.2 1.1 3.2-2.7 2-1.1 3.2-3.4-.1L12 22l-2.8-2-3.4.1-1.1-3.2-2.7-2 1.1-3.2L2 8.5l2.7-2 1.1-3.2 3.4.1L12 2Zm-1.1 13.8 6-6-1.4-1.4-4.6 4.6-2.2-2.2-1.4 1.4 3.6 3.6Z" />
                </svg>
              </span>
            )}
          </div>

          <p className="mb-3.5 text-[13px] text-[#77736b]">
            {creator.location} <span className="mx-1">·</span> {creator.handle}
          </p>

          <div className="mb-3.5 flex flex-wrap gap-1.5">
            {creator.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#dedbd0] px-2.5 py-1 text-[11px] font-medium tracking-tight text-[#46433d]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-5 line-clamp-2 text-[13px] leading-relaxed text-[#625f57]">
            {creator.bio}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 text-[12px]">
          <div className="flex items-center gap-1.5 font-semibold text-[#22201E]">
            <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
            </svg>
            {creator.rating}
          </div>
          <p className="text-right text-[#77736b]">
            <span className="font-semibold text-[#22201E]">{creator.jobs}</span> completed jobs
          </p>
        </div>
      </div>
    </article>
  );
}

export default function CreatorDiscovery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const tabRefs = useRef([]);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];

    if (activeTab) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    setIsAnimating(true);

    animationTimeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 180);

    return () => {
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  const handleCategoryChange = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const currentCategory = CATEGORIES[activeIndex] || CATEGORIES[0];

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#22201E] sm:text-[34px]">
            Find Top Instagram Creators
          </h2>
          <p className="text-[15px] leading-relaxed text-[#625f57] sm:text-base">
            Discover talented Instagram creators who bring your brand to life through authentic content.
          </p>
        </div>

        <div className="mb-10 flex justify-center sm:mb-12">
          <div className="no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-full bg-[#eceae2] p-1.5 sm:p-2">
            {CATEGORIES.map((category, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={category.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  onClick={() => handleCategoryChange(index)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-semibold transition-colors sm:px-5 sm:text-sm ${
                    isActive
                      ? "bg-[#22201E] text-[#E6E3D6]"
                      : "text-[#625f57] hover:bg-[#dedbd0] hover:text-[#22201E]"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 ${
            isAnimating ? "pointer-events-none" : ""
          }`}
          aria-live="polite"
        >
          {currentCategory.creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              isAnimating={isAnimating}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center pt-12 text-center">
          <p className="mb-3 text-sm font-medium text-[#625f57]">
            Ready to get started?
          </p>
          <a
            href="/find-creators"
            className="inline-flex items-center justify-center rounded-full bg-[#22201E] px-7 py-3 text-sm font-semibold tracking-wide text-[#E6E3D6] transition-colors duration-200 hover:bg-[#3a3732]"
          >
            Start Hiring
          </a>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
