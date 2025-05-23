"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      // className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-b from-black/30 to-black/80 "
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4 text-black dark:text-white">Contact Us</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Pesan berhasil dikirim!");
            onClose();
          }}
        >
          <input
            type="text"
            placeholder="Nama"
            required
            className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Pesan"
            required
            className="w-full mb-3 px-4 py-2 border rounded dark:bg-gray-700 dark:text-white"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
