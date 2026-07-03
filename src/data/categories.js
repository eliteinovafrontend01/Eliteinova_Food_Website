import biryaniImg from "../assets/BiryaniRice.jpg";
import pizzaImg from "../assets/pizzaImg.jpg";
import dessertsImg from "../assets/dessertsImg.jpg";
import healthyImg from "../assets/healthyImg.jpg";
import drinksImg from "../assets/drinksImg.jpg";
import combosImg from "../assets/combosImg.jpg";
import pastaImg from "../assets/pastaImg.jpg";
import seafoodImg from "../assets/seafoodImg.jpg";
import breakfastImg from "../assets/breakfastImg.jpg";
import burgersImg from "../assets/burgersImg.jpg";

export function slugify(name) {
  return "cat-" + name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const RAW_CATEGORIES = [
  { name: "Biryani & Rice", img: biryaniImg, count: 24, blurb: "Slow-cooked, dum-sealed, and layered with saffron." },
  { name: "Wood-Fired Pizza", img: pizzaImg, count: 18, blurb: "Neapolitan dough, charred in a real wood oven." },
  { name: "Artisan Desserts", img: dessertsImg, count: 31, blurb: "Patisserie-grade cakes, tarts, and plated sweets." },
  { name: "Healthy Bowls", img: healthyImg, count: 22, blurb: "Nutrient-dense bowls, built alongside a nutritionist." },
  { name: "Craft Drinks", img: drinksImg, count: 15, blurb: "Small-batch mocktails, cold brews, and infusions." },
  { name: "Chef's Combos", img: combosImg, count: 12, blurb: "Curated multi-course sets from our top kitchens." },
  { name: "Pasta & Noodles", img: pastaImg, count: 20, blurb: "Fresh-rolled pasta and hand-pulled noodles, daily." },
  { name: "Seafood Special", img: seafoodImg, count: 16, blurb: "Daily-caught, with zero freezer storage." },
  { name: "Breakfast & Brunch", img: breakfastImg, count: 19, blurb: "Slow mornings, plated like a weekend away." },
  { name: "Premium Burgers", img: burgersImg, count: 14, blurb: "Dry-aged patties, brioche, and house-made sauces." },
];

export const CATEGORIES = RAW_CATEGORIES.map((c) => ({ ...c, id: slugify(c.name) }));