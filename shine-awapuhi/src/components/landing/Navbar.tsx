import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "المنتجات", href: "#products" },
  { label: "الفوائد", href: "#benefits" },
  { label: "طريقة الاستخدام", href: "#how-to-use" },
  { label: "النتائج", href: "#results" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/95 backdrop-blur-md shadow-warm border-b border-border"
          : "bg-transparent"
        }`}
    >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Maui Moisture" className="h-10" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/checkout"
            className="hidden md:inline-flex gradient-cta text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            اطلب الآن
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pb-4">
            <ul className="flex flex-col gap-3 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm font-medium text-foreground/80 hover:text-primary py-1 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/checkout"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block text-center gradient-cta text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold"
            >
              اطلب الآن
            </Link>
          </div>
      )}
    </nav>
  );
};

export default Navbar;
