import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";              // modern icons

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // single source‑of‑truth for the links
  const navItems = [
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent ">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Brand */}
        <Link to="/" className="flex flex-col leading-none select-none">
          <span className="w-32 sm:w-40 rounded-full border border-gray-500 text-center text-xl sm:text-2xl font-bold text-[#00f] mb-1">
            muhammed
          </span>
          <span className="w-32 sm:w-40 rounded-full border border-gray-500 text-center text-xl sm:text-2xl font-bold text-[#00f]">
            jashir
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex  bg-black text-white rounded-full h-12 px-6 sm:px-8  items-center gap-4 text-sm sm:text-base w-fit mx-auto sm:mx-0">
          {navItems.map(({ label, path }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="px-4 py-2 rounded-full hover:bg-[#00f] hover:text-white transition-colors cursor-pointer "
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full bg-black text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <nav className="md:hidden absolute top-full inset-x-0 bg-black/90 backdrop-blur-sm">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navItems.map(({ label, path }) => (
              <li key={path}>
                <button
                  onClick={() => {
                    navigate(path);
                    setOpen(false);
                  }}
                  className="text-white text-lg hover:underline"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
