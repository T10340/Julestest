"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section className="w-full py-20 flex justify-center bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-emerald-950 px-6 py-16 md:py-24 text-center border border-emerald-800 shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[300px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-lg md:text-xl text-emerald-100/80">
              Discutons de vos objectifs et découvrons comment nous pouvons vous aider à les atteindre avec une solution sur-mesure.
            </p>
            <div className="pt-4">
              <Button size="lg" className="h-14 px-10 text-lg bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold rounded-full shadow-lg hover:shadow-emerald-500/25 transition-all">
                Contactez-nous aujourd'hui
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
