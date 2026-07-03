import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import PetalDivider from "../components/PetalDivider";
import { CATEGORIES } from "../data/categories";

function Reveal({ as: Tag = "div", className = "", children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

function PageHero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
      style={{
        background:
          "radial-gradient(ellipse 70% 60% at 15% 0%, #FFD3E1 0%, transparent 60%), radial-gradient(ellipse 55% 50% at 95% 10%, #F3D9A8 0%, transparent 55%), #FFF3F6",
      }}
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-rose/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-xs tracking-[0.3em] font-semibold text-plum/40 uppercase mb-6">
            <Link to="/" className="hover:text-rose transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-deep">Categories</span>
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-plum mb-5">
            Every Craving,
            <br />
            <span className="italic text-rose">Beautifully</span> Categorized.
          </h1>
          <p className="text-plum/70 max-w-xl mx-auto text-base md:text-lg">
            Ten curated worlds of flavor — each led by kitchens that specialize,
            not generalize.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-wrap justify-center gap-3 mt-10">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="px-4 py-2 rounded-full text-xs font-semibold text-plum/70 border border-rose/20 bg-white/70 backdrop-blur-sm hover:bg-rose hover:text-white hover:border-rose transition-colors duration-300"
            >
              {c.name}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function CategoryRow({ cat, index }) {
  const flipped = index % 2 === 1;
  const bg = index % 2 === 0 ? "bg-ivory" : "bg-blush";

  return (
    <section id={cat.id} className={`relative py-16 md:py-20 scroll-mt-24 ${bg}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal className={flipped ? "md:order-2" : ""}>
          <div className="relative">
            <div
              className="relative w-full aspect-[4/3] overflow-hidden shadow-rose"
              style={{
                borderRadius: flipped
                  ? "45% 55% 60% 40% / 55% 45% 55% 45%"
                  : "55% 45% 40% 60% / 45% 55% 45% 55%",
              }}
            >
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-4 sm:-right-8 bg-white rounded-2xl px-5 py-4 shadow-gold">
              <p className="text-xs text-plum/50">Dishes available</p>
              <p className="font-display text-2xl text-rose">{cat.count}+</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className={flipped ? "md:order-1" : ""}>
          <p className="eyebrow inline-flex items-center text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-4">
            Category
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-plum mb-4">{cat.name}</h2>
          <p className="text-plum/70 max-w-md mb-8">{cat.blurb}</p>
          <Link
            to="/#menu"
            className="relative inline-flex overflow-hidden px-7 py-3 rounded-full font-semibold text-plum shadow-gold hover:-translate-y-0.5 transition-transform duration-300"
          >
            <span className="absolute inset-0 shimmer-gold" />
            <span className="relative">View Dishes</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative bg-rose-deep py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            Can't decide? Let the table decide for you.
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">
            Browse everything trending this week, hand-picked across every category.
          </p>
          <Link
            to="/#menu"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-plum shimmer-gold shadow-gold hover:-translate-y-0.5 transition-transform duration-300"
          >
            See What's Trending
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function CategoriesPage() {
  return (
    <>
      <PageHero />
      <PetalDivider fill="#FFFDFB" className="relative -mt-1" />
      {CATEGORIES.map((cat, i) => (
        <CategoryRow key={cat.id} cat={cat} index={i} />
      ))}
      <ClosingCTA />
    </>
  );
}