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
import pizzaDish from "../assets/hero-banner.jpg";
import cakeDish from "../assets/hero-banner.jpg";
import biryaniDish from "../assets/hero-banner.jpg";
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
  { name: "Aurum Kitchen", cuisine: "Modern Indian · Fine Dining", time: "25–35 min", rating: 4.9, img: aurumImg },
  { name: "Petal & Fire", cuisine: "Wood-Fired · Italian", time: "20–30 min", rating: 4.8, img: petalImg },
  { name: "The Blush Table", cuisine: "Patisserie · Desserts", time: "15–25 min", rating: 5.0, img: blushImg },
  { name: "Saffron House", cuisine: "Mughlai · Biryani", time: "30–40 min", rating: 4.7, img: saffronImg },
  { name: "Golden Spoon", cuisine: "Mediterranean · Greek", time: "25–35 min", rating: 4.6, img: goldenImg },
  { name: "Fusion Lab", cuisine: "Asian Fusion · Sushi", time: "20–30 min", rating: 4.8, img: fusionImg },
  { name: "Herb & Spice", cuisine: "Vegan · Plant-Based", time: "15–25 min", rating: 4.5, img: herbImg },
  { name: "The Grill House", cuisine: "Steakhouse · BBQ", time: "35–45 min", rating: 4.9, img: grillImg },
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

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center pb-20 md:pb-28">
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

function Trending() {
  return (
    <section id="menu" className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="eyebrow inline-flex items-center text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-4">
              This Week
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-plum">Trending on the Table</h2>
          </div>
          <a href="#menu" className="text-sm font-semibold text-rose hover:underline">
            Full menu →
          </a>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {TRENDING.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div className="group relative rounded-3xl overflow-hidden bg-white border border-blush-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.25)] transition-all duration-500">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-plum/10 to-transparent" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-rose shadow-sm">
                    ★ {item.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-sm text-plum leading-tight mb-1 line-clamp-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-rose font-bold text-lg">{item.price}</span>
                    <button className="text-xs text-plum/40 hover:text-rose transition-colors">
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section id="categories" className="relative bg-blush py-20 md:py-28">
      <PetalDivider fill="#FFFDFB" className="absolute -top-[1px] left-0 rotate-180" />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="eyebrow justify-center inline-flex items-center text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-4">
            Browse
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-plum">Categories</h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 60}>
              <a
                href="#menu"
                className="group flex flex-col items-center text-center p-4 bg-white/70 hover:bg-white transition-colors duration-300 rounded-2xl"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-3 ring-4 ring-white shadow-md group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-all duration-300">
                  <img 
                    src={cat.img} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-plum/80 group-hover:text-rose transition-colors">
                  {cat.name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Restaurants() {
  return (
    <section id="restaurants" className="bg-ivory py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-14">
          <div>
            <p className="eyebrow inline-flex items-center text-xs tracking-[0.3em] font-semibold text-gold-deep uppercase mb-4">
              Featured
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-plum">Restaurants We Vouch For</h2>
          </div>
          <a href="#restaurants" className="text-sm font-semibold text-rose hover:underline">
            View all →
          </a>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANTS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <div className="group rounded-3xl overflow-hidden bg-white border border-blush-200 hover:shadow-[0_20px_40px_-12px_rgba(236,72,153,0.2)] transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-rose/10 via-blush-200 to-gold/10">
                  <img 
                    src={r.img} 
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-rose shadow-sm">
                    ★ {r.rating.toFixed(1)}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-plum/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                    {r.time}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg text-plum group-hover:text-rose transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-xs text-plum/50 mt-1">{r.cuisine}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1 rounded-full bg-blush-200 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-rose to-gold"
                        style={{ width: `${(r.rating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-plum/60">
                      {r.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
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