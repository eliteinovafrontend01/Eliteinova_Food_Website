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
      <span className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gold/60">
        <span className="absolute inset-0 rounded-full shimmer-gold opacity-20 group-hover:opacity-40 transition-opacity" />
        <span className="font-display text-lg text-gold-deep tracking-wide">EP</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl md:text-2xl text-plum tracking-tight">
          Eliteinova
        </span>
        <span className="font-body text-[10px] md:text-[11px] tracking-[0.35em] text-gold-deep font-semibold">
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
      
        <a href={item.href}
        className="flex items-center gap-1 py-2 text-sm font-semibold text-plum/80 hover:text-rose transition-colors"
      >
        {item.label}
        {hasSubmenu && (
          <svg
            className={`w-3 h-3 mt-[1px] transition-transform duration-300 ${
              isOpen ? "rotate-180 text-rose" : "text-plum/40"
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
          <div className="min-w-[220px] rounded-2xl border border-gold/20 bg-white/95 backdrop-blur-md shadow-rose py-2 overflow-hidden">
            {item.submenu.map((sub) => (
              <a key={sub.label} href={sub.href}
                className="block px-5 py-2.5 text-sm text-plum/75 hover:text-rose hover:bg-blush transition-colors"
              >
                {sub.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
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
          ? "bg-white/85 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(43,20,32,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
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
          <div className="hidden lg:flex items-center gap-5">
            <button aria-label="Search" className="text-plum/70 hover:text-rose transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
              </svg>
            </button>
            <button aria-label="Wishlist" className="text-plum/70 hover:text-rose transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.5s-7.5-4.6-9.6-9.1C1.1 8.1 2.6 5 5.8 4.4c1.9-.4 3.7.5 4.7 2.1a1.1 1.1 0 0 0 1 .6c.4 0 .8-.2 1-.6 1-1.6 2.8-2.5 4.7-2.1 3.2.6 4.7 3.7 3.4 7C19.5 15.9 12 20.5 12 20.5Z"
                />
              </svg>
            </button>
            <button aria-label="Cart" className="relative text-plum/70 hover:text-rose transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h2l1.6 10.6a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L20 8H6" />
                <circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" />
                <circle cx="17" cy="20" r="1.3" fill="currentColor" stroke="none" />
              </svg>
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-rose text-white text-[10px] flex items-center justify-center">
                2
              </span>
            </button>

            
             <a href="#order"
              className="relative overflow-hidden px-5 py-2.5 rounded-full text-sm font-semibold text-plum shadow-gold hover:-translate-y-0.5 transition-transform duration-300"
            >
              <span className="absolute inset-0 shimmer-gold" />
              <span className="relative">Reserve Now</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-plum"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 bg-white/98 backdrop-blur-md border-t border-gold/10 ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="border-b border-blush-200 last:border-0">
              <button
                className="w-full flex items-center justify-between py-3 text-plum font-semibold"
                onClick={() =>
                  item.submenu
                    ? setMobileExpanded((cur) => (cur === item.label ? null : item.label))
                    : setMobileOpen(false)
                }
              >
                <a href={item.href}>{item.label}</a>
                {item.submenu && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
                      mobileExpanded === item.label ? "rotate-180 text-rose" : "text-plum/40"
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
                  <div className="overflow-hidden flex flex-col pl-3">
                    {item.submenu.map((sub) => (
                      <a key={sub.label} href={sub.href} className="py-2 text-sm text-plum/70">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
           <a href="#order"
            className="mt-4 text-center px-5 py-3 rounded-full text-sm font-semibold text-plum shimmer-gold shadow-gold"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </header>
  );
}