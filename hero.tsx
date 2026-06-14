"use client"

import type React from "react"

import { useState } from "react"
import { WHATSAPP_NUMBER } from "@/lib/site"

const services = ["Torta personalizada", "Catering para evento", "Caja de regalo", "Otro"]

export function QuoteForm() {
  const [form, setForm] = useState({
    nombre: "",
    servicio: services[0],
    fecha: "",
    detalle: "",
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const message =
      `¡Hola Rincón de Dulzura! Me gustaría solicitar un presupuesto.\n\n` +
      `• Nombre: ${form.nombre || "-"}\n` +
      `• Servicio: ${form.servicio}\n` +
      `• Fecha: ${form.fecha || "A definir"}\n` +
      `• Detalle: ${form.detalle || "-"}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"

  return (
    <section id="presupuesto" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Presupuesto
          </span>
          <h2 className="mt-3 font-heading text-4xl font-medium text-balance text-foreground md:text-5xl">
            Contanos qué estás imaginando
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Completá el formulario y te enviaremos un presupuesto sin compromiso
            directamente por WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-[2rem] border border-border bg-card p-6 shadow-lg md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
                className={inputClasses}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="servicio" className="text-sm font-medium text-foreground">
                Servicio
              </label>
              <select
                id="servicio"
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                className={inputClasses}
              >
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="fecha" className="text-sm font-medium text-foreground">
                Fecha del evento
              </label>
              <input
                id="fecha"
                type="date"
                value={form.fecha}
                onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="detalle" className="text-sm font-medium text-foreground">
                Contanos más
              </label>
              <textarea
                id="detalle"
                rows={4}
                value={form.detalle}
                onChange={(e) => setForm({ ...form, detalle: e.target.value })}
                placeholder="Cantidad de porciones, sabores, estilo, colores..."
                className={`${inputClasses} resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Solicitar presupuesto por WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Se abrirá WhatsApp con tu consulta lista para enviar.
          </p>
        </form>
      </div>
    </section>
  )
}
