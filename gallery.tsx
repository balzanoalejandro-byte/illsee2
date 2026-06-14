"use client"

import Image from "next/image"
import { useState } from "react"
import { whatsappLink, DEFAULT_WA_MESSAGE, INSTAGRAM_URL } from "@/lib/site"

const navLinks = [
  { label: "Tortas", href: "#tortas" },
  { label: "Catering", href: "#catering" },
  { label: "Cajas de regalo", href: "#cajas" },
  { label: "Galería", href: "#galeria" },
  { label: "Precios", href: "/precios" },
  { label: "Sobre mí", href: "#nosotros" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <a href="#inicio" className="flex items-center gap-3 leading-none">
          <Image
            src="/images/logo.jpg"
            alt="Rincón de Dulzura"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
          />
          <span className="flex flex-col">
            <span className="font-heading text-xl font-semibold tracking-wide text-foreground">
              Rincón de Dulzura
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
              Pastelería artesanal
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:inline"
          >
            Instagram
          </a>
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Presupuesto
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-card lg:hidden"
          >
            <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Solicitar presupuesto
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
