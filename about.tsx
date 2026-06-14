import Image from "next/image"
import { whatsappLink } from "@/lib/site"

type Service = {
  id: string
  eyebrow: string
  title: string
  description: string
  features: string[]
  image: string
  imageAlt: string
  waMessage: string
  reverse?: boolean
}

const services: Service[] = [
  {
    id: "tortas",
    eyebrow: "Tortas personalizadas",
    title: "Tortas a la medida de tu celebración",
    description:
      "Diseñamos tortas únicas para cumpleaños, bodas y aniversarios. Elegís sabores, rellenos y decoración, y nosotras creamos algo inolvidable.",
    features: ["Sabores y rellenos a elección", "Decoración personalizada", "Diseños temáticos y elegantes", "Tortas de letras y números"],
    image: "/images/torta-choco-frutos.png",
    imageAlt: "Torta de chocolate con frutos rojos, crema y dulce de leche",
    waMessage: "¡Hola! Quiero un presupuesto para una torta personalizada.",
  },
  {
    id: "catering",
    eyebrow: "Catering para eventos",
    title: "Mesas dulces que enamoran",
    description:
      "Mesas dulces y servicios de catering para eventos corporativos, casamientos y celebraciones. Variedad de mini postres presentados con elegancia.",
    features: ["Mesas dulces completas", "Mini postres y macarons", "Montaje y presentación incluidos", "Adaptado al estilo de tu evento"],
    image: "/images/catering.png",
    imageAlt: "Mesa dulce de evento con postres variados en tonos crema y rosa",
    waMessage: "¡Hola! Quiero información sobre catering para un evento.",
    reverse: true,
  },
  {
    id: "cajas",
    eyebrow: "Cajas de regalo",
    title: "Detalles dulces para regalar",
    description:
      "Cajas de regalo artesanales con cookies y pastelería fina, ideales para sorprender en cualquier ocasión o agasajar a tus seres queridos.",
    features: ["Packaging premium", "Surtidos personalizables", "Tarjeta con mensaje incluida", "Envío disponible"],
    image: "/images/gift-boxes.png",
    imageAlt: "Caja de regalo artesanal con galletas y pastelería en tonos crema",
    waMessage: "¡Hola! Quiero un presupuesto para una caja de regalo.",
  },
]

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="mt-0.5 size-5 shrink-0 text-primary">
      <circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15" />
      <path d="M6.5 10.2l2.3 2.3 4.7-4.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Services() {
  return (
    <div className="bg-secondary/30">
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="scroll-mt-24 border-b border-border/50 last:border-b-0"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
            <div className={service.reverse ? "lg:order-2" : ""}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border shadow-lg">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className={service.reverse ? "lg:order-1" : ""}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                {service.eyebrow}
              </span>
              <h2 className="mt-3 font-heading text-4xl font-medium leading-tight text-balance text-foreground md:text-5xl">
                {service.title}
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground text-pretty">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground">
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappLink(service.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  💬 Solicitar presupuesto
                </a>
                <a
                  href="/precios"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Ver precios →
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
