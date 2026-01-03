"use client";

import { X } from "lucide-react";
import Filters from "./Filters";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function FilterDrawer({ open, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-64px)] w-[300px] bg-background transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between  px-4 py-3">
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="h-[calc(100vh-120px)] overflow-y-auto px-4 py-4">
          <Filters />
        </div>
      </div>
    </>
  );
}
