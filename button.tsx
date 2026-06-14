import { whatsappLink, DEFAULT_WA_MESSAGE, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site"

const links = [
  { label: "Tortas personalizadas", href: "#tortas" },
  { label: "Catering para eventos", href: "#catering" },
  { label: "Cajas de regalo", href: "#cajas" },
  { label: "Galería", href: "#galeria" },
  { label: "Lista de precios", href: "/precios" },
  { label: "Sobre mí", href: "#nosotros" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-2xl font-semibold text-foreground">
              Rincón de Dulzura
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Pastelería artesanal
            </p>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              Endulzamos tus momentos más especiales con creaciones hechas a mano y mucho amor.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">📍 Buenos Aires, Argentina</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Secciones
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={whatsappLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  📸 Instagram {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          {`© ${new Date().getFullYear()} Rincón de Dulzura · Pastelería artesanal · Buenos Aires`}
        </div>
      </div>
    </footer>
  )
}
