"use client"

import { motion } from "framer-motion"
import { PenTool, Code, Search } from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Design UI/UX",
    description: "Des interfaces intuitives et esthétiques qui captivent vos utilisateurs et améliorent la conversion.",
  },
  {
    icon: Code,
    title: "Développement Web",
    description: "Des sites robustes, rapides et évolutifs construits avec les dernières technologies du marché.",
  },
  {
    icon: Search,
    title: "Optimisation SEO",
    description: "Une visibilité accrue sur les moteurs de recherche pour attirer un trafic qualifié et pérenne.",
  },
]

export function Services() {
  return (
    <section className="w-full py-20 md:py-32 flex justify-center bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Nos Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une expertise complète pour transformer votre vision en réalité digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-500/30 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -z-10 group-hover:bg-emerald-500/10 transition-colors duration-300" />

              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
