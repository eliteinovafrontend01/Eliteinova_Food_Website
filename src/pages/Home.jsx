import useReveal from "../hooks/useReveal";
import PetalDivider from "../components/PetalDivider";

// 👉 Drop your own banner image at src/assets/hero-banner.jpg (or .png)
// and this import will pick it up automatically. Recommended size: ~1400x1400,
// a fairly centered/isolated subject works best against the circular mask below.
import heroBanner from "../assets/hero-banner.jpg";

// Import your category images here — swap each path for its own photo
import biryaniImg from "../assets/hero-banner.jpg";
import pizzaImg from "../assets/hero-banner.jpg";
import dessertsImg from "../assets/hero-banner.jpg";
import healthyImg from "../assets/hero-banner.jpg";
import drinksImg from "../assets/hero-banner.jpg";
import combosImg from "../assets/hero-banner.jpg";
import pastaImg from "../assets/hero-banner.jpg";
import seafoodImg from "../assets/hero-banner.jpg";
import breakfastImg from "../assets/hero-banner.jpg";
import burgersImg from "../assets/hero-banner.jpg";

// Import trending dish images
import pizzaDish from "../assets/pizzaDish.jpg";
import cakeDish from "../assets/cakeDish.jpg";
import biryaniDish from "../assets/biryaniDish.jpg";
import donutDish from "../assets/hero-banner.jpg";
import lobsterDish from "../assets/hero-banner.jpg";
import tiramisuDish from "../assets/hero-banner.jpg";
import chickenDish from "../assets/hero-banner.jpg";
import risottoDish from "../assets/hero-banner.jpg";

// Import restaurant images
import aurumImg from "../assets/hero-banner.jpg";
import petalImg from "../assets/hero-banner.jpg";
import blushImg from "../assets/hero-banner.jpg";
import saffronImg from "../assets/hero-banner.jpg";
import goldenImg from "../assets/hero-banner.jpg";
import fusionImg from "../assets/hero-banner.jpg";
import herbImg from "../assets/hero-banner.jpg";
import grillImg from "../assets/hero-banner.jpg";

const MARQUEE_WORDS = [
  "Farm to Fork",
  "Chef Curated",
  "Same-Day Booking",
  "Zero Compromise Plating",
  "120+ Kitchens",
  "Rated 4.9 by Guests",
];

const TRENDING = [
  { name: "Truffle Wood-Fired Pizza", price: "₹649", rating: "4.9", img: pizzaDish },
  { name: "Signature Rose Velvet Cake", price: "₹899", rating: "5.0", img: cakeDish },
  { name: "Saffron Dum Biryani", price: "₹549", rating: "4.8", img: biryaniDish },
  { name: "Gold Leaf Chocolate Donut", price: "₹299", rating: "4.9", img: donutDish },
  { name: "Butter Garlic Lobster", price: "₹1299", rating: "4.7", img: lobsterDish },
  { name: "Matcha Tiramisu", price: "₹749", rating: "4.8", img: tiramisuDish },
  { name: "Korean Fried Chicken", price: "₹599", rating: "4.6", img: chickenDish },
  { name: "Truffle Risotto", price: "₹899", rating: "4.9", img: risottoDish },
];

const CATEGORIES = [
  { name: "Biryani & Rice", img: biryaniImg },
  { name: "Wood-Fired Pizza", img: pizzaImg },
  { name: "Artisan Desserts", img: dessertsImg },
  { name: "Healthy Bowls", img: healthyImg },
  { name: "Craft Drinks", img: drinksImg },
  { name: "Chef's Combos", img: combosImg },
  { name: "Pasta & Noodles", img: pastaImg },
  { name: "Seafood Special", img: seafoodImg },
  { name: "Breakfast & Brunch", img: breakfastImg },
  { name: "Premium Burgers", img: burgersImg },
];

const RESTAURANTS = [
  { name: "Aurum Kitchen", cuisine: "Modern Indian · Fine Dining", time: "25–35 min", rating: 4.9, img: aurumImg, note: "Tasting menu changes weekly with the harvest." },
  { name: "Petal & Fire", cuisine: "Wood-Fired · Italian", time: "20–30 min", rating: 4.8, img: petalImg, note: "Neapolitan dough, 48-hour cold ferment." },
  { name: "The Blush Table", cuisine: "Patisserie · Desserts", time: "15–25 min", rating: 5.0, img: blushImg, note: "Everything plated fresh, nothing pre-boxed." },
  { name: "Saffron House", cuisine: "Mughlai · Biryani", time: "30–40 min", rating: 4.7, img: saffronImg, note: "Dum-cooked in sealed clay for 6 hours." },
  { name: "Golden Spoon", cuisine: "Mediterranean · Greek", time: "25–35 min", rating: 4.6, img: goldenImg, note: "Imported olive oil, house-made tzatziki." },
  { name: "Fusion Lab", cuisine: "Asian Fusion · Sushi", time: "20–30 min", rating: 4.8, img: fusionImg, note: "Daily fish delivery, zero freezer storage." },
  { name: "Herb & Spice", cuisine: "Vegan · Plant-Based", time: "15–25 min", rating: 4.5, img: herbImg, note: "Every dish designed by a nutritionist." },
  { name: "The Grill House", cuisine: "Steakhouse · BBQ", time: "35–45 min", rating: 4.9, img: grillImg, note: "21-day dry-aged, char-grilled to order." },
];

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

function SectionHeading({ eyebrow, title, action }) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-9">
      <div>
        <p className="eyebrow inline-flex items-center text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-3">
          {eyebrow}
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-plum">{title}</h2>
      </div>
      {action}
    </Reveal>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-0 md:pt-40"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 20% 0%, #FFD3E1 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 20%, #F3D9A8 0%, transparent 55%), #FFF3F6",
      }}
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose/15 blur-3xl" />
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center pb-16 md:pb-20">
        <Reveal>
          <p className="eyebrow text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-5">
            Eliteinova Platter
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-plum">
            Fine Dining,
            <br />
            <span className="italic text-rose">Delivered</span> with
            <br />
            Precision.
          </h1>
          <p className="mt-6 text-plum/70 text-base md:text-lg max-w-md">
            A hand-picked table of the city's most refined kitchens —
            plated, packaged, and delivered like it never left the restaurant.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="relative overflow-hidden px-8 py-3.5 rounded-full font-semibold text-plum shadow-gold hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="absolute inset-0 shimmer-gold" />
              <span className="relative">Order Now</span>
            </a>
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full font-semibold text-rose border border-rose/30 hover:bg-rose hover:text-white transition-colors duration-300"
            >
              Explore Menu
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="font-display text-2xl text-plum">120+</p>
              <p className="text-xs text-plum/50 tracking-wide">Curated Kitchens</p>
            </div>
            <div className="w-px h-8 bg-plum/10" />
            <div>
              <p className="font-display text-2xl text-plum">4.9<span className="text-gold">★</span></p>
              <p className="text-xs text-plum/50 tracking-wide">Guest Rating</p>
            </div>
            <div className="w-px h-8 bg-plum/10" />
            <div>
              <p className="font-display text-2xl text-plum">18k+</p>
              <p className="text-xs text-plum/50 tracking-wide">Orders Delivered</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]">
            <div className="absolute inset-0 rounded-full border border-gold/40 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full overflow-hidden shadow-rose animate-float">
              <img
                src={heroBanner}
                alt="Eliteinova Platter signature dish"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -left-6 top-8 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-rose animate-float-slow">
              <p className="text-xs text-plum/50">Delivery in</p>
              <p className="font-display text-lg text-plum">22 min</p>
            </div>

            <div
              className="absolute -right-4 bottom-10 bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-gold animate-float-slow"
              style={{ animationDelay: "1.2s" }}
            >
              <p className="text-xs text-plum/50">Guest rating</p>
              <p className="font-display text-lg text-plum">4.9 ★★★★★</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Signature motion strip — deep rose ribbon with an endless marquee */}
      <div className="relative bg-rose-deep overflow-hidden py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className="mx-5 flex items-center gap-5 text-xs tracking-[0.2em] uppercase font-semibold text-blush-200"
            >
              {w}
              <span className="text-gold-light text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trending: tilted "menu ticket" cards, wax-seal rating, ribbon price tag ---------------- */

function TrendingCard({ item, i }) {
  const tilt = i % 2 === 0 ? "-rotate-2" : "rotate-2";
  return (
    <Reveal delay={i * 70}>
      <div
        className={`group relative ${tilt} hover:rotate-0 hover:-translate-y-2 transition-all duration-500`}
      >
        <div className="relative rounded-[26px] bg-white p-2 shadow-[0_16px_32px_-16px_rgba(43,20,32,0.25)] group-hover:shadow-rose transition-shadow duration-500">
          <div className="relative h-56 rounded-[20px] overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/75 via-plum/5 to-transparent" />

            {/* wax-seal rating badge */}
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-gradient-to-br from-gold-light to-gold flex flex-col items-center justify-center text-plum shadow-gold border-2 border-white rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <span className="text-xs font-bold leading-none">{item.rating}</span>
              <span className="text-[8px] tracking-wide">RATED</span>
            </div>

            <h3 className="absolute bottom-3 left-3 right-3 font-display text-white text-base leading-tight">
              {item.name}
            </h3>
          </div>

          {/* ribbon price tag, flag-notched */}
          <div className="absolute -bottom-3 left-4 bg-rose text-white text-sm font-bold pl-4 pr-3 py-1.5 rounded-r-full rounded-tl-full shadow-md">
            {item.price}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Trending() {
  return (
    <section id="menu" className="bg-ivory pt-14 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="This Week"
          title="Trending on the Table"
          action={
            <a href="#menu" className="text-sm font-semibold text-rose hover:underline">
              Full menu →
            </a>
          }
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRENDING.map((item, i) => (
            <TrendingCard key={item.name} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Categories: pinned polaroid cards ---------------- */

const TILTS = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

function CategoryCard({ cat, i }) {
  const tilt = TILTS[i % TILTS.length];
  return (
    <Reveal delay={i * 55}>
      <a
        href="#menu"
        className={`group relative block bg-white p-2.5 pb-4 shadow-[0_10px_24px_-10px_rgba(43,20,32,0.3)] ${tilt} hover:rotate-0 hover:-translate-y-2 hover:shadow-rose transition-all duration-500`}
      >
        <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-gold border-2 border-white z-10" />
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <p className="mt-3 font-display italic text-sm text-plum/80 text-center group-hover:text-rose transition-colors">
          {cat.name}
        </p>
      </a>
    </Reveal>
  );
}

function Categories() {
  // Split categories into two rows of 5
  const firstRow = CATEGORIES.slice(0, 5);
  const secondRow = CATEGORIES.slice(5, 10);

  return (
    <section id="categories" className="relative bg-blush pt-14 pb-16 md:pt-16 md:pb-20">
      <PetalDivider fill="#FFFDFB" className="absolute -top-[1px] left-0 rotate-180" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="Browse" title="Categories" />

        {/* Row 1 */}
        <div className="grid grid-cols-5 gap-6 mb-8">
          {firstRow.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} i={i} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-5 gap-6">
          {secondRow.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} i={i + 5} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Restaurants: 3D flip cards ---------------- */

function RestaurantCard({ r, i }) {
  return (
    <Reveal delay={i * 70}>
      <div className="group [perspective:1400px] h-[340px]">
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden">
            <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/20 to-transparent" />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-rose shadow-sm">
              ★ {r.rating.toFixed(1)}
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-lg text-white leading-tight">{r.name}</h3>
              <p className="text-xs text-white/70 mt-1">{r.cuisine}</p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-gradient-to-br from-rose-deep to-plum p-6 flex flex-col justify-between text-white">
            <div>
              <p className="eyebrow text-[10px] tracking-[0.25em] font-semibold text-gold-light uppercase mb-3">
                {r.cuisine}
              </p>
              <p className="text-sm text-white/80 leading-relaxed">{r.note}</p>
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gold-light font-semibold">★ {r.rating.toFixed(1)}</span>
                <span className="text-white/70">{r.time}</span>
              </div>
              <a
                href="#order"
                className="block text-center relative overflow-hidden rounded-full py-2.5 text-sm font-semibold text-plum shadow-gold"
              >
                <span className="absolute inset-0 shimmer-gold" />
                <span className="relative">Reserve Table</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Restaurants() {
  return (
    <section id="restaurants" className="bg-ivory pt-14 pb-16 md:pt-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="Featured"
          title="Restaurants We Vouch For"
          action={
            <a href="#restaurants" className="text-sm font-semibold text-rose hover:underline">
              View all →
            </a>
          }
        />
        <p className="text-xs text-plum/40 mb-6 -mt-5">Hover a card to see why we picked it.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANTS.map((r, i) => (
            <RestaurantCard key={r.name} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Categories />
      <Restaurants />
    </>
  );
}