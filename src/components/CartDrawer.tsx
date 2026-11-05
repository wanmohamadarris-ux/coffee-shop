"use client";

import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { isOpen, closeCart, lines, setQuantity, removeItem, total, count } = useCart();

  const whatsappMessage = encodeURIComponent(
    `Hi Ember & Oak! I'd like to order:\n${lines
      .map((l) => `• ${l.quantity}x ${l.name} (RM ${(l.price * l.quantity).toFixed(2)})`)
      .join("\n")}\n\nTotal: RM ${total.toFixed(2)}`
  );

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-olive-dark/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-olive/10 px-6 py-5">
          <h2 className="flex items-center gap-2.5 font-serif text-xl font-semibold text-olive">
            <ShoppingBag className="h-5 w-5" />
            Your Order
            {count > 0 && (
              <span className="rounded-full bg-sage-light/60 px-2.5 py-0.5 text-xs font-semibold text-olive-dark">
                {count}
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-olive/10 hover:text-olive"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Items */}
        <div className="cart-scroll flex-1 overflow-y-auto px-6 py-5">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-light/40">
                <ShoppingBag className="h-8 w-8 text-olive/50" />
              </div>
              <p className="mt-5 font-serif text-lg text-olive">Your cart is empty</p>
              <p className="mt-1 text-sm text-ink/50">
                Something delicious is waiting for you.
              </p>
              <a
                href="#menu"
                onClick={closeCart}
                className="mt-5 rounded-full bg-olive px-6 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-olive-dark"
              >
                Browse Menu
              </a>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="flex gap-4 rounded-2xl border border-olive/10 bg-white p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={line.image}
                      alt={line.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate text-sm font-semibold text-olive">{line.name}</h3>
                      <button
                        onClick={() => removeItem(line.id)}
                        aria-label={`Remove ${line.name}`}
                        className="text-ink/35 transition-colors hover:text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-0.5 text-xs text-ink/50">RM {line.price.toFixed(2)} each</p>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-olive/20">
                        <button
                          onClick={() => setQuantity(line.id, line.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center text-olive transition-colors hover:text-gold-dark"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold text-olive">
                          {line.quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(line.id, line.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center text-olive transition-colors hover:text-gold-dark"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-olive">
                        RM {(line.price * line.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="border-t border-olive/10 bg-white/60 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink/60">Subtotal</span>
              <span className="font-serif text-xl font-bold text-olive">RM {total.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-ink/40">Pickup or delivery · taxes included</p>

            <a
              href={`https://wa.me/60123456789?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeCart}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white transition-all hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-ink/45">
              We'll confirm your order and pickup time on WhatsApp.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
