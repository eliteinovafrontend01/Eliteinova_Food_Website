import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Menu",
    href: "#menu",
    submenu: [
      { label: "Cakes & Pastries", href: "#menu-cakes" },
      { label: "Cupcakes", href: "#menu-cupcakes" },
      { label: "Donuts & Desserts", href: "#menu-donuts" },
      { label: "Gourmet Beverages", href: "#menu-beverages" },
      { label: "Chef's Combos", href: "#menu-combos" },
    ],
  },
  {
    label: "Categories",
    href: "#categories",
    submenu: [
      { label: "Biryani & Rice", href: "#cat-biryani" },
      { label: "Wood-Fired Pizza", href: "#cat-pizza" },
      { label: "Artisan Desserts", href: "#cat-desserts" },
      { label: "Healthy Bowls", href: "#cat-healthy" },
      { label: "Craft Drinks", href: "#cat-drinks" },
    ],
  },
  {
    label: "Restaurants",
    href: "#restaurants",
    submenu: [
      { label: "Top Rated", href: "#rest-top" },
      { label: "Newly Added", href: "#rest-new" },
      { label: "Near You", href: "#rest-near" },
      { label: "Fine Dining", href: "#rest-fine" },
    ],
  },
  {
    label: "Home Foods",
    href: "#home-foods",
    submenu: [
      { label: "Home Chefs", href: "#hf-chefs" },
      { label: "Meal Subscriptions", href: "#hf-subscriptions" },
      { label: "Tiffin Service", href: "#hf-tiffin" },
      { label: "Family Feasts", href: "#hf-family" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 shrink-0 group">
      <span className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-rose/20 to-gold/20 border border-gold/40 group-hover:border-gold transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-rose/10 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="font-display text-lg text-gold-deep tracking-wide group-hover:scale-110 transition-transform duration-300">EP</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl md:text-2xl text-plum tracking-tight group-hover:text-rose transition-colors duration-300">
          Eliteinova
        </span>
        <span className="font-body text-[10px] md:text-[11px] tracking-[0.35em] text-gold-deep font-semibold group-hover:text-gold transition-colors duration-300">
          PLATTER
        </span>
      </span>
    </a>
  );
}

function DesktopNavItem({ item, isOpen, onOpen, onClose }) {
  const hasSubmenu = Boolean(item.submenu);

  return (
    <div
      className="relative"
      onMouseEnter={() => hasSubmenu && onOpen(item.label)}
      onMouseLeave={() => hasSubmenu && onClose()}
    >
      <a
        href={item.href}
        className={`flex items-center gap-1 py-2 text-sm font-medium transition-all duration-300 relative group ${
          isOpen ? "text-rose" : "text-plum/70 hover:text-rose"
        }`}
      >
        <span className="relative">
          {item.label}
          <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose transition-all duration-300 ${
            isOpen ? "w-full" : "w-0 group-hover:w-full"
          }`} />
        </span>
        {hasSubmenu && (
          <svg
            className={`w-3 h-3 mt-[1px] transition-all duration-300 ${
              isOpen ? "rotate-180 text-rose" : "text-plum/30 group-hover:text-rose"
            }`}
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </a>

      {hasSubmenu && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="min-w-[240px] rounded-2xl border border-gold/10 bg-white/98 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(43,20,32,0.2)] py-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-gold/5 opacity-50" />
            {item.submenu.map((sub, index) => (
              <a
                key={sub.label}
                href={sub.href}
                className="relative block px-6 py-2.5 text-sm text-plum/70 hover:text-rose hover:bg-rose/5 transition-all duration-200"
                style={{
                  animationDelay: isOpen ? `${index * 30}ms` : "0ms",
                }}
              >
                <span className="relative flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-rose/30 group-hover:bg-rose transition-colors" />
                  {sub.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ActionButton({ children, className = "", ...props }) {
  return (
    <button
      className={`relative p-2 text-plum/50 hover:text-rose transition-all duration-300 hover:scale-110 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(43,20,32,0.12)] border-b border-gold/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isOpen={openMenu === item.label}
                onOpen={setOpenMenu}
                onClose={() => setOpenMenu(null)}
              />
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <ActionButton aria-label="Search">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
              </svg>
            </ActionButton>
            <ActionButton aria-label="Wishlist">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.5s-7.5-4.6-9.6-9.1C1.1 8.1 2.6 5 5.8 4.4c1.9-.4 3.7.5 4.7 2.1a1.1 1.1 0 0 0 1 .6c.4 0 .8-.2 1-.6 1-1.6 2.8-2.5 4.7-2.1 3.2.6 4.7 3.7 3.4 7C19.5 15.9 12 20.5 12 20.5Z"
                />
              </svg>
            </ActionButton>
            <ActionButton aria-label="Cart" className="relative">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l1.6 10.6a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L20 8H6" />
                <circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-rose to-rose-deep text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-rose/30 animate-pulse">
                2
              </span>
            </ActionButton>

            <a
              href="#order"
              className="relative overflow-hidden ml-2 px-6 py-2.5 rounded-full text-sm font-semibold text-plum bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 shadow-gold hover:shadow-gold/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 shimmer-gold" />
              <span className="relative flex items-center gap-2">
                <span>Reserve Now</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center text-plum hover:text-rose transition-colors duration-300"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="relative w-6 h-6">
              <span className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'top-3 rotate-45' : 'top-1 w-6'}`} />
              <span className={`absolute left-0 top-3 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'w-6'}`} />
              <span className={`absolute left-0 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'top-3 -rotate-45' : 'top-5 w-6'}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white/98 backdrop-blur-xl border-t border-gold/5 ${
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="border-b border-blush-100 last:border-0">
              <button
                className="w-full flex items-center justify-between py-3.5 text-plum font-medium hover:text-rose transition-colors duration-200"
                onClick={() =>
                  item.submenu
                    ? setMobileExpanded((cur) => (cur === item.label ? null : item.label))
                    : setMobileOpen(false)
                }
              >
                <span className="text-sm">{item.label}</span>
                {item.submenu && (
                  <svg
                    className={`w-4 h-4 transition-all duration-300 ${
                      mobileExpanded === item.label ? "rotate-180 text-rose" : "text-plum/30"
                    }`}
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </button>
              {item.submenu && (
                <div
                  className={`grid transition-all duration-300 ${
                    mobileExpanded === item.label ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden flex flex-col pl-4 gap-0.5">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="py-2.5 text-sm text-plum/60 hover:text-rose transition-colors duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <a
            href="#order"
            className="mt-6 text-center px-5 py-3.5 rounded-full text-sm font-semibold text-plum bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 shadow-gold"
            onClick={() => setMobileOpen(false)}
          >
            Reserve Now
          </a>
        </div>
      </div>
    </header>
  );
}