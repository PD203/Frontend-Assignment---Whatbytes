"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        bg-primary-dark
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT — FILTERS */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-3">Filters</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="hover:text-white cursor-pointer">All</li>
              <li className="hover:text-white cursor-pointer">Electronics</li>
            </ul>

            <p className="mt-6 text-xs text-white/60">
              © 2024 American
            </p>
          </div>

          {/* CENTER — ABOUT */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-3">About Us</h3>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* RIGHT — SOCIAL */}
          <div>
            <h3 className="font-semibold  text-white text-lg mb-3">Follow Us</h3>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full cursor-pointer bg-primary flex items-center justify-center transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full cursor-pointer bg-primary flex items-center justify-center transition"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full cursor-pointer bg-primary flex items-center justify-center transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
