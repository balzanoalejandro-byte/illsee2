import Image from "next/image"

const images = [
  { src: "/images/torta-choco-frutos.png", alt: "Torta de chocolate con frutos rojos y crema", span: "col-span-1 row-span-2" },
  { src: "/images/tarta-manzana.png", alt: "Tarta de manzana crumble artesanal" },
  { src: "/images/torta-letra.png", alt: "Torta en forma de letra con dulce de leche y merengue" },
  { src: "/images/torta-cheesecake.png", alt: "Cheesecake con cobertura de frutos rojos" },
  { src: "/images/rogel-interior.png", alt: "Interior del rogel con capas de dulce de leche", span: "col-span-2" },
  { src: "/images/torta-chocolate.png", alt: "Torta de chocolate artesanal" },
]

export function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Galería
          </span>
          <h2 className="mt-3 font-heading text-4xl font-medium text-balance text-foreground md:text-5xl">
            Un vistazo a nuestras{" "}
            <em className="italic text-primary">creaciones</em>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Cada postre es elaborado a mano con ingredientes seleccionados y mucho cariño.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-2xl border border-border shadow-sm group ${image.span ?? "aspect-square"} ${!image.span ? "aspect-square" : ""}`}
              style={image.span?.includes("row-span-2") ? { gridRow: "span 2" } : image.span?.includes("col-span-2") ? { gridColumn: "span 2", aspectRatio: "2/1" } : {}}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com/rincondedulzura.pasteleria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            📸 Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
